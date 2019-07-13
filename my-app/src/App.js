import React from 'react';
import './App.css';
import MainCalc from "./Components/MainCalc";
import YearlyIncomeTable from "./Components/YearlyIncomeTable";

class App extends React.Component {
  render() {
    return (

        <div>
          <MainCalc/>
          <YearlyIncomeTable/>

        </div>
    );
  }
}

export default App;
