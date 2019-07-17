import React from 'react';
import './App.css';
import MainCalc from "./Components/MainCalc";
import YearlyIncomeTable from "./Components/YearlyIncomeTable";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (

        <Provider store={store}>
          <MainCalc/>
          <YearlyIncomeTable/>

        </Provider>
    );
  }
}

export default App;
