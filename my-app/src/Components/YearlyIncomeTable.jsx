import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from "./MainCalc";
import TableRowBasic from "./TableRowBasic";



class YearlyIncomeTable extends React.Component {
    render() {
        let skladkaEmerytalnaPracownika = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracownika = Math.round((this.props.finalUopSalary * 0.0150 + 0.00001) * 100) / 100;
        let skladkaChorobowa = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let podstawaSkladkiZdrowotnej = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa) * 100) /100;
        let podstawaDoOpodatkowania = podstawaSkladkiZdrowotnej - this.props.finalSamePlace;
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
