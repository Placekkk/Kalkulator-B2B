import React from "react";
import { connect } from 'react-redux';
import { mapStateToProps } from "./MainCalc";

class TableRowBasic extends React.Component{
    render() {


        let skladkaEmerytalnaPracownika = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracownika = Math.round((this.props.finalUopSalary * 0.0150 + 0.00001) * 100) / 100;
        let skladkaChorobowa = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let podstawaSkladkiZdrowotnej = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa) * 100) /100;
        let skladkaZdrowotna = Math.round((podstawaSkladkiZdrowotnej * 0.0900 + 0.00001) * 100) / 100;
        let skladkaZdrowotnaDoOdliczenia = Math.round((podstawaSkladkiZdrowotnej * 0.0775 + 0.00001) * 100) / 100;
        let podstawaDoOpodatkowania = podstawaSkladkiZdrowotnej - this.props.finalSamePlace;
        let podatekDochodowy = ((Math.round(podstawaDoOpodatkowania * (0.18)) - 46.33) * 100) /100;
        let zaliczkaNaPodatekDochodowy = Math.round((podatekDochodowy - skladkaZdrowotnaDoOdliczenia) * 100) / 100;
        let zarobekLacznieNettoPracownika = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa -
            skladkaZdrowotna - zaliczkaNaPodatekDochodowy) * 100) / 100;



        return (
            <tr>
                <th>{this.props.month}</th>
                <td>{skladkaEmerytalnaPracownika}zl</td>
                <td>{skladkaRentowaPracownika}zl</td>
                <td>{skladkaChorobowa}zl</td>
                <td>{podstawaSkladkiZdrowotnej}zl</td>
                <td>{skladkaZdrowotna}zl</td>
                <td>{skladkaZdrowotnaDoOdliczenia}zl</td>
                <td>{this.props.finalSamePlace}zl</td>
                <td>{podstawaDoOpodatkowania}zl</td>
                <td>{podatekDochodowy}zl</td>
                <td>{zaliczkaNaPodatekDochodowy}zl</td>
                <td>{this.props.finalUopSalary}zl</td>
                <td>{zarobekLacznieNettoPracownika}zl</td>
                <td>{this.props.brutSum}zl</td>
                <td>{this.props.taxBaseSum}zl</td>
            </tr>
        );
    }
}

export default connect(mapStateToProps)(TableRowBasic)