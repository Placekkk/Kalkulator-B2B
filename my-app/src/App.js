import React from 'react';
import './App.css';
import MainCalc from "./Components/MainCalc";
import AdvancedValuesHolder from './Components/AdvancedValuesHolder'
import store from "./store";
import { Provider } from "react-redux";


class App extends React.Component {
  render() {
    return (

        <div>
        <Provider store={store}>
          <MainCalc/>
          <AdvancedValuesHolder/>
        </Provider>


        </div>

    );
  }
}


export default App;
