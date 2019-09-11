import React from 'react';


class RowAdvanced extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.text}</td>
                <td>{this.props.code}</td>
                <td>{this.props.category}</td>
                <td>{this.props.percent}</td>
                <td>{this.props.sum}</td>
            </tr>
        );
    }
}

class TableAdvanced extends React.Component {
    render() {
        return (
            <div className={'table-advanced-holder'} style={this.props.elStyle}>

                <h3>Skladka wypadkowa - tabela</h3>

                <table className={'table-advanced'}>
                    <tbody>
                    <tr className={'table-topper'}>
                        <th className={'sticky-row'}>Grupy dzialalności</th>
                        <th className={'sticky-row'}>KOD PKD</th>
                        <th className={'sticky-row'}>Kategorie Ryzyka</th>
                        <th className={'sticky-row'}>Stopy procentowe składki</th>
                        <th className={'sticky-row'}>Wynik</th>
                    </tr>

                    <RowAdvanced text={'Działalność finansowa i ubezpieczeniowa'} code={'K'} category={2} percent={0.67} sum={0.0067}/>
                    <RowAdvanced text={'Działalność związana z obsługą rynku nieruchomości'} code={'L'} category={2} percent={0.67} sum={0.0067}/>
                    <RowAdvanced text={'Działalność profesjonalna, naukowa i techniczna'} code={'M'} category={2} percent={0.67} sum={0.0067}/>
                    <RowAdvanced text={'Działalność organizatorów turystyki, pośredników i agentów turystycznych oraz pozostała działalność usługowa w zakresie rezerwacji i działalności z nią związane'} code={'N-79'} category={2} percent={0.67} sum={0.0067}/>
                    <RowAdvanced text={'Działalność związana z administracyjną obsługą biura i pozostała działalność wspomagająca prowadzenie działalności gospodarczej'} code={'N-82'} category={2} percent={0.67} sum={0.0067}/>

                    <RowAdvanced text={'Pozostała działalność usługowa, gospodarstwa domowe zatrudniające pracowników; gospodarstwa domowe produkujące wyroby i świadczące usługi na własne potrzeby'} code={'S,T'} category={2} percent={0.67} sum={0.0067}/>
                    <RowAdvanced text={'Produkcja odzieży'} code={'C-14'} category={3} percent={0.93} sum={0.0093}/>
                    <RowAdvanced text={'Produkcja skór i wyrobów ze skór wyprawionych'} code={'C-15'} category={3} percent={0.93} sum={0.0093}/>
                    <RowAdvanced text={'Poligrafia i reprodukcja zapisanych nośników informacji'} code={'C-18'} category={3} percent={0.93} sum={0.0093}/>
                    <RowAdvanced text={'Produkcja komputerów, wyrobów elektronicznych i optycznych'} code={'C-26'} category={3} percent={0.93} sum={0.0093}/>

                    <RowAdvanced text={'Handel hurtowy i detaliczny pojazdami samochodowymi; naprawa pojazdów samochodowych'} code={'G-45'} category={3} percent={0.93} sum={0.0093}/>
                    <RowAdvanced text={'Handel hurtowy, z wyłączeniem handlu pojazdami samochodowymi'} code={'G-46'} category={3} percent={0.93} sum={0.0093}/>
                    <RowAdvanced text={'Handel detaliczny, z wyłączeniem handlu detalicznego pojazdami samochodowymi'} code={'G-47'} category={3} percent={0.93} sum={0.0093}/>
                    <RowAdvanced text={'Działalność detektywistyczna i ochroniarska'} code={'N-80'} category={3} percent={0.93} sum={0.0093}/>
                    <RowAdvanced text={'Administracja publiczna i obrona narodowa; obowiązkowe zabezpieczenia społeczne, organizacje i zespoły eksterytorialne'} code={'O,U'} category={3} percent={0.93} sum={0.0093}/>

                    <RowAdvanced text={'Edukacja'} code={'P'} category={3} percent={0.93} sum={0.0093}/>
                    <RowAdvanced text={'Działalność związana z kulturą, rozrywką i rekreacją'} code={'R'} category={3} percent={0.93} sum={0.0093}/>
                    <RowAdvanced text={'Rybactwo'} code={'A-03'} category={4} percent={1.2} sum={0.012}/>
                    <RowAdvanced text={'Produkcja napojów'} code={'C-11'} category={4} percent={1.2} sum={0.012}/>
                    <RowAdvanced text={'Produkcja wyrobów tytoniowych'} code={'C-12'} category={4} percent={1.2} sum={0.012}/>

                    <RowAdvanced text={'Produkcja podstawowych substancji farmaceutycznych oraz leków i pozostałych wyrobów farmaceutycznych'} code={'C-21'} category={4} percent={1.2} sum={0.012}/>
                    <RowAdvanced text={'Pozostała produkcja wyrobów'} code={'C-32'} category={4} percent={1.2} sum={0.012}/>
                    <RowAdvanced text={'Wytwarzanie i zaopatrywanie w energię elektryczną, gaz, parę wodną, gorącą wodę i powietrze do układów klimatyzacyjnych'} code={'D-35'} category={4} percent={1.2} sum={0.012}/>
                    <RowAdvanced text={'Roboty budowlane specjalistyczne'} code={'F-43'} category={4} percent={1.2} sum={0.012}/>
                    <RowAdvanced text={'Transport lądowy oraz transport rurociągowy'} code={'H-49'} category={4} percent={1.2} sum={0.012}/>

                    <RowAdvanced text={'Wynajem i dzierżawa'} code={'N-77'} category={4} percent={1.2} sum={0.012}/>
                    <RowAdvanced text={'Działalność związana z zatrudnieniem'} code={'N-78'} category={4} percent={1.2} sum={0.012}/>
                    <RowAdvanced text={'Działalność usługowa związana z utrzymaniem porządku w budynkach i zagospodarowaniem terenów zieleni'} code={'N-81'} category={4} percent={1.2} sum={0.012}/>
                    <RowAdvanced text={'Opieka zdrowotna i pomoc społeczna'} code={'Q'} category={4} percent={1.2} sum={0.012}/>

                    <RowAdvanced text={'Produkcja artykułów spożywczych'} code={'C-10'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Produkcja wyrobów tekstylnych'} code={'C-13'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Wytwarzanie i przetwarzanie koksu i produktów rafinacji ropy naftowej'} code={'C-19'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Produkcja chemikaliów i wyrobów chemicznych'} code={'C-20'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Produkcja wyrobów z gumy i tworzyw sztucznych'} code={'C-22'} category={5} percent={1.47} sum={0.0147}/>

                    <RowAdvanced text={'Produkcja urządzeń elektrycznych'} code={'C-27'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Produkcja maszyn i urządzeń, gdzie indziej niesklasyfikowana'} code={'C-28'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Produkcja pojazdów samochodowych, przyczep i naczep, z wyłączeniem motocykli'} code={'C-29'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Produkcja mebli'} code={'C-31'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Naprawa, konserwacja i instalowanie maszyn i urządzeń'} code={'C-33'} category={5} percent={1.47} sum={0.0147}/>

                    <RowAdvanced text={'Pobór, uzdatnianie i dostarczanie wody'} code={'E-36'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Odprowadzanie i oczyszczanie ścieków'} code={'E-37'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Roboty budowlane związane ze wznoszeniem budynków'} code={'F-41'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Magazynowanie i działalność usługowa wspomagająca transport'} code={'H-52'} category={5} percent={1.47} sum={0.0147}/>
                    <RowAdvanced text={'Działalność pocztowa i kurierska'} code={'H-53'} category={5} percent={1.47} sum={0.0147}/>

                    <RowAdvanced text={'Produkcja papieru i wyrobów z papieru'} code={'C-17'} category={6} percent={1.73} sum={0.0173}/>
                    <RowAdvanced text={'Produkcja wyrobów z pozostałych mineralnych surowców niemetalicznych'} code={'C-23'} category={6} percent={1.73} sum={0.0173}/>
                    <RowAdvanced text={'Produkcja metalowych wyrobów gotowych, z wyłączeniem maszyn i urządzeń'} code={'C-25'} category={6} percent={1.73} sum={0.0173}/>
                    <RowAdvanced text={'Produkcja pozostałego sprzętu transportowego'} code={'C-30'} category={6} percent={1.73} sum={0.0173}/>
                    <RowAdvanced text={'Działalność związana z rekultywacją i pozostała działalność usługowa związana z gospodarką odpadami'} code={'E-39'} category={6} percent={1.73} sum={0.0173}/>
                    <RowAdvanced text={'Roboty związane z budową obiektów inżynierii lądowej i wodnej'} code={'F-42'} category={6} percent={1.73} sum={0.0173}/>

                    <RowAdvanced text={'Pozostałe górnictwo i wydobywanie'} code={'B-08'} category={7} percent={2} sum={0.02}/>
                    <RowAdvanced text={'Działalność związana ze zbieraniem, przetwarzaniem i unieszkodliwianiem odpadów; odzysk surowców'} code={'E-38'} category={7} percent={2} sum={0.02}/>

                    <RowAdvanced text={'Produkcja wyrobów z drewna oraz korka, z wyłączeniem mebli; produkcja wyrobów ze słomy i materiałów używanych do wyplatania'} code={'C-16'} category={8} percent={2.26} sum={0.0226}/>
                    <RowAdvanced text={'Transport wodny'} code={'H-50'} category={8} percent={2.26} sum={0.0226}/>

                    <RowAdvanced text={'Uprawy rolne, chów i hodowla zwierząt, łowiectwo, włączając działalność usługową'} code={'A-01'} category={9} percent={2.53} sum={0.0253}/>
                    <RowAdvanced text={'Produkcja metali'} code={'C-24'} category={9} percent={2.53} sum={0.0253}/>

                    <RowAdvanced text={'Leśnictwo i pozyskiwanie drewna'} code={'A-02'} category={10} percent={2.8} sum={0.028}/>
                    <RowAdvanced text={'Górnictwo ropy naftowej i gazu ziemnego'} code={'B-06'} category={10} percent={2.8} sum={0.028}/>

                    <RowAdvanced text={'Górnictwo rud metali'} code={'B-07'} category={11} percent={3.06} sum={0.0306}/>
                    <RowAdvanced text={'Działalność usługowa wspomagająca górnictwo i wydobywanie'} code={'B-09'} category={11} percent={3.06} sum={0.0306}/>

                    <RowAdvanced text={'Wydobywanie węgla kamiennego i węgla brunatnego (lignitu)'} code={'B-05'} category={12} percent={3.33} sum={0.0333}/>
                    <RowAdvanced text={'Domyślny'} code={''} category={''} percent={1.67} sum={0.0167}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableAdvanced;