import React from 'react';
import YearlyIncomeTable from "../Components/YearlyIncomeTable";
import TableAdvanced from '../Components/TableAdvanced'
import Gibs from '../Components/Gibs'
import CalculatorAdvanced from '../Components/CalculatorAdvanced'
import { Provider } from "react-redux";
import store from "../store";


class AdvancedValuesHolder extends React.Component {

    handleOne = () => {
        let allButtons = document.querySelectorAll('.advanced-button-holder>button');
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].style.height = '70%';
            allButtons[i].style.backgroundColor = 'grey'
        }
        allButtons[0].style.height = '100%';
        allButtons[0].style.backgroundColor = 'transparent';
        allButtons[0].style.color = 'white';

        let allAdvancedElements = document.querySelectorAll('.calculator-advanced, .yearly-income-table-holder, .gibs, .table-advanced-holder');
        for (let i = 0; i < allAdvancedElements.length; i++) {
            allAdvancedElements[i].style.display = 'none'
        }
        allAdvancedElements[0].style.display = 'flex'
    };
    handleTwo = () => {
        let allButtons = document.querySelectorAll('.advanced-button-holder>button');
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].style.height = '70%';
            allButtons[i].style.backgroundColor = 'grey'
        }
        allButtons[1].style.height = '100%';
        allButtons[1].style.backgroundColor = 'transparent';
        allButtons[1].style.color = 'white';

        let allAdvancedElements = document.querySelectorAll('.calculator-advanced, .yearly-income-table-holder, .gibs, .table-advanced-holder');
        for (let i = 0; i < allAdvancedElements.length; i++) {
            allAdvancedElements[i].style.display = 'none'
        }
        allAdvancedElements[1].style.display = 'block'
    };
    handleThree = () => {
        let allButtons = document.querySelectorAll('.advanced-button-holder>button');
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].style.height = '70%';
            allButtons[i].style.backgroundColor = 'grey'
        }
        allButtons[2].style.height = '100%';
        allButtons[2].style.backgroundColor = 'transparent';
        allButtons[2].style.color = 'white';

        let allAdvancedElements = document.querySelectorAll('.calculator-advanced, .yearly-income-table-holder, .gibs, .table-advanced-holder');
        for (let i = 0; i < allAdvancedElements.length; i++) {
            allAdvancedElements[i].style.display = 'none'
        }
        allAdvancedElements[2].style.display = 'block'
    };
    handleFour = () => {
        let allButtons = document.querySelectorAll('.advanced-button-holder>button');
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].style.height = '70%';
            allButtons[i].style.backgroundColor = 'grey'
        }
        allButtons[3].style.height = '100%';
        allButtons[3].style.backgroundColor = 'transparent';
        allButtons[3].style.color = 'white';

        let allAdvancedElements = document.querySelectorAll('.calculator-advanced, .yearly-income-table-holder, .gibs, .table-advanced-holder');
        for (let i = 0; i < allAdvancedElements.length; i++) {
            allAdvancedElements[i].style.display = 'none'
        }
        allAdvancedElements[3].style.display = 'block'
    };

    render() {
        return (
            <div className={'helper-holder'}>
                <div className={'advanced-values-holder'}>

                    <nav className={'advanced-button-holder'}>

                        <button onClick={this.handleOne}>Kalkulator - zaawansowany</button>
                        <button onClick={this.handleTwo}>Roczna tabela dochodow</button>
                        <button onClick={this.handleThree}>Zasilek chorobowy - szczegoly</button>
                        <button onClick={this.handleFour}>Skladka wypadkowa - tabela</button>

                    </nav>

                    <Provider store={store}>
                    <div className={'result-holder'}>
                        <CalculatorAdvanced/>
                        <YearlyIncomeTable/>
                        <Gibs/>
                        <TableAdvanced/>
                    </div>
                    </Provider>
                </div>
            </div>
        );
    }
}



export default AdvancedValuesHolder;