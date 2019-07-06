import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className={'start-holder'}>
          <form className={'start-form'}>

            <div className={'start-both-holder'}>

              <div className={'start-assumptions-holder'}>

                <h4>Umowa o Prace - zalozenia</h4>

                <div className={'start-uop-holder'}>
                  <label className={'start-uop-salary-lebel'}>
                    <p className={'fancy-background'}>Wpisz Kwote</p>
                    <select className={'start-uop-salary-label-select'}>
                      <option value={'brutto'}>brutto</option>
                      <option value={'netto'}>netto</option>
                    </select>

                    <input className={'start-uop-salary-label-input'} type={'number'}/>
                  </label>

                  <label>
                    Podaj czy miejsce zamieszkania jest w tym samym miejscu co zaklad pracy
                    <select>
                      <option value={'tak'}>tak</option>
                      <option value={'nie'}>nie</option>
                    </select>
                  </label>

                  <p>
                    Koszty uzyskania przychodu uzyskane z tytulu jednej umowy wynosza 111,25 albo 139,06 przy zamieszkaniu w miejscowosci poza zakladem pracy
                  </p>

                  <div className={'start-full-description'}>
                    <p>Pelne objasnienie zalozen i obliczen znajdziesz na <a href={'https://dookolapracy.pl/kalkulator'}>https://dookolapracy.pl/kalkulator</a> </p>
                  </div>

                </div>
              </div>

              <div className={'start-b2b-holder'}>
                <h4>1-osobowa dzialalnosc gospodarcza</h4>

                <div className={'b2b-holder'}>

                  <label>
                    Ekwiwalent na fakturze "na reke"<br/> (bez vat 23%)
                    <input type={'number'}/>
                  </label>
                  <label>
                    Wybierz % podatku (%)
                    <select>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={32}>32</option>
                    </select>
                  </label>
                  <label>
                    Podstawa wymiaru skladek
                    <select>
                      <option value={'malyZus'}>Maly Zus</option>
                      <option value={'duzyZus'}>Duzy Zus</option>
                    </select>
                  </label>

                  <div className={'b2b-holder-income-cost-holder'}>
                    <h4>Koszty uzyskania przychodu - opcjonalnie</h4>

                    <label>
                      Komputer
                      <input type={'number'}/>
                    </label>
                    <label>
                      Telefon
                      <input type={'number'}/>
                    </label>
                    <label>
                      Samochod
                      <input type={'number'}/>
                    </label>
                    <label>
                      Paliwo
                      <input type={'number'}/>
                    </label>
                  </div>

                </div>
              </div>

            </div>


            <div className={'start-final-display'}>
              <button>Oblicz</button>
              <p>Tyle uzyskasz wiecej na reke w przypadku b2b</p>
              <label>
                Na miesiac
                <input type={'number'}/>
              </label>
              <label>
                W ciagu roku
                <input type={'number'}/>
              </label>

              <div className={'start-final-off-button-holder'}>
                <p>Wylacz kalkulator i przejdz do arkusza z obliczeniami</p>
                <button>Przejdz</button>
              </div>
            </div>

          </form>
        </div>
    );
  }
}

export default App;
