import React from 'react';

class Gibs extends React.Component {
    render() {
        return (
            <div>

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
                            <p className={'fancy-text enlarged-text'}>Podstawa</p>
                            <br/>
                            <p className={'fancy-text result-text enlarged-text'}>2250zl</p>
                        </div>

                        <p className={'fancy-text result-text'}>1951,43 {'\x3C'} -- minus 13,71%</p>

                        <p className={'fancy-text result-text'}>1553,22zl - 1951,43 {'\x3C'}-- z tego 80% (70% przy pobycie w szpitalu</p>


                        <div className={'basic-holder-bottom-flex'}>
                            <div className={'basic-holder'}>
                                <p className={'fancy-text'}>Za kazdy dzien nieobecnosci pracownik dostanie</p>

                                <p className={'fancy-text result-text'}>51,77zl</p>
                            </div>
                        </div>

                    </div>

                    <div className={'compare-holder-b2b'}>
                        <div className={' basic-holder'}>
                            <p className={'fancy-text enlarged-text'}>Podstawa</p>
                            <p className={'fancy-text enlarged-text result-text'}>650zl</p>
                        </div>

                        <p className={'fancy-text result-text'}>528,46zl {'\x3C'}-- minus 13,71%</p>
                        <p className={'fancy-text result-text'}>465,97zl {'\x3C'}-- z tego 80% (70% przy pobycie w szpitalu)</p>

                        <div className={'basic-holder-bottom-flex'}>

                            <div className={'basic-holder'}>
                                <p className={'fancy-text'}>Za kazdy dzien nieobecnosci pracownik dostanie</p>

                                <p className={'fancy-text result-text'}>15,53zl</p>
                            </div>

                            <br/>

                            <div className={'basic-holder'}>
                                <p className={'fancy-text'}>Razem na dzien</p>

                                <p className={'fancy-text result-text'}>22,65zl</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Gibs;