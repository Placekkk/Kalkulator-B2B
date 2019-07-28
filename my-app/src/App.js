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

            <div className={'test2'}>
                <p>first result is <span className={'money-display'}>000</span></p>
                <p>second result is <span className={'money-display'}>000</span></p>
            </div>

            </div>

        </div>

    );
  }
}


export default App;
