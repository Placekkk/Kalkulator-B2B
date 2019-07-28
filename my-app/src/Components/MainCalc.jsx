import React from 'react';
import { connect } from 'react-redux';
import store from "../store";


class MainCalc extends React.Component {

    render() {
        return (

            <div className={'first-main-holder'}>

                <form>

                    <div className={'both-holder'}>

                        <div className={'uop-holder'}>

                            <h3>Umowa o prace</h3>

                            <div className={'amount-holder'}>
                                <p className={'fancy-text'}>Wpisz kwote</p>
                                <label>
                                    <input className={'fancy-input'} onChange={this.props.handleUopSalary}/>
                                </label>

                                <select className={'fancy-select'} onChange={this.props.handleSalaryType}>
                                    <option value={'net'}>Netto</option>
                                    <option value={'brut'}>Brutto</option>
                                </select>
                            </div>

                            <div className={'birth-place-holder'}>
                                <p className={'fancy-text'}>Czy miejsce zamieszkania jest w tym samym miejscu co miejsce pracy</p>
                                <select className={'fancy-select'} onChange={this.props.handleSamePlace}>
                                    <option value={111.25}>Tak</option>
                                    <option value={139.06}>Nie</option>
                                </select>
                            </div>

                            <p className={'fancy-text'}>Koszty uzyskania przychodu uzyskane z tytulu jednej umowy wynosza 111,25
                                albo 139,06 przy zamieszkaniu w miesjscowosci poza zakladem pracy</p>

                        </div>

                        <div className={'b2b-holder'}>

                            <h3>Umowa B2B</h3>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Ekwiwalent na fakturze "na reke" (bez vat23%)</p>
                                <input className={'fancy-input b2b-input'}/>
                            </label>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Wybierz % podatku [%]</p>
                                <select className={'fancy-select b2b-select'} onChange={this.props.handlePercentageTax}>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>32</option>
                                </select>
                            </label>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Podstawa wymiaru skladek</p>
                                <select className={'fancy-select b2b-select'} onChange={this.props.handleZusType}>
                                    <option value={'malyZus'}>Maly ZUS</option>
                                    <option value={'duzyZus'}>Duzy ZUS</option>
                                </select>
                            </label>

                            <div className={'income-cost'}>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Komputer [zl]</p>
                                    <input className={'fancy-input b2b-input'} onChange={this.props.handleComputer}/>
                                </label>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Telefon [zl]</p>
                                    <input className={'fancy-input b2b-input'} onChange={this.props.handlePhone}/>
                                </label>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Samochod [zl]</p>
                                    <input className={'fancy-input b2b-input'} onChange={this.props.handleCar}/>
                                </label>

                                <label className={'b2b-label last-label'}>
                                    <p className={'fancy-text b2b-text'}>Paliwo [zl]</p>
                                    <input className={'fancy-input b2b-input'} onChange={this.props.handleFuel}/>
                                </label>

                            </div>

                        </div>

                    </div>

                    <div className={'calculate-holder'}>
                        <button className={'fancy-button'} onClick={this.props.clickHandler}>Oblicz</button>
                        <p className={'fancy-text'}>Tyle zyskasz wiecej na reke w przypadku b2b</p>
                        <div className={'calculate-input-holder'}>
                            <label>
                                Na miesiac
                                <input className={'fancy-input'}/>
                            </label>
                            <label>
                                W ciagu roku
                                <input className={'fancy-input'}/>
                            </label>
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
            const action = { type: 'CHANGEDRESULTSALARY', previousUopSalary: e.target.value};
            dispatch(action);
        },
        handleSalaryType: (e) => {
            const action = {type: 'CHANGEDRESULTTYPESALARY', previousTypeSalary: e.target.value};
            dispatch(action)
        },
        handleSamePlace: (e) => {
            const action = {type: 'CHANGEDRESULTSAMEPLACE', previousSamePlace: e.target.value};
            dispatch(action)
        },
        handlePercentageTax: (e) => {
            const action = {type: 'CHANGEDRESULPERCENTAGETAX', previousTaxPercentage: e.target.value};
            dispatch(action)
        },
        handleZusType: (e) => {
            const action = {type: 'CHANGEDRESULTZUSTYPE', previousZusType: e.target.value};
            dispatch(action)
        },
        handleComputer: (e) => {
            const action = {type: 'CHANGEDRESULTCOMPUTER', previousComputer: e.target.value};
            dispatch(action)
        },
        handlePhone: (e) => {
            const action = {type: 'CHANGEDRESULTPHONE', previousPhone: e.target.value};
            dispatch(action)
        },
        handleCar: (e) => {
            const action = {type: 'CHANGEDRESULTCAR', previousCar: e.target.value};
            dispatch(action)
        },
        handleFuel: (e) => {
            const action = {type: 'CHANGEDRESULTFUEL', previousFuel: e.target.value};
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
            const action = { type: 'CHANGEDRESULTSUBMIT', finalUopSalary: finalSalary, finalTypeSalary: finalTypeSalary, finalSamePlace: finalSamePlace,
            finalTaxPercentage: finalTaxPercentage, finalZusType: finalZusType, finalComputer: finalComputer, finalPhone: finalPhone,
            finalCar: finalCar, finalFuel: finalFuel};
            dispatch(action);
            console.log(shop)
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(MainCalc);
