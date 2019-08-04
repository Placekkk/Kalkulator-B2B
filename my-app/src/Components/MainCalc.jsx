import React from 'react';
import { connect } from 'react-redux';
import store from "../store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";


class MainCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoBarFirst: {
                display: 'none',
                color: 'yellow'
            },
        }
    }

    handleTest = () => {
        this.setState({
            infoBarFirst: {
                display: 'block'
            }
        })
    };
    handleTestExit = () => {
        this.setState({
            infoBarFirst: {
                display: 'none'
            }
        })
    };

    render() {
        console.log('renderMainCalc');
        let skladkaEmerytalnaPracodawcy = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracodawcy = Math.round((this.props.finalUopSalary * 0.0650 + 0.00001) * 100) / 100;
        let skladkaWypadkowa = Math.round((this.props.finalUopSalary * 0.0167 + 0.00001) * 100) / 100;
        let funduszPracy = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let fgsp = Math.round((this.props.finalUopSalary * 0.0010 + 0.00001) * 100) / 100;
        let skladkaEmerytalnaPracownika = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracownika = Math.round((this.props.finalUopSalary * 0.0150 + 0.00001) * 100) / 100;
        let skladkaChorobowa = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let podstawaSkladkiZdrowotnej = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa) * 100) /100;
        let skladkaZdrowotna = Math.round((podstawaSkladkiZdrowotnej * 0.0900 + 0.00001) * 100) / 100;
        let skladkaZdrowotnaDoOdliczenia = Math.round((podstawaSkladkiZdrowotnej * 0.0775 + 0.00001) * 100) / 100;
        let podstawaDoOpodatkowania = podstawaSkladkiZdrowotnej - this.props.finalSamePlace;
        let podatekDochodowy = ((Math.round(podstawaDoOpodatkowania * (0.18)) - 46.33) * 100) /100;
        let zaliczkaNaPodatekDochodowy = Math.round((podatekDochodowy - skladkaZdrowotnaDoOdliczenia) * 100) / 100;
        let zarobekLacznieNettoPracownika = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa -
            skladkaZdrowotna - zaliczkaNaPodatekDochodowy) * 100) / 100;
        let lacznyKosztPracodawcy = +this.props.finalUopSalary + +skladkaRentowaPracodawcy + +skladkaEmerytalnaPracodawcy + +skladkaWypadkowa + +funduszPracy + +fgsp;
        let skladkaEmerytalnaPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.1952) * 100) / 100 : Math.round((2859 * 0.1952) * 100) / 100;
        let skladkaRentowaPrzesiebiorcy = this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.08) * 100) / 100 : Math.round((2859 * 0.08) * 100) / 100;
        let skladkaChorobowaPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.0245) * 100) / 100 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaWypadkowaPrzedsiebiorcy =this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.0167) * 100) / 100 : Math.round((2859 * 0.0167) * 100) / 100;
        let funduszPracyPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS' ? 0 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaZdrowotnaPrzedsiebiorcy =Math.round((3803.56 * 0.09) * 100) /100;
        let skladkaZdrowotnaPrzesiebiorcy2 = Math.round((3803.56 * 0.0775) * 100) /100;
        let razemDoZusPrzedsiebiorcy = Math.round((skladkaZdrowotnaPrzedsiebiorcy + skladkaEmerytalnaPrzedsiebiorcy + skladkaRentowaPrzesiebiorcy +
            skladkaChorobowaPrzedsiebiorcy + skladkaWypadkowaPrzedsiebiorcy + funduszPracyPrzedsiebiorcy) * 100) / 100;
        let podstawaOpodatkowaniaPrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - ((this.props.finalCar * 0.2) + this.props.finalPhone + this.props.finalComputer
            + (this.props.finalFuel / 2))) * 100) / 100;
        let podatekPrzedsiebiorcy = Math.round((podstawaOpodatkowaniaPrzedsiebiorcy * (this.props.finalTaxPercentage / 100) - skladkaZdrowotnaPrzesiebiorcy2) * 100) / 100;
        let zarobekLaczniePrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - razemDoZusPrzedsiebiorcy - podatekPrzedsiebiorcy) * 100) / 100;

        console.log(this.props.finalCar, this.props.finalPhone, this.props.finalComputer, this.props.finalFuel);

        return (
            <div className={'first-main-holder'}>

                <form>

                    <div className={'both-holder'}>

                        <div className={'uop-holder'}>

                            <h3>Umowa o prace</h3>

                            <div className={'amount-holder'}>
                                <p className={'fancy-text'}>Wpisz kwote</p>
                                <label>
                                    <input className={'fancy-input extra-style'} onChange={this.props.handleUopSalary}/>
                                </label>

                                <select className={'fancy-select'} onChange={this.props.handleSalaryType}>
                                    <option value={'brut'}>Brutto</option>
                                    <option value={'net'}>Netto</option>
                                </select>
                            </div>

                            <div className={'birth-place-holder'}>
                                <p className={'fancy-text'}>Czy miejsce zamieszkania jest w tym samym miejscu co miejsce pracy <FontAwesomeIcon id={'info-icon'} icon={faInfoCircle}  onMouseEnter={this.handleTest} onMouseLeave={this.handleTestExit}/></p>
                                <select className={'fancy-select'} onChange={this.props.handleSamePlace}>
                                    <option value={111.25}>Tak</option>
                                    <option value={139.06}>Nie</option>
                                </select>
                            </div>

                            <p className={'fancy-text info-pop'} style={this.state.infoBarFirst}>Koszty uzyskania przychodu uzyskane z tytulu jednej umowy wynosza 111,25
                                albo 139,06 przy zamieszkaniu w miesjscowosci poza zakladem pracy</p>

                        </div>

                        <div className={'b2b-holder'}>

                            <h3>Umowa B2B</h3>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Ekwiwalent na fakturze "na reke" (bez vat23%)</p>
                                <p className={' b2b-display-par'}>{this.props.finalUopSalary !== 0 ? zarobekLaczniePrzedsiebiorcy : 0}zl</p>
                            </label>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Wybierz % podatku [%]</p>
                                <select className={'fancy-select b2b-select'} onChange={this.props.handlePercentageTax}>
                                    <option value={18}>18</option>
                                    <option value={19}>19</option>
                                    <option value={32}>32</option>
                                </select>
                            </label>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Podstawa wymiaru skladek</p>
                                <select className={'fancy-select b2b-select'} onChange={this.props.handleZusType}>
                                    <option value={'maly ZUS'}>Maly ZUS</option>
                                    <option value={'duzy ZUS'}>Duzy ZUS</option>
                                </select>
                            </label>

                            <div className={'income-cost'}>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Komputer [zl]</p>
                                    <input defaultValue={0} type='number' className={'fancy-input b2b-input'} onChange={this.props.handleComputer}/>
                                </label>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Telefon [zl]</p>
                                    <input defaultValue={0} type='number' className={'fancy-input b2b-input'} onChange={this.props.handlePhone}/>
                                </label>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Samochod [zl]</p>
                                    <input defaultValue={0} type='number' className={'fancy-input b2b-input'} onChange={this.props.handleCar}/>
                                </label>

                                <label className={'b2b-label last-label'}>
                                    <p className={'fancy-text b2b-text'}>Paliwo [zl]</p>
                                    <input defaultValue={0} type='number' className={'fancy-input b2b-input'} onChange={this.props.handleFuel}/>
                                </label>

                            </div>

                        </div>

                    </div>

                    <div className={'calculate-holder'}>
                        <button className={'fancy-button'} onClick={this.props.clickHandler}>Oblicz</button>
                        <p className={'fancy-text'}>Tyle zyskasz wiecej na reke w przypadku b2b</p>
                        <div className={'calculate-input-holder'}>
                            <div className={'sum-display'}>
                                <p>Na miesiac</p>
                                <p className={'sum-display-par'}>{this.props.finalUopSalary !== 0 ? Math.round((zarobekLaczniePrzedsiebiorcy - zarobekLacznieNettoPracownika) * 100) / 100 : 0}zl</p>
                            </div>
                            <div className={'sum-display'}>
                                <p>W ciagu roku</p>
                                <p className={'sum-display-par'}>{this.props.finalUopSalary !== 0 ? Math.round((Math.round((zarobekLaczniePrzedsiebiorcy - zarobekLacznieNettoPracownika) * 100) / 100 * 12) * 100) / 100 : 0}zl</p>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        previousUopSalary: state.previousUopSalary,
        finalUopSalary: state.finalUopSalary,
        previousTypeSalary: state.previousTypeSalary,
        finalTypeSalary: state.finalTypeSalary,
        previousSamePlace: state.previousSamePlace,
        finalSamePlace: state.finalSamePlace,
        previousTaxPercentage: state.previousTaxPercentage,
        finalTaxPercentage: state.finalTaxPercentage,
        previousZusType: state.previousZusType,
        finalZusType: state.finalZusType,
        previousComputer: state.previousComputer,
        finalComputer: state.finalComputer,
        previousPhone: state.previousPhone,
        finalPhone: state.finalPhone,
        previousCar: state.previousCar,
        finalCar: state.finalCar,
        previousFuel: state.previousFuel,
        finalFuel: state.finalFuel
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        handleUopSalary: (e) => {
            const action = { type: 'CHANGED_RESULT_SALARY', previousUopSalary: e.target.value};
            dispatch(action);
        },
        handleSalaryType: (e) => {
            const action = {type: 'CHANGED_RESULT_TYPE_SALARY', previousTypeSalary: e.target.value};
            dispatch(action)
        },
        handleSamePlace: (e) => {
            const action = {type: 'CHANGED_RESULT_SAME_PLACE', previousSamePlace: e.target.value};
            dispatch(action)
        },
        handlePercentageTax: (e) => {
            const action = {type: 'CHANGED_RESULT_PERCENTAGE_TAX', previousTaxPercentage: e.target.value};
            dispatch(action)
        },
        handleZusType: (e) => {
            const action = {type: 'CHANGED_RESULT_ZUSTYPE', previousZusType: e.target.value};
            dispatch(action)
        },
        handleComputer: (e) => {
            if (e.target.value.length === 0) {
                const action = {type: 'CHANGED_RESULT_COMPUTERL', previousComputer: 0};
                dispatch(action);
                return
            }
            const action = {type: 'CHANGED_RESULT_COMPUTER', previousComputer: parseInt(e.target.value)};
            dispatch(action)
        },
        handlePhone: (e) => {
            if (e.target.value.length === 0) {
                const action = {type: 'CHANGED_RESULT_PHONE', previousPhone: 0};
                dispatch(action);
                return
            }
            const action = {type: 'CHANGED_RESULT_PHONE', previousPhone: parseInt(e.target.value)};
            dispatch(action)
        },
        handleCar: (e) => {
            if (e.target.value.length === 0) {
                const action = {type: 'CHANGED_RESULT_CAR', previousCar: 0};
                dispatch(action);
                return
            }
            const action = {type: 'CHANGED_RESULT_CAR', previousCar: parseInt(e.target.value)};
            dispatch(action)
        },
        handleFuel: (e) => {
            if (e.target.value.length === 0) {
                const action = {type: 'CHANGED_RESULT_FUEL', previousFuel: 0};
                dispatch(action);
                return
            }
            const action = {type: 'CHANGED_RESULT_FUEL', previousFuel: parseInt(e.target.value)};
            dispatch(action)
        }
        ,
        clickHandler: (e) => {
            let shop = store.getState();
            let finalSalary = shop.previousUopSalary;
            let finalTypeSalary = shop.previousTypeSalary;
            let finalSamePlace = shop.previousSamePlace;
            let finalTaxPercentage = shop.previousTaxPercentage;
            let finalZusType = shop.previousZusType;
            let finalComputer = shop.previousComputer;
            let finalPhone = shop.previousPhone;
            let finalCar = shop.previousCar;
            let finalFuel = shop.previousFuel;

            e.preventDefault();
            const action = { type: 'CHANGED_RESULT_SUBMIT', finalUopSalary: finalSalary, finalTypeSalary: finalTypeSalary, finalSamePlace: finalSamePlace,
            finalTaxPercentage: finalTaxPercentage, finalZusType: finalZusType, finalComputer: finalComputer, finalPhone: finalPhone,
            finalCar: finalCar, finalFuel: finalFuel};
            dispatch(action);
            console.log(shop);
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(MainCalc);
