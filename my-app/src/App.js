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
            shouldRender: true
        }
    }

    tryRefresh = () => {
        this.setState({shouldRender: false}, () => this.setState({shouldRender: true}))
    };

    render() {
        return (
        <div>
        <Provider store={store}>

            {this.state.shouldRender? <MainCalc testFunction={this.tryRefresh}/> : null}
          <AdvancedValuesHolder handleUpdate={this.handleUpdate}/>
        </Provider>

            <div className="rainbow">
                Rainbow border
            </div>

        </div>

    );
  }
}


export default App;
