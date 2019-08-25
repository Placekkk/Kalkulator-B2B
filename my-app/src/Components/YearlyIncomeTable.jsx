import React from 'react';
import { connect } from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "./MainCalc";



class YearlyIncomeTable extends React.Component {


    render() {
        let skladkaEmerytalnaPracownika = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracownika = Math.round((this.props.finalUopSalary * 0.0150 + 0.00001) * 100) / 100;
        let skladkaChorobowa = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let podstawaSkladkiZdrowotnej = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa) * 100) /100;
        let podstawaDoOpodatkowania = podstawaSkladkiZdrowotnej - this.props.finalSamePlace;

        let months = [{
            name: 'styczen',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 1231
        },{
            name: 'luty',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *2,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 1232
        },{
            name: 'marzec',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *3,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 1233
        },{
            name: 'kwiecien',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *4,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 1234
        },{
            name: 'maj',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *5,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 1235
        },{
            name: 'czerwiec',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *6,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 12311
        },{
            name: 'lipiec',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *7,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 12322
        },{
            name: 'sierpien',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *8,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 12333
        },{
            name: 'wrzesien',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *9,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 12344
        },{
            name: 'pazdziernik',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *10,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 12355
        },{
            name: 'listopad',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *11,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 12366
        },{
            name: 'grudzien',
            salaryBrut: this.props.finalUopSalary,
            skladkaChorobowa: Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100,
            salarySum: this.props.finalUopSalary *12,
            skladkaEmerytalna: 0,
            skladkaRentowa: 0,
            podstawaDoSkladkiZdrowotnej: 0,
            skladkaZdrowotna: 0,
            skladkaZdrowotnaDoOdliczenia: 0,
            podstawaDoOpodatkowania: 0,
            podatekDochodowy: 0,
            zaliczkaNaPodatekDochodowy: 0,
            kwotaNetto: 0,
            podstawaDoOpodatkowaniaSuma: 0,
            key: 12377
        }];



        for (let i = 0; i < months.length; i++) {

            var sumaPensjiNetto = 0;
            var taxMonthNumber = '';

            if (parseInt(months[i].salarySum) > 142950) {
                let sumaSkladkiRentowej = 0;
                let sumaSkladkiEmerytalnej = 0;
                for (let i = 0; i < months.length; i++) {    // skladka emerytalna i rentowa maksymalna wartosc
                    sumaSkladkiEmerytalnej += months[i].skladkaEmerytalna;
                    sumaSkladkiRentowej += months[i].skladkaRentowa;
                }
                months[i].skladkaEmerytalna = Math.round((13951.92 - sumaSkladkiEmerytalnej) * 100) / 100;
                months[i].skladkaRentowa = Math.round((2144.25 - sumaSkladkiRentowej) * 100) / 100;

            } else {
                months[i].skladkaEmerytalna = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
                months[i].skladkaRentowa = Math.round((this.props.finalUopSalary * 0.0150 + 0.00001) * 100) / 100;
            }

            months[i].podstawaDoSkladkiZdrowotnej = Math.round((this.props.finalUopSalary - months[i].skladkaRentowa - months[i].skladkaEmerytalna - skladkaChorobowa) *100) /100; // skladka zdrowotna ustalenie po petli
            months[i].skladkaZdrowotna = Math.round((months[i].podstawaDoSkladkiZdrowotnej * 0.09) *100) /100;
            months[i].skladkaZdrowotnaDoOdliczenia = Math.round((months[i].podstawaDoSkladkiZdrowotnej * 0.0775) *100) /100;
            months[i].podstawaDoOpodatkowania = Math.round(months[i].podstawaDoSkladkiZdrowotnej - this.props.finalSamePlace);

            for (let i = 0; i < months.length; i++) {   // suma podstaw opodatkowania
                let sumaPodstawOpodatkowania = 0;
                for (let i = 0; i < months.length; i++) {
                    sumaPodstawOpodatkowania += months[i].podstawaDoOpodatkowania;
                    months[i].podstawaDoOpodatkowaniaSuma = sumaPodstawOpodatkowania;
                }
            }

            for (let i = 1; i < months.length; i++) {       // podatek dochodowy
                if (months[i-1].podstawaDoOpodatkowaniaSuma > 85528) {
                    months[i].podatekDochodowy = Math.round(((months[i].podstawaDoOpodatkowania) * 0.32) *100) /100;
                    taxMonthNumber = months[i].name;

                } else {months[i].podatekDochodowy = Math.round(((months[i].podstawaDoOpodatkowania) * 0.18 - 46.33) *100) /100}
            }
            months[0].podatekDochodowy = Math.round(((months[0].podstawaDoOpodatkowania) * 0.18 -46.33) *100) /100;


            for (let i = 0; i < months.length; i++) {          // zaliczka na podatek
                months[i].zaliczkaNaPodatekDochodowy = Math.round(months[i].podatekDochodowy - months[i].skladkaZdrowotnaDoOdliczenia)
            }

            for (let i = 0; i < months.length; i++) {         // kwota netto
                months[i].kwotaNetto = Math.round((this.props.finalUopSalary - months[i].skladkaEmerytalna - months[i].skladkaRentowa - months[i].skladkaChorobowa - months[i].skladkaZdrowotna - months[i].zaliczkaNaPodatekDochodowy) *100) /100;
            }

            for (let i = 0; i < months.length; i++) {          // suma pensji netto
                sumaPensjiNetto += months[i].kwotaNetto;
            }
            for (let i = 0; i < months.length -1; i++) {
                if (months[i].podstawaDoOpodatkowaniaSuma > 85528) {
                    taxMonthNumber = months[i+1].name;
                    break
                }
            }
        }

        this.props.handleTaxThreshold(taxMonthNumber);
        this.props.handleAverageNetSalary(sumaPensjiNetto);
        // console.log(this.props.averageNetSalary);
        // console.log(sumaPensjiNetto);
        // console.log(taxMonthNumber);
        // console.log(this.props.taxThreshold);

        let fixedTable = months.map( months => {
            return (
                <tr key={months.name+1}>
                    <th key={months.name}>{months.name}</th>
                    <td>{months.skladkaEmerytalna}zl</td>
                    <td>{months.skladkaRentowa}zl</td>
                    <td>{months.skladkaChorobowa}zl</td>
                    <td>{months.podstawaDoSkladkiZdrowotnej}zl</td>
                    <td>{months.skladkaZdrowotna}zl</td>
                    <td>{months.skladkaZdrowotnaDoOdliczenia}zl</td>
                    <td>{this.props.finalSamePlace}zl</td>
                    <td>{months.podstawaDoOpodatkowania}zl</td>
                    <td>{months.podatekDochodowy}zl</td>
                    <td>{months.zaliczkaNaPodatekDochodowy}zl</td>
                    <td>{months.salaryBrut}zl</td>
                    <td>{months.kwotaNetto}zl</td>
                    <td>{months.salarySum}zl</td>
                    <td>{months.podstawaDoOpodatkowaniaSuma}zl</td>
                </tr>
            )
        });

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
                            <th>Kwota Brutto suma</th>
                            <th>Podstawa do opodatkowania suma</th>
                        </tr>



                        {fixedTable}



                        {/*<TableRowBasic month={'Styczen'} brutSum={this.props.finalUopSalary} taxBaseSum={podstawaDoOpodatkowania}/>*/}
                        {/*<TableRowBasic month={'Luty'} brutSum={this.props.finalUopSalary* 2} taxBaseSum={podstawaDoOpodatkowania *2}/>*/}
                        {/*<TableRowBasic month={'Marzec'} brutSum={this.props.finalUopSalary *3} taxBaseSum={podstawaDoOpodatkowania *3}/>*/}
                        {/*<TableRowBasic month={'Kwiecien'} brutSum={this.props.finalUopSalary *4} taxBaseSum={podstawaDoOpodatkowania *4}/>*/}
                        {/*<TableRowBasic month={'Maj'} brutSum={this.props.finalUopSalary *5} taxBaseSum={podstawaDoOpodatkowania *5}/>*/}
                        {/*<TableRowBasic month={'Czerwiec'} brutSum={this.props.finalUopSalary *6} taxBaseSum={podstawaDoOpodatkowania *6}/>*/}
                        {/*<TableRowBasic month={'Lipiec'} brutSum={this.props.finalUopSalary *7} taxBaseSum={podstawaDoOpodatkowania *7}/>*/}
                        {/*<TableRowBasic month={'Sierpien'} brutSum={this.props.finalUopSalary *8} taxBaseSum={podstawaDoOpodatkowania *8}/>*/}
                        {/*<TableRowBasic month={'Wrzesien'} brutSum={this.props.finalUopSalary *9} taxBaseSum={podstawaDoOpodatkowania *9}/>*/}
                        {/*<TableRowBasic month={'Pazdziernik'} brutSum={this.props.finalUopSalary *10} taxBaseSum={podstawaDoOpodatkowania *10}/>*/}
                        {/*<TableRowBasic month={'Listopad'} brutSum={this.props.finalUopSalary *11} taxBaseSum={podstawaDoOpodatkowania * 11}/>*/}
                        {/*<TableRowBasic month={'Grudzien'} brutSum={this.props.finalUopSalary *12} taxBaseSum={podstawaDoOpodatkowania * 12}/>*/}
                        </tbody>
                    </table>

                    </div>
            </div>

        );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(YearlyIncomeTable);
