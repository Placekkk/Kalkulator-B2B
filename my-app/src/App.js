import React from 'react';
import './App.css';
import MainCalc from "./Components/MainCalc";
import AdvancedValuesHolder from './Components/AdvancedValuesHolder'
import store from "./store";
import { Provider } from "react-redux";


class App extends React.Component {

    handleUpdate = () => {
        this.render()
    };

    render() {
        return (
        <div>
        <Provider store={store}>
          <MainCalc/>
          <AdvancedValuesHolder handleUpdate={this.handleUpdate}/>
        </Provider>

        </div>

    );
  }
}


export default App;
