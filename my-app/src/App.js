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

            <div className={'test3'}>

            <div className={'test'}>
                <form>
                    <label>
                        first result
                        <input/>
                    </label>
                    <label>
                        second result
                        <input/>
                    </label>
                    <button>calculate</button>
                </form>
            </div>


        </div>

    );
  }
}


export default App;
