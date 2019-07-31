import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from "./MainCalc";

class CalculatorAdvanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brutSalary: 0,
            zusType: 'maly ZUS',
            skladkaEmerytalnaPracodawcy: 0,
            skladkaRentowaPracodawcy: 0,
            skladkaWypadkowa: 0,
            funduszPracy: 0,
            fgsp: 0,
            skladkaEmerytalnaPracownika: 0,
            skladkaRentowaPracownika: 0,
            skladkaChorobowa: 0,
            podstawaSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            kosztyUzyskaniaPrzychodu: 111.25,
            podstawaDoOpodatkowania: 0,
            procentPodatkuDochodowego: 0.18,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            zarobekLacznieNettoPracownika: 0,
            lacznyKosztPracodawcy: 0,
            podstawaChorobowego: 0,
            podstawaChorobowego2: 0,
            dzienNieobecnosciPracownik: 0,
            ekwiwalentNaFakturze: 0,
        }
    }

    componentDidMount() {
        const setBrutSalary = () => {
            this.setState({
                brutSalary: this.props.finalUopSalary
            });
            console.log('brusala')
        };
        const setSkladki = () => {
            this.setState({
                skladkaEmerytalnaPracodawcy: Math.round((this.state.brutSalary * 0.0976 + 0.00001) * 100) / 100,
                skladkaRentowaPracodawcy: Math.round((this.state.brutSalary * 0.0650 + 0.00001) * 100) / 100,
                skladkaWypadkowa: Math.round((this.state.brutSalary * 0.0167 + 0.00001) * 100) / 100,
                funduszPracy: Math.round((this.state.brutSalary * 0.0245 + 0.00001) * 100) / 100,
                fgsp: Math.round((this.state.brutSalary * 0.0010 + 0.00001) * 100) / 100,
                skladkaEmerytalnaPracownika: Math.round((this.state.brutSalary * 0.0976 + 0.00001) * 100) / 100,
                skladkaRentowaPracownika: Math.round((this.state.brutSalary * 0.0150 + 0.00001) * 100) / 100,
                skladkaChorobowa: Math.round((this.state.brutSalary * 0.0245 + 0.00001) * 100) / 100,
                podstawaChorobowego: Math.round((this.state.brutSalary * 0.8629 + 0.00001) * 100) / 100
            });
            console.log('secondary')
        };
        const setBasics = () => {
            this.setState({
                podstawaSkladkiZdrowotnej: this.state.brutSalary - this.state.skladkaEmerytalnaPracownika - this.state.skladkaRentowaPracownika - this.state.skladkaChorobowa,
                podstawaChorobowego2: Math.round((this.state.podstawaChorobowego * 0.8) * 100) / 100
            });
            console.log('tertiary')
        };
        const setReductions = () => {
            this.setState({
                skladkaZdrowotna: Math.round((this.state.podstawaSkladkiZdrowotnej * 0.0900 + 0.00001) * 100) / 100,
                skladkaZdrowotnaDoOdliczenia: Math.round((this.state.podstawaSkladkiZdrowotnej * 0.0775 + 0.00001) * 100) / 100,
                podstawaDoOpodatkowania: this.state.podstawaSkladkiZdrowotnej - this.state.kosztyUzyskaniaPrzychodu,
                dzienNieobecnosciPracownik: Math.round((this.state.podstawaChorobowego2 / 30) * 100) / 100
            });
            console.log('reductions')
        };
        const setIncomeTax = () => {
            this.setState({
                podatekDochodowy: Math.round((this.state.podstawaDoOpodatkowania * this.state.procentPodatkuDochodowego) * 100) / 100 - 46.33
            });
            console.log('incometax')
        };
        const setPrepaidTax = () => {
            this.setState({
                zaliczkaNaPodatekDochodowy: this.state.podatekDochodowy - this.state.skladkaZdrowotnaDoOdliczenia
            })
        };
        const setFullEmployerCost = () => {
            this.setState({
                zarobekLacznieNettoPracownika: this.state.brutSalary - this.state.skladkaEmerytalnaPracownika - this.state.skladkaRentowaPracownika - this.state.skladkaChorobowa -
                    this.state.skladkaZdrowotna - this.state.zaliczkaNaPodatekDochodowy,
                lacznyKosztPracodawcy: this.state.brutSalary + this.state.skladkaRentowaPracodawcy + this.state.skladkaEmerytalnaPracodawcy + this.state.skladkaWypadkowa +
                    this.state.funduszPracy + this.state.fgsp,
            })
        };
        const setEkwiwalent = () => {
            this.setState({
                ekwiwalentNaFakturze: Math.round((this.state.lacznyKosztPracodawcy * 1.23) * 100) / 100
            })
        };
        setBrutSalary();
        setSkladki();
        setBasics();
        setReductions();
        setIncomeTax();
        setPrepaidTax();
        setFullEmployerCost();
        setEkwiwalent();
    }

    handleFuse = () => {
        this.forceUpdate()
    };

    render() {
        console.log('renderrrrrrrr');
        console.log(this.props.finalUopSalary + 'props salaryu');
        console.log(this.state.brutSalary + 'stata salary');
        return (

                <div className={'calculator-advanced'} style={this.props.elStyle}>

                    <div className={'advanced-left-column'}>

                        <h3 onClick={this.handleFuse}>Podstawy {this.props.finalUopSalary}</h3>

                        <div className={'advanced-upper-holder'}>
                            <table>
                                <tbody>

                                <tr>
                                    <td>Pensja Brutto na umowie o prace</td>
                                    <td>{this.state.brutSalary}</td>
                                </tr>

                                <tr>
                                    <td>Kwota Netto na fakturze</td>
                                    <td>{this.state.lacznyKosztPracodawcy}</td>
                                </tr>

                                <tr>
                                    <td>Podatek-dzialalnosc</td>
                                    <td>{this.state.procentPodatkuDochodowego * 100}%</td>
                                </tr>

                                <tr>
                                    <td>Podstawa wymiaru składek dla przedsiębiorcy</td>
                                    <td>{this.state.zusType}</td>
                                </tr>

                                <tr>
                                    <td>Składka wypadkowa do umowy o pracę</td>
                                    <td>1.67%</td>
                                </tr>

                                </tbody>
                            </table>

                        </div>

                        <div className={'table-second-holder'}>
                            <table>
                                <tbody>

                                <tr>
                                    <td>Ekwiwalent na fakturze (z VAT)</td>
                                    <td>{this.state.ekwiwalentNaFakturze}zl</td>
                                </tr>
                                <tr>
                                    <th colSpan={2}>Dane źródłowe na 2019</th>
                                </tr>
                                <tr>
                                    <td>Podstawa ubez. Zdrowotne w 2019</td>
                                    <td>{3803.56}zl</td>
                                </tr>
                                <tr>
                                    <td>Podstawa ubez. Społeczne w 2019</td>
                                    <td>{this.state.zusType === "maly ZUS" ? 675.00 : 2859.00}zl</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className={'advanced-middle-column'}>

                        <h3>Zatrudnienie na etacie / 1 miesiąc</h3>

                        <table>
                            <tbody>
                            <tr>
                                <td>Rodzaj daniny</td>
                                <td>[%]</td>
                                <td>[Zł]</td>
                            </tr>
                            <tr>
                                <th colSpan={3} className={'title-cell'}>Składki Społeczne - koszt pracodawcy</th>
                            </tr>
                            <tr>
                                <td>Składka emerytalna</td>
                                <td>9,76%</td>
                                <td>{this.state.skladkaEmerytalnaPracodawcy}zl</td>
                            </tr>
                            <tr>
                                <td>Składka rentowa</td>
                                <td>6.50%</td>
                                <td>{this.state.skladkaRentowaPracodawcy}zl</td>
                            </tr>
                            <tr>
                                <td>Składka wypadkowa</td>
                                <td>1.67%</td>
                                <td>{this.state.skladkaWypadkowa}zl</td>
                            </tr>
                            <tr>
                                <td>Fundusz pracy</td>
                                <td>2.45%</td>
                                <td>{this.state.funduszPracy}zl</td>
                            </tr>
                            <tr>
                                <td>FGŚP</td>
                                <td>0.10%</td>
                                <td>{this.state.fgsp}zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Spoleczne - koszt pracownika</th>
                            </tr>
                            <tr>
                                <td>Składka emerytalna</td>
                                <td>9.76%</td>
                                <td>{this.state.skladkaEmerytalnaPracownika}zl</td>
                            </tr>
                            <tr>
                                <td>Składka rentowa</td>
                                <td>1.50%</td>
                                <td>{this.state.skladkaRentowaPracownika}zl</td>
                            </tr>
                            <tr>
                                <td>Składka chorobowa</td>
                                <td>2.45%</td>
                                <td>{this.state.skladkaChorobowa}zl</td>
                            </tr>


                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Zdrowotne - koszt pracownika</th>
                            </tr>
                            <tr>
                                <td>Podstawa do skladki zdrowotnej</td>
                                <td colSpan={2}>{this.state.podstawaSkladkiZdrowotnej}zl</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna</td>
                                <td>9%</td>
                                <td>{this.state.skladkaZdrowotna}zl</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna do odliczenia</td>
                                <td>7.75%</td>
                                <td>{this.state.skladkaZdrowotnaDoOdliczenia}zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Pozostale</th>
                            </tr>
                            <tr>
                                <td>Koszty uzyskania przychodu</td>
                                <td colSpan={2}>{this.state.kosztyUzyskaniaPrzychodu}zl</td>
                            </tr>
                            <tr>
                                <td>Podstawa do opodatkowania</td>
                                <td colSpan={2}>{this.state.podstawaDoOpodatkowania}zl</td>
                            </tr>
                            <tr>
                                <td>Podatek dochodowy</td>
                                <td colSpan={2}>{this.state.podatekDochodowy}zl</td>
                            </tr>
                            <tr>
                                <td>Zaliczka na podatek dochodowy</td>
                                <td colSpan={2}>{this.state.zaliczkaNaPodatekDochodowy}zl</td>
                            </tr>

                            <tr>
                                <td>Zarobek lacznie netto pracownika</td>
                                <td colSpan={2}>{this.state.zarobekLacznieNettoPracownika}zl</td>
                            </tr>
                            <tr>
                                <td>Laczny koszt pracodawcy</td>
                                <td colSpan={2}>{this.state.lacznyKosztPracodawcy}zl</td>
                            </tr>

                            <tr>
                                <td>W przypadku choroby za każdy dzień nieobecności dostaniesz</td>
                                <td colSpan={2}>{this.state.dzienNieobecnosciPracownik}zl</td>
                            </tr>

                            </tbody>
                        </table>

                    </div>

                    <div className={'advanced-right-column'}>

                        <h3>Umowa B2B / 1 miesiac</h3>

                        <table>
                            <tbody>
                            <tr>
                                <td>Rodzaj daniny</td>
                                <td>[%]</td>
                                <td>[Zł]</td>
                            </tr>
                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Społeczne - koszt przedsiebiorcy</th>
                            </tr>
                            <tr>
                                <td>Składka emerytalna</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>Składka rentowa</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>Skladka chorobowa</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>Składka wypadkowe</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>Fundusz pracy</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Zdrowotne - koszt przedsiebiorcy</th>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Koszty uzyskania przychodu - opcjonalne</th>
                            </tr>
                            <tr>
                                <td>Samochod</td>
                                <td colSpan={2}>428zl</td>
                            </tr>
                            <tr>
                                <td>Telefon</td>
                                <td colSpan={2}>428zl</td>
                            </tr>
                            <tr>
                                <td>Komputer</td>
                                <td colSpan={2}>428zl</td>
                            </tr>
                            <tr>
                                <td>Paliwo</td>
                                <td colSpan={2}>428zl</td>
                            </tr>


                            <tr>
                                <th className={'title-cell'} colSpan={3}>Pozostale</th>
                            </tr>
                            <tr>
                                <td>Razem do ZUS</td>
                                <td colSpan={2}>428zl</td>
                            </tr>
                            <tr>
                                <td>Podstawa do opodatkowania</td>
                                <td colSpan={2}>428zl</td>
                            </tr>
                            <tr>
                                <td>Podatek</td>
                                <td colSpan={2}>428zl</td>
                            </tr>

                            <tr>
                                <td>Zarobek lacznie</td>
                                <td colSpan={2}>428zl</td>
                            </tr>


                            </tbody>
                        </table>


                    </div>


                </div>


        )
    }
}

export default connect(mapStateToProps)(CalculatorAdvanced);