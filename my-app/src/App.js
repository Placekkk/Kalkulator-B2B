import React from 'react';
import './App.css';
import MainCalc from "./Components/MainCalc";
import AdvancedValuesHolder from './Components/AdvancedValuesHolder'
import store from "./store";
import { Provider } from "react-redux";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRender: true,
            advancedCalcStyle: {
                display: 'none'
            },
            foldText: 'Rozwiń'
        }
    }

    tryRefresh = () => {
        this.setState({shouldRender: false}, () => this.setState({shouldRender: true}))
    };

    handleShowHide = () => {
        if (this.state.foldText === 'Zwiń') {
            this.setState({
                advancedCalcStyle: {
                    display: 'none'
                },
                foldText: 'Rozwiń'
            })
        } else {
            this.setState({
                advancedCalcStyle: {
                    display: 'block'
                },
                foldText: 'Zwiń'
            })
        }

    };

    render() {
        return (
        <div>
        <Provider store={store}>
            {this.state.shouldRender? <MainCalc testFunction={this.tryRefresh} showHideButton={this.handleShowHide}/> : null}
            <h2 className={'hide-advanced-calc'} onClick={this.handleShowHide}>{this.state.foldText} {this.state.foldText === 'Rozwiń' ? "▼" : "▲"}</h2>
          <AdvancedValuesHolder handleUpdate={this.handleUpdate} advancedCalcShowHideStyle={this.state.advancedCalcStyle}/>
        </Provider>

        </div>

    );
  }
}


export default App;
