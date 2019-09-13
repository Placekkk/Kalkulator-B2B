import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from "./MainCalc";

class CalculatorAdvanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        let brutSalary = this.props.finalUopSalary;
        let skladkaEmerytalnaPracodawcy = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracodawcy = Math.round((this.props.finalUopSalary * 0.0650 + 0.00001) * 100) / 100;
        let skladkaWypadkowa = Math.round((this.props.finalUopSalary * 0.0167 + 0.00001) * 100) / 100;
        let funduszPracy = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let fgsp = Math.round((this.props.finalUopSalary * 0.0010 + 0.00001) * 100) / 100;
        let skladkaEmerytalnaPracownika = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaEmerytalnaPracownika2 = this.props.finalUopSalary * 0.0976 + 0.00001;
        let skladkaRentowaPracownika = Math.round((this.props.finalUopSalary * 0.0150 + 0.00001) * 100) / 100;
        let skladkaRentowaPracownika2 = this.props.finalUopSalary * 0.0150 + 0.00001;
        let skladkaChorobowa = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let skladkaChorobowa2 = this.props.finalUopSalary * 0.0245 + 0.00001;
        let podstawaChorobowego = Math.round((this.props.finalUopSalary * 0.8629 + 0.00001) * 100) / 100;
        let podstawaSkladkiZdrowotnej = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa) * 100) /100;
        let podstawaChorobowego2 = Math.round((podstawaChorobowego * 0.8) * 100) / 100;
        let skladkaZdrowotna = Math.round((podstawaSkladkiZdrowotnej * 0.0900 + 0.00001) * 100) / 100;
        let skladkaZdrowotna2 = podstawaSkladkiZdrowotnej * 0.0900 + 0.00001;
        let skladkaZdrowotnaDoOdliczenia = Math.round((podstawaSkladkiZdrowotnej * 0.0775 + 0.00001) * 100) / 100;
        let podstawaDoOpodatkowania = podstawaSkladkiZdrowotnej - this.props.finalSamePlace;
        let dzienNieobecnosciPracownik = Math.round((podstawaChorobowego2 / 30) * 100) / 100;
        let podatekDochodowy = ((Math.round(podstawaDoOpodatkowania * (0.18)) - 46.33) * 100) /100;
        let podatekDochodowy2 = podstawaDoOpodatkowania * (0.18) - 46.33;
        let zaliczkaNaPodatekDochodowy = Math.round((podatekDochodowy - skladkaZdrowotnaDoOdliczenia) * 100) / 100;
        let zaliczkaNaPodatekDochodowy2 = podatekDochodowy2 - skladkaZdrowotnaDoOdliczenia;
        let zarobekLacznieNettoPracownika = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika2 - skladkaRentowaPracownika2 - skladkaChorobowa2 -
            skladkaZdrowotna2 - zaliczkaNaPodatekDochodowy2) * 100) / 100;
        let lacznyKosztPracodawcy = Math.round((+this.props.finalUopSalary + +skladkaRentowaPracodawcy + +skladkaEmerytalnaPracodawcy + +skladkaWypadkowa + +funduszPracy + +fgsp) * 100) / 100;
        let ekwiwalentNaFakturze = Math.round((lacznyKosztPracodawcy * 1.23) * 100) / 100;
        let skladkaEmerytalnaPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.1952) * 100) / 100 : Math.round((2859 * 0.1952) * 100) / 100;
        let skladkaRentowaPrzesiebiorcy = this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.08) * 100) / 100 : Math.round((2859 * 0.08) * 100) / 100;
        let skladkaChorobowaPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS'? Math.round((675 * 0.0245) * 100) / 100 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaWypadkowaPrzedsiebiorcy =this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.0167) * 100) / 100 : Math.round((2859 * 0.0167) * 100) / 100;
        let funduszPracyPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS' ? 0 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaZdrowotnaPrzedsiebiorcy =Math.round((3803.56 * 0.09) * 100) /100;
        let skladkaZdrowotnaPrzesiebiorcy2 = Math.round((3803.56 * 0.0775) * 100) /100;
        let razemDoZusPrzedsiebiorcy = Math.round((skladkaZdrowotnaPrzedsiebiorcy + skladkaEmerytalnaPrzedsiebiorcy + skladkaRentowaPrzesiebiorcy +
            skladkaChorobowaPrzedsiebiorcy + skladkaWypadkowaPrzedsiebiorcy + funduszPracyPrzedsiebiorcy) * 100) / 100;
        let podstawaOpodatkowaniaPrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - ((this.props.finalCar * 0.2) + this.props.finalPhone + this.props.finalComputer
            + (this.props.finalFuel / 2))) * 100) / 100;
        let podatekPrzedsiebiorcy = Math.round((podstawaOpodatkowaniaPrzedsiebiorcy * (this.props.finalTaxPercentage / 100) - skladkaZdrowotnaPrzesiebiorcy2) * 100) / 100;
        let zarobekLaczniePrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - razemDoZusPrzedsiebiorcy - podatekPrzedsiebiorcy) * 100 ) / 100;
        let dzienNieobecnosciPrzedsiebiorcy = Math.round(((((this.props.finalSamePlace === 'maly ZUS' ? 675 : 2859) * 0.8629) * 0.8) / 30 + 7.12) * 100) / 100;

        return (
                <div className={'calculator-advanced'} style={this.props.elStyle}>

                    <div className={'advanced-left-column'}>

                        <h3>Podstawy</h3>

                        <table>
                            <tbody>

                            <tr>
                                <td>Pensja Brutto na umowie o pracę</td>
                                <td style={{borderLeft: 'none'}}>{Math.round(brutSalary)}zł</td>
                            </tr>

                            <tr>
                                <td>Kwota Netto na fakturze</td>
                                <td style={{borderLeft: 'none'}}>{lacznyKosztPracodawcy}zł</td>
                            </tr>

                            <tr>
                                <td>Podatek-dzialalność</td>
                                <td style={{borderLeft: 'none'}}>{this.props.finalTaxPercentage}%</td>
                            </tr>

                            <tr>
                                <td>Podstawa wymiaru składek dla przedsiębiorcy</td>
                                <td style={{borderLeft: 'none'}}>{this.props.finalZusType === 'maly ZUS' ? "maly ZUS" : "duzy ZUS"}</td>
                            </tr>

                            <tr>
                                <td>Składka wypadkowa do umowy o pracę</td>
                                <td style={{borderLeft: 'none'}}>1.67%</td>
                            </tr>

                            <tr>
                                <td>Ekwiwalent na fakturze (z VAT)</td>
                                <td style={{borderLeft: 'none'}}>{ekwiwalentNaFakturze}zł</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Dane źródłowe na 2019</th>
                            </tr>
                            <tr>
                                <td>Podstawa ubez. Zdrowotne w 2019</td>
                                <td style={{borderLeft: 'none'}}>{3803.56}zł</td>
                            </tr>
                            <tr>
                                <td>Podstawa ubez. Społeczne w 2019</td>
                                <td style={{borderLeft: 'none'}}>{this.props.finalZusType === 111.25 ? 675.00 : 2859.00}zł</td>
                            </tr>
                            </tbody>
                        </table>

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
                                <td>{skladkaEmerytalnaPracodawcy}zł</td>
                            </tr>
                            <tr>
                                <td>Składka rentowa</td>
                                <td>6.50%</td>
                                <td>{skladkaRentowaPracodawcy}zł</td>
                            </tr>
                            <tr>
                                <td>Składka wypadkowa</td>
                                <td>1.67%</td>
                                <td>{skladkaWypadkowa}zł</td>
                            </tr>
                            <tr>
                                <td>Fundusz pracy</td>
                                <td>2.45%</td>
                                <td>{funduszPracy}zł</td>
                            </tr>
                            <tr>
                                <td>FGŚP</td>
                                <td>0.10%</td>
                                <td>{fgsp}zł</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Spoleczne - koszt pracownika</th>
                            </tr>
                            <tr>
                                <td>Składka emerytalna</td>
                                <td>9.76%</td>
                                <td>{skladkaEmerytalnaPracownika}zł</td>
                            </tr>
                            <tr>
                                <td>Składka rentowa</td>
                                <td>1.50%</td>
                                <td>{skladkaRentowaPracownika}zł</td>
                            </tr>
                            <tr>
                                <td>Składka chorobowa</td>
                                <td>2.45%</td>
                                <td>{skladkaChorobowa}zł</td>
                            </tr>


                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Zdrowotne - koszt pracownika</th>
                            </tr>
                            <tr>
                                <td>Podstawa do skladki zdrowotnej</td>
                                <td colSpan={2}>{podstawaSkladkiZdrowotnej}zł</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna</td>
                                <td>9%</td>
                                <td>{skladkaZdrowotna}zł</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna do odliczenia</td>
                                <td>7.75%</td>
                                <td>{skladkaZdrowotnaDoOdliczenia}zł</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Pozostałe</th>
                            </tr>
                            <tr>
                                <td>Koszty uzyskania przychodu</td>
                                <td colSpan={2}>{this.props.finalSamePlace}zł</td>
                            </tr>
                            <tr>
                                <td>Podstawa do opodatkowania</td>
                                <td colSpan={2}>{podstawaDoOpodatkowania}zł</td>
                            </tr>
                            <tr>
                                <td>Podatek dochodowy</td>
                                <td colSpan={2}>{podatekDochodowy}zł</td>
                            </tr>
                            <tr>
                                <td>Zaliczka na podatek dochodowy</td>
                                <td colSpan={2}>{zaliczkaNaPodatekDochodowy}zł</td>
                            </tr>

                            <tr>
                                <td>Zarobek lacznie netto pracownika</td>
                                <td colSpan={2}>{Math.round(zarobekLacznieNettoPracownika)}zł</td>
                            </tr>
                            <tr>
                                <td>Laczny koszt pracodawcy</td>
                                <td colSpan={2}>{lacznyKosztPracodawcy}zł</td>
                            </tr>

                            <tr>
                                <td>W przypadku choroby za każdy dzień nieobecności dostaniesz</td>
                                <td colSpan={2}>{dzienNieobecnosciPracownik}zł</td>
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
                                <td>19.52%</td>
                                <td>{skladkaEmerytalnaPrzedsiebiorcy}zl</td>
                            </tr>
                            <tr>
                                <td>Składka rentowa</td>
                                <td>8%</td>
                                <td>{skladkaRentowaPrzesiebiorcy}zl</td>
                            </tr>
                            <tr>
                                <td>Skladka chorobowa</td>
                                <td>2.45%</td>
                                <td>{skladkaChorobowaPrzedsiebiorcy}zl</td>
                            </tr>
                            <tr>
                                <td>Składka wypadkowa</td>
                                <td>1.67%</td>
                                <td>{skladkaWypadkowaPrzedsiebiorcy}zl</td>
                            </tr>
                            <tr>
                                <td>Fundusz pracy</td>
                                <td>{this.props.finalZusType === 111.25 ? 0 : 2.45}%</td>
                                <td>{funduszPracyPrzedsiebiorcy}zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Składki Zdrowotne - koszt przedsiebiorcy</th>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna</td>
                                <td>9%</td>
                                <td>{skladkaZdrowotnaPrzedsiebiorcy}zl</td>
                            </tr>
                            <tr>
                                <td>Składka zdrowotna</td>
                                <td>7.75%</td>
                                <td>{skladkaZdrowotnaPrzesiebiorcy2}zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Koszty uzyskania przychodu - opcjonalne</th>
                            </tr>
                            <tr>
                                <td>Komputer</td>
                                <td colSpan={2}>{this.props.finalComputer}zl</td>
                            </tr>
                            <tr>
                                <td>Telefon</td>
                                <td colSpan={2}>{this.props.finalPhone}zl</td>
                            </tr>
                            <tr>
                                <td>Samochod</td>
                                <td colSpan={2}>{this.props.finalCar}zl</td>
                            </tr>
                            <tr>
                                <td>Paliwo</td>
                                <td colSpan={2}>{this.props.finalFuel}zl</td>
                            </tr>

                            <tr>
                                <th className={'title-cell'} colSpan={3}>Pozostale</th>
                            </tr>
                            <tr>
                                <td>Razem do ZUS</td>
                                <td colSpan={2}>{razemDoZusPrzedsiebiorcy}zl</td>
                            </tr>
                            <tr>
                                <td>Podstawa do opodatkowania</td>
                                <td colSpan={2}>{podstawaOpodatkowaniaPrzedsiebiorcy}zl</td>
                            </tr>
                            <tr>
                                <td>Podatek</td>
                                <td colSpan={2}>{podatekPrzedsiebiorcy}zl</td>
                            </tr>

                            <tr>
                                <td>Zarobek lacznie</td>
                                <td colSpan={2}>{zarobekLaczniePrzedsiebiorcy}zl</td>
                            </tr>
                            <tr>
                                <td>W przypadku choroby na jeden dzien dostaniesz</td>
                                <td colSpan={2}>{dzienNieobecnosciPrzedsiebiorcy}zl</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}

export default connect(mapStateToProps)(CalculatorAdvanced);