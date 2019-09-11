import React from 'react';
import { connect } from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "./MainCalc";



class YearlyIncomeTable extends React.Component {

    render() {
        let skladkaChorobowa = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let monthzNames = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
        let months = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

        for (let i = 0; i < 12; i++) {     // baza miesiecy
            months[i].name = monthzNames[i];
            months[i].salaryBrut = this.props.finalUopSalary;
            months[i].skladkaChorobowa = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
            months[i].salarySum = this.props.finalUopSalary * (i +1);
            months[i].skladkaEmerytalna = 0;
            months[i].skladkaRentowa = 0;
            months[i].podstawaDoSkladkiZdrowotnej = 0;
            months[i].skladkaZdrowotna = 0;
            months[i].skladkaZdrowotnaDoOdliczenia = 0;
            months[i].podstawaDoOpodatkowania = 0;
            months[i].podatekDochodowy = 0;
            months[i].zaliczkaNaPodatekDochodowy = 0;
            months[i].kwotaNetto = 0;
            months[i].podstawaDoOpodatkowaniaSuma = 0;
            months[i].key = 77 * i;
        }

        for (let i = 0; i < months.length; i++) {   // ustawienie zaawansowanych wartosci miesiecy

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


        let fixedTable = months.map( months => {
            return (
                <tr key={months.name+1}>
                    <th className={'yearly-income-table-sticky-column'} key={months.name}>{months.name}</th>
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
                            <th className={'yearly-income-table-sticky-column'}>Miesiac</th>
                            <th>Składka Emerytalna</th>
                            <th>Składka Rentowa</th>
                            <th>Składka Chorobowa</th>
                            <th>Podstawa do Składki Zdrowotnej</th>
                            <th>Składka Zdrowotna</th>
                            <th>Składka Zdrowotna do odliczenia</th>
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

                        </tbody>
                    </table>

                    </div>
            </div>

        );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(YearlyIncomeTable);
