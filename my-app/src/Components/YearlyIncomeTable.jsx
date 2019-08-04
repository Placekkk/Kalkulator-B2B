import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from "./MainCalc";
import store from "../store";
import TableRowBasic from "./TableRowBasic";



class YearlyIncomeTable extends React.Component {
    render() {
        let brutSalary = this.props.finalUopSalary;
        let skladkaEmerytalnaPracodawcy = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracodawcy = Math.round((this.props.finalUopSalary * 0.0650 + 0.00001) * 100) / 100;
        let skladkaWypadkowa = Math.round((this.props.finalUopSalary * 0.0167 + 0.00001) * 100) / 100;
        let funduszPracy = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let fgsp = Math.round((this.props.finalUopSalary * 0.0010 + 0.00001) * 100) / 100;
        let skladkaEmerytalnaPracownika = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracownika = Math.round((this.props.finalUopSalary * 0.0150 + 0.00001) * 100) / 100;
        let skladkaChorobowa = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let podstawaChorobowego = Math.round((this.props.finalUopSalary * 0.8629 + 0.00001) * 100) / 100;
        let podstawaSkladkiZdrowotnej = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa) * 100) /100;
        let podstawaChorobowego2 = Math.round((podstawaChorobowego * 0.8) * 100) / 100;
        let skladkaZdrowotna = Math.round((podstawaSkladkiZdrowotnej * 0.0900 + 0.00001) * 100) / 100;
        let skladkaZdrowotnaDoOdliczenia = Math.round((podstawaSkladkiZdrowotnej * 0.0775 + 0.00001) * 100) / 100;
        let podstawaDoOpodatkowania = podstawaSkladkiZdrowotnej - this.props.finalZusType;
        let dzienNieobecnosciPracownik = Math.round((podstawaChorobowego2 / 30) * 100) / 100;
        let podatekDochodowy = ((Math.round(podstawaDoOpodatkowania * (0.18)) - 46.33) * 100) /100;
        let zaliczkaNaPodatekDochodowy = Math.round((podatekDochodowy - skladkaZdrowotnaDoOdliczenia) * 100) / 100;
        let zarobekLacznieNettoPracownika = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa -
            skladkaZdrowotna - zaliczkaNaPodatekDochodowy) * 100) / 100;
        let lacznyKosztPracodawcy = Math.round((+this.props.finalUopSalary + +skladkaRentowaPracodawcy + +skladkaEmerytalnaPracodawcy + +skladkaWypadkowa + +funduszPracy + +fgsp) * 100) / 100;
        let ekwiwalentNaFakturze = Math.round((lacznyKosztPracodawcy * 1.23) * 100) / 100;
        let skladkaEmerytalnaPrzedsiebiorcy = this.props.finalZusType === 111.25 ? Math.round((675 * 0.1952) * 100) / 100 : Math.round((2859 * 0.1952) * 100) / 100;
        let skladkaRentowaPrzesiebiorcy = this.props.finalZusType === 111.25 ? Math.round((675 * 0.08) * 100) / 100 : Math.round((2859 * 0.08) * 100) / 100;
        let skladkaChorobowaPrzedsiebiorcy = this.props.finalZusType === 111.25 ? Math.round((675 * 0.0245) * 100) / 100 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaWypadkowaPrzedsiebiorcy =this.props.finalZusType === 111.25 ? Math.round((675 * 0.0167) * 100) / 100 : Math.round((2859 * 0.0167) * 100) / 100;
        let funduszPracyPrzedsiebiorcy = this.props.finalZusType === 111.25 ? 0 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaZdrowotnaPrzedsiebiorcy =Math.round((3803.56 * 0.09) * 100) /100;
        let skladkaZdrowotnaPrzesiebiorcy2 = Math.round((3803.56 * 0.0775) * 100) /100;
        let razemDoZusPrzedsiebiorcy = Math.round((skladkaZdrowotnaPrzedsiebiorcy + skladkaEmerytalnaPrzedsiebiorcy + skladkaRentowaPrzesiebiorcy +
            skladkaChorobowaPrzedsiebiorcy + skladkaWypadkowaPrzedsiebiorcy + funduszPracyPrzedsiebiorcy) * 100) / 100;
        let podstawaOpodatkowaniaPrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - ((this.props.finalCar * 0.2) + this.props.finalPhone + this.props.finalComputer
            + (this.props.finalFuel / 2))) * 100) / 100;
        let podatekPrzedsiebiorcy = Math.round((podstawaOpodatkowaniaPrzedsiebiorcy * (this.props.finalTaxPercentage / 100) - skladkaZdrowotnaPrzesiebiorcy2) * 100) / 100;
        let zarobekLaczniePrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - razemDoZusPrzedsiebiorcy - podatekPrzedsiebiorcy) * 100 ) / 100;
        let dzienNieobecnosciPrzedsiebiorcy = Math.round(((((this.props.finalZusType === 111.25 ? 675 : 2859) * 0.8629) * 0.8) / 30 + 7.12) * 100) / 100;

        // 141.6201100556279 141.27586231254458 140.16448302082495 141.8379359743557

        return (
            <div className={'yearly-income-table-holder'} style={this.props.elStyle}>

                <h3>Roczna tabela dochodow</h3>
                    <div className={'table-mini-holder'}>

                    <table className={'yearly-table'}>
                        <tbody>

                        <tr>
                            <th>Miesiac</th>
                            <th>Skladka Emerytalna</th>
                            <th>Skladka Rentowa</th>
                            <th>Skladka Chorobowa</th>
                            <th>Podstawa do Skladki Zdrowotnej</th>
                            <th>Skladka Zdrowotna</th>
                            <th>Skladka Zdrowotna do odliczenia</th>
                            <th>Koszty uzyskania przychodu</th>
                            <th>Podstawa do opodatkowania</th>
                            <th>Podatek dochodowy</th>
                            <th>Zaliczka na podatek dochodowy</th>
                            <th>Kwota Brutto</th>
                            <th>Kwota Netto</th>
                            <th>Kwota Brutto sum</th>
                            <th>Podstawa do opodatkowania sum</th>
                        </tr>

                        <TableRowBasic month={'Styczen'} brutSum={this.props.finalUopSalary} taxBaseSum={podstawaDoOpodatkowania}/>
                        <TableRowBasic month={'Luty'} brutSum={this.props.finalUopSalary* 2} taxBaseSum={podstawaDoOpodatkowania *2}/>
                        <TableRowBasic month={'Marzec'} brutSum={this.props.finalUopSalary *3} taxBaseSum={podstawaDoOpodatkowania *3}/>
                        <TableRowBasic month={'Kwiecien'} brutSum={this.props.finalUopSalary *4} taxBaseSum={podstawaDoOpodatkowania *4}/>
                        <TableRowBasic month={'Maj'} brutSum={this.props.finalUopSalary *5} taxBaseSum={podstawaDoOpodatkowania *5}/>
                        <TableRowBasic month={'Czerwiec'} brutSum={this.props.finalUopSalary *6} taxBaseSum={podstawaDoOpodatkowania *6}/>
                        <TableRowBasic month={'Lipiec'} brutSum={this.props.finalUopSalary *7} taxBaseSum={podstawaDoOpodatkowania *7}/>
                        <TableRowBasic month={'Sierpien'} brutSum={this.props.finalUopSalary *8} taxBaseSum={podstawaDoOpodatkowania *8}/>
                        <TableRowBasic month={'Wrzesien'} brutSum={this.props.finalUopSalary *9} taxBaseSum={podstawaDoOpodatkowania *9}/>
                        <TableRowBasic month={'Pazdziernik'} brutSum={this.props.finalUopSalary *10} taxBaseSum={podstawaDoOpodatkowania *10}/>
                        <TableRowBasic month={'Listopad'} brutSum={this.props.finalUopSalary *11} taxBaseSum={podstawaDoOpodatkowania * 11}/>
                        <TableRowBasic month={'Grudzien'} brutSum={this.props.finalUopSalary *12} taxBaseSum={podstawaDoOpodatkowania *12}/>

                        </tbody>
                    </table>

                    </div>
            </div>

        );
    }
}

export default connect(mapStateToProps)(YearlyIncomeTable);
