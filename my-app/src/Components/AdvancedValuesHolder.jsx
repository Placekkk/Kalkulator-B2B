import React from 'react';
import YearlyIncomeTable from "../Components/YearlyIncomeTable";
import TableAdvanced from '../Components/TableAdvanced'
import Gibs from '../Components/Gibs'
import CalculatorAdvanced from '../Components/CalculatorAdvanced'
import { Provider } from "react-redux";
import store from "../store";


class AdvancedValuesHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculatorAdvancedStyle: {
                height: '100%',
                backgroundColor: 'transparent'
            },
            yearlyTableStyle: {
                height: '70%',
                backgroundColor: 'grey'
            },
            gibsStyle: {
                height: '70%',
                backgroundColor: 'grey'
            },
            tableAdvancedStyle: {
                height: '70%',
                backgroundColor: 'grey'
            },
            holderCalculatorAdvancedStyle: {
                display: 'flex',
            },
            holderYearlyTableStyle: {
                display: 'none',
            },
            holderGibsStyle: {
                display: 'none',
            },
            holderTableAdvancedStyle: {
                display: 'none',
            }

        }
    }

    componentStyleReset = () => {
        this.setState({
            holderCalculatorAdvancedStyle: {
                display: 'none',
            },
            holderYearlyTableStyle: {
                display: 'none',
            },
            holderGibsStyle: {
                display: 'none',
            },
            holderTableAdvancedStyle: {
                display: 'none',
            }
        })
    };

    buttonStyleReset = () => {
        this.setState({
            calculatorAdvancedStyle: {
                height: '70%',
                backgroundColor: 'grey'
            },
            yearlyTableStyle: {
                height: '70%',
                backgroundColor: 'grey'
            },
            gibsStyle: {
                height: '70%',
                backgroundColor: 'grey'
            },
            tableAdvancedStyle: {
                height: '70%',
                backgroundColor: 'grey'
            }
        })
    };

    handleOne = () => {
        this.buttonStyleReset();
        this.componentStyleReset();
        this.setState({
            calculatorAdvancedStyle: {
                height: '100%',
                backgroundColor: 'transparent'
            },
            holderCalculatorAdvancedStyle: {
                display: 'flex',
            },
        })

    };
    handleTwo = () => {
        this.buttonStyleReset();
        this.componentStyleReset();
        this.setState({
            yearlyTableStyle: {
                height: '100%',
                backgroundColor: 'transparent'
            },
            holderYearlyTableStyle: {
                display: 'flex',
            },
        })

    };
    handleThree = () => {
        this.buttonStyleReset();
        this.componentStyleReset();
        this.setState({
            gibsStyle: {
                height: '100%',
                backgroundColor: 'transparent'
            },
            holderGibsStyle: {
                display: 'block',
            },
        })
    };
    handleFour = () => {
        this.buttonStyleReset();
        this.componentStyleReset();
        this.setState({
            tableAdvancedStyle: {
                height: '100%',
                backgroundColor: 'transparent'
            },
            holderTableAdvancedStyle: {
                display: 'flex',
            }
        })
    };

    render() {
        return (
            <div className={'helper-holder'} style={this.props.advancedCalcShowHideStyle}>
                <div className={'advanced-values-holder'}>

                    <nav className={'advanced-button-holder'}>

                        <button onClick={this.handleOne} style={this.state.calculatorAdvancedStyle}>Kalkulator - zaawansowany</button>
                        <button onClick={this.handleTwo} style={this.state.yearlyTableStyle}>Roczna tabela dochodow</button>
                        <button onClick={this.handleThree} style={this.state.gibsStyle}>Zasilek chorobowy - szczegoly</button>
                        <button onClick={this.handleFour} style={this.state.tableAdvancedStyle}>Skladka wypadkowa - tabela</button>

                    </nav>

                    <Provider store={store}>
                    <div className={'result-holder'}>
                        <CalculatorAdvanced elStyle={this.state.holderCalculatorAdvancedStyle}/>
                        <YearlyIncomeTable elStyle={this.state.holderYearlyTableStyle}/>
                        <Gibs elStyle={this.state.holderGibsStyle}/>
                        <TableAdvanced elStyle={this.state.holderTableAdvancedStyle}/>
                    </div>
                    </Provider>
                </div>
            </div>
        );
    }
}



export default AdvancedValuesHolder;
