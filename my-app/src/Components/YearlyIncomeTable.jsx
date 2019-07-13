import React from 'react';

class TableRowBasic extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.month}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
                <td>{this.props.result / 2}</td>
            </tr>
        );
    }
}

class YearlyIncomeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            result: 300,
        }
    }

    render() {
        return (


            <div className={'advanced-holder'}>
                <table>

                    <thead>
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
                    </thead>

                    <tbody>
                        <TableRowBasic month={'Styczen'} result={342}/>
                        <TableRowBasic month={'Luty'} result={342}/>
                        <TableRowBasic month={'Marzec'} result={342}/>
                        <TableRowBasic month={'Kwiecien'} result={342}/>
                        <TableRowBasic month={'Maj'} result={342}/>
                        <TableRowBasic month={'Czerwiec'} result={342}/>
                        <TableRowBasic month={'Lipiec'} result={342}/>
                        <TableRowBasic month={'Sierpien'} result={342}/>
                        <TableRowBasic month={'Wrzesien'} result={342}/>
                        <TableRowBasic month={'Pazdziernik'} result={342}/>
                        <TableRowBasic month={'Listopad'} result={342}/>
                        <TableRowBasic month={'Grudzien'} result={342}/>
                    </tbody>
                </table>
            </div>




        );
    }
}

export default YearlyIncomeTable;
