import React from 'react';
import { connect } from 'react-redux';


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
                                    <input className={'fancy-input'} onChange={this.props.changeHandler}/>
                                </label>

                                <select className={'fancy-select'}>
                                    <option>Brutto</option>
                                    <option>Netto</option>
                                </select>
                            </div>

                            <div className={'birth-place-holder'}>
                                <p className={'fancy-text'}>Czy miejsce zamieszkania jest w tym samym miejscu co miejsce pracy</p>
                                <select className={'fancy-select'}>
                                    <option>Tak</option>
                                    <option>Nie</option>
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
                                <select className={'fancy-select b2b-select'}>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>32</option>
                                </select>
                            </label>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Podstawa wymiaru skladek</p>
                                <select className={'fancy-select b2b-select'}>
                                    <option>Maly ZUS</option>
                                    <option>Duzy ZUS</option>
                                </select>
                            </label>

                            <div className={'income-cost'}>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Komputer [zl]</p>
                                    <input className={'fancy-input b2b-input'}/>
                                </label>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Telefon [zl]</p>
                                    <input className={'fancy-input b2b-input'}/>
                                </label>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Samochod [zl]</p>
                                    <input className={'fancy-input b2b-input'}/>
                                </label>

                                <label className={'b2b-label last-label'}>
                                    <p className={'fancy-text b2b-text'}>Paliwo [zl]</p>
                                    <input className={'fancy-input b2b-input'}/>
                                </label>

                            </div>

                        </div>

                    </div>

                    <div className={'calculate-holder'}>
                        <button className={'fancy-button'}>Oblicz</button>
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
        result: state.result
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        changeHandler: (e) => {
            const action = { type: 'CHANGEDRESULT', result: e.target.value};
            dispatch(action);
            console.log(e.target.value)
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(MainCalc);
