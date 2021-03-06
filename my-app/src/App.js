import React from 'react';
import './App.css';
import MainCalc from "./Components/MainCalc";
import AdvancedValuesHolder from './Components/AdvancedValuesHolder'
import store from "./store";
import { Provider } from "react-redux";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.testRef = React.createRef();
        this.state = {
            shouldRender: true,
            advancedCalcStyle: {
                display: 'none'
            },
            foldText: 'Pokaż szczegółowe wyliczenia',
            showButtonStyle: {
                display: 'none',
            },
        }
    }

    tryRefresh = () => {
        this.setState({shouldRender: false}, () => this.setState({shouldRender: true}))
    };

    handleShowHide = () => {
        if (this.state.foldText === 'Schowaj szczegółowe wyliczenia') {
            this.setState({
                advancedCalcStyle: {
                    display: 'none'
                },
                foldText: 'Pokaż szczegółowe wyliczenia'
            })
        } else {
            this.setState({
                advancedCalcStyle: {
                    display: 'block'
                },
                foldText: 'Schowaj szczegółowe wyliczenia'
            })
        }
    };

    handleShowButtonDisplay = () => {
        this.setState({
            showButtonStyle: {
                display: 'block',
                marginBottom: '50px'
            }
        }, this.scrollToMyRef)
    };

    scrollToMyRef = () => {
        this.testRef.current.scrollIntoView({
            alignToTop: true,
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    };

    render() {

        return (
        <div>
            <Provider store={store}>
            {this.state.shouldRender? <MainCalc testFunction={this.tryRefresh} scrollToDetails={this.scrollToMyRef} showButtonDisplay={this.handleShowButtonDisplay}/> : null}
            <h2 ref={this.testRef} style={this.state.showButtonStyle} className={'show-advanced-calc-trigger'} onClick={this.handleShowHide}>{this.state.foldText} {this.state.foldText === 'Pokaż szczegółowe wyliczenia' ? "▼" : "▲"}</h2>
          <AdvancedValuesHolder handleUpdate={this.handleUpdate} advancedCalcShowHideStyle={this.state.advancedCalcStyle}/>
        </Provider>
        </div>
    );
  }
}
export default App;
