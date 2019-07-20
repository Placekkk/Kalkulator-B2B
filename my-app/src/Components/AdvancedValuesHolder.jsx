import React from 'react';
import YearlyIncomeTable from "../Components/YearlyIncomeTable";
import TableAdvanced from '../Components/TableAdvanced'
import Gibs from '../Components/Gibs'


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
    };

    render() {
        return (
            <div className={'helper-holder'}>
                <div className={'advanced-values-holder'}>

                    <nav className={'advanced-button-holder'}>

                        <button onClick={this.handleOne}>jedenn</button>
                        <button onClick={this.handleTwo}>dwaaaa</button>
                        <button onClick={this.handleThree}>trzyyy</button>
                        <button onClick={this.handleFour}>cztery</button>

                    </nav>

                    <div className={'result-holder'}>
                        <TableAdvanced/>
                    </div>

                </div>
            </div>
        );
    }
}



export default AdvancedValuesHolder;