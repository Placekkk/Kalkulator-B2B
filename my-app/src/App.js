import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className={'first-main-holder'}>

          <form>

            <div className={'uop-holder'}>

              <div className={'amount-holder'}>
                <p>Wpisz kwote</p>
                <label>
                  <input className={'fancy-input'}/>
                </label>

                <select className={'fancy-select'}>
                  <option>Brutto</option>
                  <option>Netto</option>
                </select>
              </div>

              <div className={'birth-place-holder'}>
                <p>Czy miejsce zamieszkania jest w tym samym miejscu co miejsce pracy</p>

                  <select className={'fancy-select'}>
                    <option>Tak</option>
                    <option>Nie</option>
                  </select>

              </div>

              </div>

          </form>
        </div>
    );
  }
}

export default App;
