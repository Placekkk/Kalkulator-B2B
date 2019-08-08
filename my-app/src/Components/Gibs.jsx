import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from "./MainCalc";

class Gibs extends React.Component {
    render() {
        let podstawaChorobowego = Math.round((this.props.finalUopSalary * 0.8629 + 0.00001) * 100) / 100;
        let podstawaChorobowego2 = Math.round((podstawaChorobowego * 0.8) * 100) / 100;
        let dzienNieobecnosciPracownik = Math.round((podstawaChorobowego2 / 30) * 100) / 100;
        let dzienNieobecnosciPrzedsiebiorcy = Math.round(((((this.props.finalZusType === 111.25 ? 675 : 2859) * 0.8629) * 0.8) / 30 + 7.12) * 100) / 100;
        let podstawaUop1 = Math.round((this.props.finalUopSalary * 0.8629) *100) /100;
        let podstawaUop2 = Math.round((this.props.finalUopSalary * 0.8629) * 0.800 * 100) / 100;
        let podstawaB2B0 = this.props.finalZusType === 'maly ZUS' ? 675.00 : 2859.00;
        let podstawaB2B1 = Math.round(((this.props.finalZusType === 111.25 ? 675.00 : 2859.00) * 0.8629) *100) /100;
        let podstawaB2B2 = Math.round(((this.props.finalZusType === 111.25 ? 675.00 : 2859.00) * 0.8629 * 0.800) *100) /100;
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

                        <h3>Umowa o pracę</h3>
                        <div className={'basic-holder'}>
                            <p className={'result-text'}>Podstawa</p>
                            <br/>
                            <p className={'result-text'}><span className={'money-display'}>{Math.round((this.props.finalUopSalary) *100) /100}zl</span></p>
                        </div>


                        <div className={'basic-holder-line'}>
                        <p className={'result-text '}>{podstawaUop1}zl {'\x3C'} -- minus 13,71%</p>
                        </div>

                        <div className={'basic-holder-line'}>
                            <p className={'result-text'}>{podstawaUop2}zl {'\x3C'}-- z tego 80% (70% przy pobycie w szpitalu</p>
                        </div>

                        <div className={'basic-holder'}>

                                <p className={'result-text-fit'}>Za kazdy dzien nieobecnosci pracownik dostanie</p>
                            <p className={'result-text-fit'}>{dzienNieobecnosciPracownik}zl</p>

                        </div>
                    </div>

                    <div className={'compare-holder-b2b'}>
                        <h3>Działalność gospodarcza</h3>

                        <div className={' basic-holder'}>
                            <p className={'result-text'}>Podstawa</p>
                            <p className={'result-text'}><span className={'money-display'}>{podstawaB2B0}zl</span></p>
                        </div>

                        <div className={'basic-holder-col'}>
                        <p className={'result-text'}>{podstawaB2B1}zl {'\x3C'}-- minus 13,71%</p>
                        <p className={'result-text'}>{podstawaB2B2}zl {'\x3C'}-- z tego 80% (70% przy pobycie w szpitalu)</p>
                        </div>

                        <div className={'basic-holder-col'}>
                            <p className={'result-text-fit'}>Za kazdy dzien nieobecnosci przedsiebiorca dostanie {Math.round((podstawaB2B2 / 30) *100) / 100}zl</p>
                            <p className={'result-text-fit'}>Razem na dzien {Math.round((dzienNieobecnosciPrzedsiebiorcy) *100) /100}zl</p>
                            <p className={'result-text-fit'}>W czasie choroby nie musi też płacić składek społecznych czyli dziennie: 7.12zl</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Gibs);