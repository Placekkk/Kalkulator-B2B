import React from 'react';


class RowAdvanced extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.text}</td>
                <td>{this.props.code}</td>
                <td>{this.props.category}</td>
                <td>{this.props.percent}</td>
                <td>{this.props.result}</td>
            </tr>
        );
    }
}

class TableAdvanced extends React.Component {
    render() {
        return (
            <div className={'table-advanced-holder'}>

                <h3>Skladka wypadkowa - tabela</h3>

                <table className={'table-advanced'}>

                    <tbody>

                    <tr>
                        <th>Grupy dzialalnosci</th>
                        <th>KOD PKD</th>
                        <th>Kategorie Ryzyka</th>
                        <th>Stopy procentowe skladki</th>
                        <th>Wynik</th>
                    </tr>

                    <RowAdvanced text={'Działalność finansowa i ubezpieczeniowa'} code={'K'} category={2} percent={0.67} result={0.0067}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>
                    <RowAdvanced text={'test1'} code={'C11'} category={3} percent={0.67} result={0.333}/>


                    </tbody>

                </table>
            </div>
        );
    }
}

export default TableAdvanced;