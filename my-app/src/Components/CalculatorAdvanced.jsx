import React from 'react';

class CalculatorAdvanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5000,
            taxPercentage: 18,
            samePlace: 'tak',
            zusType: 111.25,
            collection: 1.56,
            brutSalary: 5000,
            skladkaEmerytalna: Math.round((this.brutSalary * 0.0976 + 0.00001) * 100) / 100,

        }
    }




    render() {
        return (

                <div className={'calculator-advanced'}>

                    <div className={'advanced-left-column'}>

                        <h3>Podstawy</h3>

                        <div className={'advanced-upper-holder'}>
                            <table>
                                <tbody>

                                <tr>
                                    <td>Pensja Brutto na umowie o prace</td>
                                    <td>{this.state.value}</td>
                                </tr>

                                <tr>
                                    <td>Kwota Netto na fakturze</td>
                                    <td>{this.state.value}</td>
                                </tr>

                                <tr>
                                    <td>Podatek-dzialalnosc</td>
                                    <td>{this.state.taxPercentage}%</td>
                                </tr>

                                <tr>
                                    <td>Podstawa wymiary składek dla przedsiębiorcy</td>
                                    <td>{this.state.zusType}ZUS</td>
                                </tr>

                                <tr>
                                    <td>Składka wypadkowa do umowy o pracę</td>
                                    <td>{this.state.collection}%</td>
                                </tr>

                                </tbody>
                            </table>

                        </div>

                        <div className={'table-second-holder'}>
                            <table>
                                <tbody>

                                <tr>
                                    <td>Ekwiwalent na fakturze (z VAT)</td>
                                    <td>{this.state.value}</td>
                                </tr>
                                <tr>
                                    <th colSpan={2}>Dane źródłowe na 2019</th>
                                </tr>
                                <tr>
                                    <td>Podstawa ubez. Zdrowotne w 2019</td>
                                    <td>{this.state.value}</td>
                                </tr>
                                <tr>
                                    <td>Podstawa ubez. Społeczne w 2019</td>
                                    <td>{this.state.value}</td>
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
                                <td>{this.state.skladkaEmerytalna}zl</td>
                            </tr>
                            <tr>
                                <td>Składka rentowa</td>
                                <td>6.50%</td>
                                <td>{Math.round((this.state.brutSalary * 0.0650 + 0.00001) * 100) / 100}zl</td>
                            </tr>
                            <tr>
                                <td>Składka wypadkowa</td>
                                <td>1.67%</td>
                                <td>{Math.round((this.state.brutSalary * 0.0167 + 0.00001) * 100) / 100}zl</td>
                            </tr>
                            <tr>
                                <td>Fundusz pracy</td>
                                <td>2.45%</td>
                                <td>{Math.round((this.state.brutSalary * 0.0245 + 0.00001) * 100) / 100}zl</td>
                            </tr>
                            <tr>
                                <td>FGŚP</td>
                                <td>0.10%</td>
                                <td>{Math.round((this.state.brutSalary * 0.0010 + 0.00001) * 100) / 100}zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Spoleczne - koszt pracownika</th>
                            </tr>
                            <tr>
                                <td>Składka emerytalna</td>
                                <td>9.76%</td>
                                <td>{Math.round((this.state.brutSalary * 0.0976 + 0.00001) * 100) / 100}zl</td>
                            </tr>
                            <tr>
                                <td>Składka rentowa</td>
                                <td>1.50%</td>
                                <td>{Math.round((this.state.brutSalary * 0.0150 + 0.00001) * 100) / 100}zl</td>
                            </tr>
                            <tr>
                                <td>Składka chorobowa</td>
                                <td>2.45%</td>
                                <td>{Math.round((this.state.brutSalary * 0.0245 + 0.00001) * 100) / 100}zl</td>
                            </tr>


                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Zdrowotne - koszt pracownika</th>
                            </tr>
                            <tr>
                                <td>Podstawa do skladki zdrowotnej</td>
                                <td colSpan={2}>{Math.round((this.state.brutSalary * 0.8629 + 0.00001) * 100) / 100}zl</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna</td>
                                <td>9%</td>
                                <td>{Math.round(((this.state.brutSalary * 0.8629 + 0.00001) * 0.09) * 100) / 100}zl</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna do odliczenia</td>
                                <td>7.75%</td>
                                <td>{Math.round(((this.state.brutSalary * 0.8629 + 0.00001) * 0.0775) * 100) / 100}zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Pozostale</th>
                            </tr>
                            <tr>
                                <td>Koszty uzyskania przychodu</td>
                                <td colSpan={2}>{this.state.zusType}zl</td>
                            </tr>
                            <tr>
                                <td>Podstawa do opodatkowania</td>
                                <td colSpan={2}>{Math.round((this.state.brutSalary * 0.8629 + 0.00001) * 100) / 100 - this.state.zusType}zl</td>
                            </tr>
                            <tr>
                                <td>Podatek dochodowy</td>
                                <td colSpan={2}>{Math.round(((Math.round((this.state.brutSalary * 0.8629 + 0.00001) * 100) / 100 - this.state.zusType) * 0.18 - 46.33) *100) / 100}zl</td>
                            </tr>
                            <tr>
                                <td>Zaliczka na podatek dochodowy</td>
                                <td colSpan={2}>428zl</td>
                            </tr>

                            <tr>
                                <td>Zarobek lacznie netto pracownika</td>
                                <td colSpan={2}>428zl</td>
                            </tr>
                            <tr>
                                <td>Laczny koszt pracodawcy</td>
                                <td colSpan={2}>428zl</td>
                            </tr>

                            <tr>
                                <td>W przypadku choroby za każdy dzień nieobecności dostaniesz</td>
                                <td colSpan={2}>428zl</td>
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

export default CalculatorAdvanced;