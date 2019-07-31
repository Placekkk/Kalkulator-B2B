import React from 'react';

class Gibs extends React.Component {
    render() {
        return (
            <div className={'gibs'} style={this.props.elStyle}>

                <h3>Porownanie zasilku chorobowego przy wlasnej dzialalnosci i umowie o prace</h3>


                <p className={'fancy-text'}>W przypadku opłacania dowolnej składki chorobowejprzedsiębiorca ma prawo do otzymania zasiłku chorobownego tak jak zatrudniony na umowę o pracę.
                    Z tą różnicą, że przedsiębiorca płaci składki ZUS od niszej podstawy niż pracujący na umowę o pracę (60% przeciętnego wynagrodzenia w gospodarce)


                    Po ustaleniu podstawy wynagrodzenia chorobowego albo zasiłku brutto, ustala się tzw. podstawę netto.
                    Podstawa netto to podstawa brutto pomniejszona o 13,71% tej podstawy brutto, a 13,71% to suma składek na ubezpieczenia społeczne,
                    finansowana przez pracownika (odpowiednio 9,76% ubezpieczenie emerytalne, 1,5% ubezpieczenie rentowe i 2,45% ubezpieczenie chorobowe).
                    Mając już ustaloną podstawę netto, dzielimy ją przez 30 (zawsze przez 30, niezależnie od tego, ile dany miesiąc ma dni),
                    mnożymy razy 80% (albo 70% za pobyt zasiłkowy w szpitalu czy 100%, jeśli jest to zasiłek macierzyński albo niezdolność do pracy, przypadająca w okresie ciąży).
                </p>
                <h3>Ponizej przedstawiamy wyliczenia</h3>


                <div className={'compare-holder'}>
                    <div className={'compare-holder-uop'}>

                        <div className={'basic-holder'}>
                            <p className={'result-text'}>Podstawa</p>
                            <br/>
                            <p className={'result-text'}><span className={'money-display'}>2250zl</span></p>
                        </div>


                        <div className={'basic-holder-line'}>
                        <p className={'result-text '}>1951 {'\x3C'} -- minus 13,71%</p>
                        </div>

                        <div className={'basic-holder-line'}>
                            <p className={'result-text'}>1944 {'\x3C'}-- z tego 80% (70% przy pobycie w szpitalu</p>
                        </div>

                        <div className={'basic-holder'}>

                                <p className={'result-text-fit'}>Za kazdy dzien nieobecnosci pracownik dostanie</p>
                            <p className={'result-text-fit'}>111zl </p>

                        </div>

                    </div>

                    <div className={'compare-holder-b2b'}>
                        <div className={' basic-holder'}>
                            <p className={'result-text'}>Podstawa</p>
                            <p className={'result-text'}><span className={'money-display'}>2250</span></p>
                        </div>

                        <div className={'basic-holder-col'}>
                        <p className={'result-text'}>111 {'\x3C'}-- minus 13,71%</p>
                        <p className={'result-text'}>333 {'\x3C'}-- z tego 80% (70% przy pobycie w szpitalu)</p>
                        </div>

                        <div className={'basic-holder-col'}>
                            <p className={'result-text-fit'}>Za kazdy dzien nieobecnosci przedsiebiorca dostanie 15,53</p>
                            <p className={'result-text-fit'}>Razem na dzien 22,65</p>
                            <p className={'result-text-fit'}>W czasie choroby nie musi też płacić składek społecznych czyli dziennie: 7.22zl</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Gibs;