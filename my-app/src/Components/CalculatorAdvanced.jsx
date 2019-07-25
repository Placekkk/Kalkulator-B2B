import React from 'react';

class CalculatorAdvanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 3333,
            taxPercentage: 18,
            samePlace: 'tak',
            zusType: 'Maly ',
            collection: 1.56,
        }
    }

    render() {
        return (

                <div className={'calculator-advanced'}>

                    <div className={'advanced-left-column'}>

                        <h3>Podstawy</h3>

                        <div>

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
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>Składka rentowa</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>Składka wypadkowa</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>Fundusz pracy</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>FGŚP</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Spoleczne - koszt pracownika</th>
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
                                <td>Składka chorobowa</td>
                                <td>5%</td>
                                <td>428zl</td>
                            </tr>


                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Zdrowotne - koszt pracownika</th>
                            </tr>
                            <tr>
                                <td>Podstawa do skladki zdrowotnej</td>
                                <td colSpan={2}>428zl</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna</td>
                                <td>9%</td>
                                <td>428zl</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna do odliczenia</td>
                                <td>9%</td>
                                <td>428zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Pozostale</th>
                            </tr>
                            <tr>
                                <td>Koszty uzyskania przychodu</td>
                                <td colSpan={2}>428zl</td>
                            </tr>
                            <tr>
                                <td>Podstawa do opodatkowania</td>
                                <td colSpan={2}>428zl</td>
                            </tr>
                            <tr>
                                <td>Podatek dochodowy</td>
                                <td colSpan={2}>428zl</td>
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