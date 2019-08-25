import React from 'react';
import {connect} from 'react-redux';
import store from "../store";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import {faSyncAlt} from "@fortawesome/free-solid-svg-icons/faSyncAlt";

class MainCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoBarFirst: {
                display: 'none',
                color: 'yellow'
            },
            b2bSalary: 0,
            calculateButtonStyle: {
                border: '3px solid rgba(10, 180, 180, 1)'
            },
            computerValue: 0,
            phoneValue: 0,
            carValue: 0,
            fuelValue: 0,
            refreshStyle: {
                padding: '10px 10px',
                fontSize: '14px'
            },
            testState: '',
            alertStyle: {
                display: 'none'
            }
        }
    }

    handleTest = () => {
        this.setState({
            infoBarFirst: {
                display: 'block'
            }
        })
    };

    handleTestExit = () => {
        this.setState({
            infoBarFirst: {
                display: 'none'
            }
        })
    };

    borderAnimate = () => {
        if (this.state.calculateButtonStyle.border === '3px solid rgba(10, 180, 180, 1)') {
            this.setState({
                calculateButtonStyle: {
                    border: '3px solid red',
                }
            })
        }
    };

    stateFix = () => {
        let brutSalary = this.props.previousTypeSalary === 'brut' ? this.props.previousUopSalary : Math.round((this.props.previousUopSalary - (111.25 * 0.18) - 46.33) / (0.8629 * (1 - 0.09 - 0.18 + 0.0775)));
        let skladkaEmerytalnaPracodawcy = Math.round((brutSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracodawcy = Math.round((brutSalary * 0.0650 + 0.00001) * 100) / 100;
        let skladkaWypadkowa = Math.round((brutSalary * 0.0167 + 0.00001) * 100) / 100;
        let funduszPracy = Math.round((brutSalary * 0.0245 + 0.00001) * 100) / 100;
        let fgsp = Math.round((brutSalary * 0.0010 + 0.00001) * 100) / 100;
        let lacznyKosztPracodawcy = Math.round((+brutSalary + +skladkaRentowaPracodawcy + +skladkaEmerytalnaPracodawcy + +skladkaWypadkowa + +funduszPracy + +fgsp) * 100) / 100;
        this.setState({
            b2bSalary: lacznyKosztPracodawcy
        })
    };

    handleBlur = (e) => {
        if (this.props.previousUopSalary === 0) {
            return
        }
        this.props.handleUopSalary(e);
        this.stateFix();
        this.borderAnimate();
    };

    handleCalculate = (e) => {
        let skladkaEmerytalnaPracodawcy = Math.round((this.props.previousUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracodawcy = Math.round((this.props.previousUopSalary * 0.0650 + 0.00001) * 100) / 100;
        let skladkaWypadkowa = Math.round((this.props.previousUopSalary * 0.0167 + 0.00001) * 100) / 100;
        let funduszPracy = Math.round((this.props.previousUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let fgsp = Math.round((this.props.previousUopSalary * 0.0010 + 0.00001) * 100) / 100;
        let skladkaEmerytalnaPracownika = Math.round((this.props.previousUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaEmerytalnaPracownika2 = this.props.previousUopSalary * 0.0976 + 0.00001;
        let skladkaRentowaPracownika = Math.round((this.props.previousUopSalary * 0.0150 + 0.00001) * 100) / 100;
        let skladkaRentowaPracownika2 = this.props.previousUopSalary * 0.0150 + 0.00001;
        let skladkaChorobowa = Math.round((this.props.previousUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let skladkaChorobowa2 = this.props.previousUopSalary * 0.0245 + 0.00001;
        let podstawaSkladkiZdrowotnej = Math.round((this.props.previousUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa) * 100) / 100;
        let skladkaZdrowotna2 = podstawaSkladkiZdrowotnej * 0.0900 + 0.00001;
        let skladkaZdrowotnaDoOdliczenia = Math.round((podstawaSkladkiZdrowotnej * 0.0775 + 0.00001) * 100) / 100;
        let podstawaDoOpodatkowania = podstawaSkladkiZdrowotnej - this.props.previousSamePlace;
        let podatekDochodowy2 = podstawaDoOpodatkowania * (0.18) - 46.33;
        let zaliczkaNaPodatekDochodowy2 = podatekDochodowy2 - skladkaZdrowotnaDoOdliczenia;
        let zarobekLacznieNettoPracownika = Math.round((this.props.previousUopSalary - skladkaEmerytalnaPracownika2 - skladkaRentowaPracownika2 - skladkaChorobowa2 -
            skladkaZdrowotna2 - zaliczkaNaPodatekDochodowy2) * 100) / 100;
        let lacznyKosztPracodawcy = Math.round((+this.props.previousUopSalary + +skladkaRentowaPracodawcy + +skladkaEmerytalnaPracodawcy + +skladkaWypadkowa + +funduszPracy + +fgsp) * 100) / 100;
        let skladkaEmerytalnaPrzedsiebiorcy = this.props.previousZusType === 'maly ZUS' ? Math.round((675 * 0.1952) * 100) / 100 : Math.round((2859 * 0.1952) * 100) / 100;
        let skladkaRentowaPrzesiebiorcy = this.props.previousZusType === 'maly ZUS' ? Math.round((675 * 0.08) * 100) / 100 : Math.round((2859 * 0.08) * 100) / 100;
        let skladkaChorobowaPrzedsiebiorcy = this.props.previousZusType === 'maly ZUS' ? Math.round((675 * 0.0245) * 100) / 100 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaWypadkowaPrzedsiebiorcy = this.props.previousZusType === 'maly ZUS' ? Math.round((675 * 0.0167) * 100) / 100 : Math.round((2859 * 0.0167) * 100) / 100;
        let funduszPracyPrzedsiebiorcy = this.props.previousZusType === 'maly ZUS' ? 0 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaZdrowotnaPrzedsiebiorcy = Math.round((3803.56 * 0.09) * 100) / 100;
        let skladkaZdrowotnaPrzesiebiorcy2 = Math.round((3803.56 * 0.0775) * 100) / 100;
        let razemDoZusPrzedsiebiorcy = Math.round((skladkaZdrowotnaPrzedsiebiorcy + skladkaEmerytalnaPrzedsiebiorcy + skladkaRentowaPrzesiebiorcy +
            skladkaChorobowaPrzedsiebiorcy + skladkaWypadkowaPrzedsiebiorcy + funduszPracyPrzedsiebiorcy) * 100) / 100;
        let podstawaOpodatkowaniaPrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - ((Number(this.state.carValue) * 0.2) + Number(this.state.phoneValue) + Number(this.state.computerValue)
            + (Number(this.state.fuelValue) / 2))) * 100) / 100;
        let podatekPrzedsiebiorcy = Math.round((podstawaOpodatkowaniaPrzedsiebiorcy * (this.props.previousTaxPercentage / 100) - skladkaZdrowotnaPrzesiebiorcy2) * 100) / 100;
        let zarobekLaczniePrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - razemDoZusPrzedsiebiorcy - podatekPrzedsiebiorcy) * 100) / 100;

        e.preventDefault();
        if (this.props.previousUopSalary === 0) {
            return
        }
        this.handleOverDiscount();
        this.props.handleDiscounts(Number(this.state.computerValue), Number(this.state.phoneValue), Number(this.state.carValue), Number(this.state.fuelValue));
        this.props.clickHandler(e);
        this.stateFix();
        this.setState({
            calculateButtonStyle: {
                border: '3px solid rgba(10, 180, 180, 1)'
            }
        });
        if (podstawaDoOpodatkowania * 13 > 85528) {           // pokazywanie miesiace przekroczenia
            // this.testBigTax()
            let months = ['styczen', 'luty', 'marzec', 'kwiecien', 'maj', 'czerwiec', 'lipiec', 'sierpien', 'wrzesien', 'pazdziernik', 'listopad', 'grudzien'];
            let result = Math.ceil(85528/podstawaDoOpodatkowania);
            console.log(months[result]);
            this.setState({testState: months[result], alertStyle: {display: 'flex'}})
        }
    };

    testBigTax = () => {
        console.log(this.props.taxThreshold + 'test');
        this.setState({testState: this.props.taxThreshold})
    };

    handleBrutNet = (e) => {
        this.props.handleSalaryType(e);
        if (this.props.previousUopSalary !== 0) {
            let brutSalary = this.props.previousTypeSalary === 'net' ? this.props.previousUopSalary : Math.round((this.props.previousUopSalary - (111.25 * 0.18) - 46.33) / (0.8629 * (1 - 0.09 - 0.18 + 0.0775)));
            let skladkaEmerytalnaPracodawcy = Math.round((brutSalary * 0.0976 + 0.00001) * 100) / 100;
            let skladkaRentowaPracodawcy = Math.round((brutSalary * 0.0650 + 0.00001) * 100) / 100;
            let skladkaWypadkowa = Math.round((brutSalary * 0.0167 + 0.00001) * 100) / 100;
            let funduszPracy = Math.round((brutSalary * 0.0245 + 0.00001) * 100) / 100;
            let fgsp = Math.round((brutSalary * 0.0010 + 0.00001) * 100) / 100;
            let lacznyKosztPracodawcy = Math.round((+brutSalary + +skladkaRentowaPracodawcy + +skladkaEmerytalnaPracodawcy + +skladkaWypadkowa + +funduszPracy + +fgsp) * 100) / 100;
            this.setState({
                b2bSalary: lacznyKosztPracodawcy
            })
        }
    };
    handleSamePlace = (e) => {
        this.props.handleSamePlace(e);
        this.stateFix();
        this.borderAnimate();
    };
    handlePercentageTax = (e) => {
        this.props.handlePercentageTax(e);
        this.borderAnimate();
    };
    handleZusType = (e) => {
        this.props.handleZusType(e);
        this.borderAnimate();
    };
    handleComputer = (e) => {
        this.setState({computerValue: e.target.value});
        this.props.handleComputer(e)
    };
    handlePhone = (e) => {
        this.setState({phoneValue: e.target.value});
        this.props.handlePhone(e)
    };
    handleCar = (e) => {
        this.setState({carValue: e.target.value});
        this.props.handleCar(e)
    };
    handleFuel = (e) => {
        this.setState({fuelValue: e.target.value});
        this.props.handleFuel(e)
    };
    handleOverDiscount = () => {

        if (Number(this.state.computerValue) + Number(this.state.phoneValue) + Number(this.state.carValue) + Number(this.state.fuelValue) > Number(this.state.b2bSalary)) {
            let computerValue = Number(this.state.computerValue);
            let phoneValue = Number(this.state.phoneValue);
            let carValue = Number(this.state.carValue);
            let fuelValue = Number(this.state.fuelValue);
            let allValues = [Number(this.state.computerValue), Number(this.state.phoneValue), Number(this.state.carValue), Number(this.state.fuelValue)];
            let allValuesSum = allValues.reduce((a, b) => a + b);
            let diffirenceBetweenValues = Math.round((Number(this.state.b2bSalary - allValuesSum) * 100) / 100);
            let finalPropsSet = this.props.handleDiscounts(Number(this.state.computerValue), Number(this.state.phoneValue), Number(this.state.carValue), Number(this.state.fuelValue));
            let maxValue = Math.max(...allValues);

            alert(`kwota do odliczenia na nastepny miesiac to ${Math.abs(diffirenceBetweenValues)} zl`);


            if (computerValue !== 0 && phoneValue === 0 && carValue === 0 && fuelValue === 0) {
                this.setState({computerValue: this.state.b2bSalary}, () => finalPropsSet)
            } else if (computerValue === 0 && phoneValue !== 0 && carValue === 0 && fuelValue === 0) {
                this.setState({phoneValue: this.state.b2bSalary}, () => finalPropsSet)
            } else if (computerValue === 0 && phoneValue === 0 && carValue !== 0 && fuelValue === 0) {
                this.setState({carValue: this.state.b2bSalary})
            } else if (computerValue === 0 && phoneValue === 0 && carValue === 0 && fuelValue !== 0) {
                this.setState({fuelValue: this.state.b2bSalary})
            }


            if (computerValue !== 0 && phoneValue !== 0 && carValue === 0 && fuelValue === 0) {
                if (computerValue > phoneValue) {
                    if (this.state.b2bSalary - this.state.phoneValue < 0) {
                        this.setState({
                            phoneValue: this.state.b2bSalary/2,
                            computerValue: this.state.b2bSalary/2
                        })
                    } else {
                        this.setState({
                            computerValue: this.state.b2bSalary - this.state.phoneValue
                        })
                    }
                } else if (phoneValue > computerValue) {
                    if (this.state.b2bSalary - this.state.computerValue < 0) {
                        this.setState({
                            phoneValue: this.state.b2bSalary/2,
                            computerValue: this.state.b2bSalary/2
                        })
                    } else {
                        this.setState({
                            phoneValue: this.state.b2bSalary - this.state.computerValue
                        })
                    }
                }
            }

            else if (computerValue !== 0 && phoneValue === 0 && carValue !== 0 && fuelValue === 0) {
                if (computerValue > carValue) {
                    if (this.state.b2bSalary - this.state.carValue < 0) {
                        this.setState({
                            carValue: this.state.b2bSalary/2,
                            computerValue: this.state.b2bSalary/2
                        })
                    } else {
                        this.setState({
                            computerValue: this.state.b2bSalary - this.state.carValue
                        })
                    }
                } else if (carValue > computerValue) {
                    if (this.state.b2bSalary - this.state.computerValue < 0) {
                        this.setState({
                            carValue: this.state.b2bSalary/2,
                            computerValue: this.state.b2bSalary/2
                        })
                    } else {
                        this.setState({
                            carValue: this.state.b2bSalary - this.state.computerValue
                        })
                    }
                }
            }

            else if (computerValue !== 0 && phoneValue === 0 && carValue === 0 && fuelValue !== 0) {
                if (computerValue > fuelValue) {
                    if (this.state.b2bSalary - this.state.fuelValue < 0) {
                        this.setState({
                            computerValue: this.state.b2bSalary/2,
                            fuelValue: this.state.b2bSalary/2,
                        })
                    } else {
                        this.setState({computerValue: this.state.b2bSalary - this.state.fuelValue})
                    }
                } else if (fuelValue > computerValue) {
                    if (this.state.b2bSalary - this.state.computerValue < 0) {
                        this.setState({
                            computerValue: this.state.b2bSalary/2,
                            fuelValue: this.state.b2bSalary/2,
                        })
                    } else {
                        this.setState({fuelValue: this.state.b2bSalary - this.state.computerValue})
                    }
                }
            }

            else if (computerValue === 0 && phoneValue !== 0 && carValue !== 0 && fuelValue === 0) {
                if (phoneValue > carValue) {
                    if (this.state.b2bSalary - this.state.carValue < 0) {
                        this.setState({
                            phoneValue: this.state.b2bSalary/2,
                            carValue: this.state.b2bSalary/2,
                        })
                    } else {
                        this.setState({phoneValue: this.state.b2bSalary - this.state.carValue})
                    }
                } else if (carValue > phoneValue) {
                    if (this.state.b2bSalary - this.state.phoneValue < 0) {
                        this.setState({
                            phoneValue: this.state.b2bSalary/2,
                            carValue: this.state.b2bSalary/2,
                        })
                    } else {
                        this.setState({carValue: this.state.b2bSalary - this.state.carValue})
                    }
                }
            } else if (computerValue === 0 && phoneValue !== 0 && carValue === 0 && fuelValue !== 0) {
                if (phoneValue > fuelValue) {
                    if (this.state.b2bSalary - this.state.fuelValue < 0) {
                        this.setState({
                            phoneValue: this.state.b2bSalary / 2,
                            fuelValue: this.state.b2bSalary / 2,
                        })
                    } else {
                        this.setState({phoneValue: this.state.b2bSalary - this.state.fuelValue})
                    }
                } else if (fuelValue > phoneValue) {
                    if (this.state.b2bSalary - this.state.phoneValue < 0) {
                        this.setState({
                            phoneValue: this.state.b2bSalary / 2,
                            fuelValue: this.state.b2bSalary / 2,
                        })
                    } else {
                        this.setState({fuelValue: this.state.b2bSalary - this.state.phoneValue})
                    }
                }


            } else if (computerValue === 0 && phoneValue === 0 && carValue !== 0 && fuelValue !== 0) {
                if (carValue > fuelValue) {
                    if (this.state.b2bSalary - this.state.fuelValue < 0) {
                        this.setState({
                            carValue: this.state.b2bSalary / 2,
                            fuelValue: this.state.b2bSalary / 2,
                        })
                    } else {this.setState({carValue: this.state.b2bSalary - this.state.fuelValue})}
                } else if (fuelValue > carValue) {
                    if (this.state.b2bSalary - this.state.carValue < 0) {
                        this.setState({
                            carValue: this.state.b2bSalary / 2,
                            fuelValue: this.state.b2bSalary / 2,
                        })
                    } else {this.setState({fuelValue: this.state.b2bSalary - this.state.carValue})}
                }
            }


            if (computerValue !== 0 && phoneValue !== 0 && carValue !== 0 && fuelValue === 0) {
                if (computerValue > phoneValue && computerValue > carValue) {
                    if (this.state.b2bSalary - this.state.phoneValue - this.state.carValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {
                        this.setState({computerValue: this.state.b2bSalary - this.state.phoneValue - this.state.carValue})
                    }
                } else if (phoneValue > computerValue && phoneValue > carValue) {
                    if (this.state.b2bSalary - this.state.computerValue - this.state.carValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {
                        this.setState({phoneValue: this.state.b2bSalary - this.state.computerValue - this.state.carValue})
                    }
                } else if (carValue > computerValue && carValue > phoneValue) {
                    if (this.state.b2bSalary - this.state.computerValue - this.state.phoneValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {
                        this.setState({carValue: this.state.b2bSalary - this.state.computerValue - this.state.phoneValue})
                    }
                }
            }


            else if (computerValue !== 0 && phoneValue !== 0 && carValue === 0 && fuelValue !== 0) {
                if (computerValue > phoneValue && computerValue > fuelValue) {
                    if (this.state.b2bSalary - this.state.phoneValue - this.state.fuelValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {
                        this.setState({computerValue: this.state.b2bSalary - this.state.phoneValue - this.state.fuelValue})
                    }
                } else if (phoneValue > computerValue && phoneValue > fuelValue) {
                    if (this.state.b2bSalary - this.state.computerValue - this.state.fuelValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {
                        this.setState({phoneValue: this.state.b2bSalary - this.state.computerValue - this.state.fuelValue})
                    }
                } else if (fuelValue > computerValue && fuelValue > phoneValue) {
                    if (this.state.b2bSalary - this.state.computerValue - this.state.phoneValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {
                        this.setState({fuelValue: this.state.b2bSalary - this.state.computerValue - this.state.phoneValue})
                    }
                }
            }


            else if (computerValue !== 0 && phoneValue === 0 && carValue !== 0 && fuelValue !== 0) {
                if (computerValue > carValue && computerValue > fuelValue) {
                    if (this.state.b2bSalary - this.state.carValue - this.state.fuelValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {this.setState({computerValue: this.state.b2bSalary - this.state.carValue - this.state.fuelValue})}
                } else if (carValue > computerValue && carValue > fuelValue) {
                    if (this.state.b2bSalary - this.state.computerValue - this.state.fuelValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {this.setState({carValue: this.state.b2bSalary - this.state.computerValue - this.state.fuelValue})}
                } else if (fuelValue > computerValue && fuelValue > carValue) {
                    if (this.state.b2bSalary - this.state.carValue - this.state.fuelValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {this.setState({fuelValue: this.state.b2bSalary - this.state.computerValue - this.state.carValue})}
                }
            }


            else if (computerValue === 0 && phoneValue !== 0 && carValue !== 0 && fuelValue !== 0) {
                if (phoneValue > carValue && phoneValue > fuelValue) {
                    if (this.state.b2bSalary - this.state.carValue - this.state.fuelValue < 0) {
                        this.setState({
                            phoneValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {this.setState({phoneValue: this.state.b2bSalary - this.state.carValue - this.state.fuelValue})}
                } else if (carValue > phoneValue && carValue > fuelValue) {
                    if (this.state.b2bSalary - this.state.phoneValue - this.state.fuelValue < 0) {
                        this.setState({
                            phoneValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {this.setState({carValue: this.state.b2bSalary - this.state.phoneValue - this.state.fuelValue})}
                } else if (fuelValue > phoneValue && fuelValue > carValue) {
                    if (this.state.b2bSalary - this.state.phoneValue - this.state.carValue < 0) {
                        this.setState({
                            phoneValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 3) * 100) / 100)
                        })
                    } else {this.setState({fuelValue: this.state.b2bSalary - this.state.phoneValue - this.state.carValue})}
                }
            }


            if (computerValue !== 0 && phoneValue !== 0 && carValue !== 0 && fuelValue !== 0) {
                if (computerValue === maxValue) {
                    if (this.state.b2bSalary - this.state.phoneValue - this.state.carValue - this.state.fuelValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100)
                        })
                    } else {this.setState({computerValue: this.state.b2bSalary - this.state.phoneValue - this.state.carValue - this.state.fuelValue})}
                } else if (phoneValue === maxValue) {
                    if (this.state.b2bSalary - this.state.computerValue - this.state.carValue - this.state.fuelValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100)
                        })
                    } else {this.setState({phoneValue: this.state.b2bSalary - this.state.computerValue - this.state.carValue - this.state.fuelValue})}
                } else if (carValue === maxValue) {
                    if (this.state.b2bSalary - this.state.computerValue - this.state.phoneValue - this.state.fuelValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100)
                        })
                    } else {this.setState({carValue: this.state.b2bSalary - this.state.computerValue - this.state.phoneValue - this.state.fuelValue})}
                } else if (fuelValue === maxValue) {
                    if (this.state.b2bSalary - this.state.computerValue - this.state.phoneValue - this.state.carValue < 0) {
                        this.setState({
                            computerValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            phoneValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            carValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100),
                            fuelValue: Math.round(((this.state.b2bSalary / 4) * 100) / 100)
                        })
                    } else {this.setState({fuelValue: this.state.b2bSalary - this.state.computerValue - this.state.phoneValue - this.state.carValue})}
                }
            }

        }
    };

    refreshButton = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.props.testFunction()
    };

    handleAlertAccept = (e) => {
        e.preventDefault();
        this.setState({alertStyle: {display: 'none'}})
    };

    render() {
        let skladkaEmerytalnaPracodawcy = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaRentowaPracodawcy = Math.round((this.props.finalUopSalary * 0.0650 + 0.00001) * 100) / 100;
        let skladkaWypadkowa = Math.round((this.props.finalUopSalary * 0.0167 + 0.00001) * 100) / 100;
        let funduszPracy = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let fgsp = Math.round((this.props.finalUopSalary * 0.0010 + 0.00001) * 100) / 100;
        let skladkaEmerytalnaPracownika = Math.round((this.props.finalUopSalary * 0.0976 + 0.00001) * 100) / 100;
        let skladkaEmerytalnaPracownika2 = this.props.finalUopSalary * 0.0976 + 0.00001;
        let skladkaRentowaPracownika = Math.round((this.props.finalUopSalary * 0.0150 + 0.00001) * 100) / 100;
        let skladkaRentowaPracownika2 = this.props.finalUopSalary * 0.0150 + 0.00001;
        let skladkaChorobowa = Math.round((this.props.finalUopSalary * 0.0245 + 0.00001) * 100) / 100;
        let skladkaChorobowa2 = this.props.finalUopSalary * 0.0245 + 0.00001;
        let podstawaSkladkiZdrowotnej = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika - skladkaRentowaPracownika - skladkaChorobowa) * 100) / 100;
        let skladkaZdrowotna2 = podstawaSkladkiZdrowotnej * 0.0900 + 0.00001;
        let skladkaZdrowotnaDoOdliczenia = Math.round((podstawaSkladkiZdrowotnej * 0.0775 + 0.00001) * 100) / 100;
        let podstawaDoOpodatkowania = podstawaSkladkiZdrowotnej - this.props.finalSamePlace;
        let podatekDochodowy2 = podstawaDoOpodatkowania * (0.18) - 46.33;
        let zaliczkaNaPodatekDochodowy2 = podatekDochodowy2 - skladkaZdrowotnaDoOdliczenia;
        let zarobekLacznieNettoPracownika = Math.round((this.props.finalUopSalary - skladkaEmerytalnaPracownika2 - skladkaRentowaPracownika2 - skladkaChorobowa2 -
            skladkaZdrowotna2 - zaliczkaNaPodatekDochodowy2) * 100) / 100;
        let lacznyKosztPracodawcy = Math.round((+this.props.finalUopSalary + +skladkaRentowaPracodawcy + +skladkaEmerytalnaPracodawcy + +skladkaWypadkowa + +funduszPracy + +fgsp) * 100) / 100;
        let skladkaEmerytalnaPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.1952) * 100) / 100 : Math.round((2859 * 0.1952) * 100) / 100;
        let skladkaRentowaPrzesiebiorcy = this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.08) * 100) / 100 : Math.round((2859 * 0.08) * 100) / 100;
        let skladkaChorobowaPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.0245) * 100) / 100 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaWypadkowaPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS' ? Math.round((675 * 0.0167) * 100) / 100 : Math.round((2859 * 0.0167) * 100) / 100;
        let funduszPracyPrzedsiebiorcy = this.props.finalZusType === 'maly ZUS' ? 0 : Math.round((2859 * 0.0245) * 100) / 100;
        let skladkaZdrowotnaPrzedsiebiorcy = Math.round((3803.56 * 0.09) * 100) / 100;
        let skladkaZdrowotnaPrzesiebiorcy2 = Math.round((3803.56 * 0.0775) * 100) / 100;
        let razemDoZusPrzedsiebiorcy = Math.round((skladkaZdrowotnaPrzedsiebiorcy + skladkaEmerytalnaPrzedsiebiorcy + skladkaRentowaPrzesiebiorcy +
            skladkaChorobowaPrzedsiebiorcy + skladkaWypadkowaPrzedsiebiorcy + funduszPracyPrzedsiebiorcy) * 100) / 100;
        let podstawaOpodatkowaniaPrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - ((Number(this.state.carValue) * 0.2) + Number(this.state.phoneValue) + Number(this.state.computerValue)
            + (Number(this.state.fuelValue) / 2))) * 100) / 100;
        let podatekPrzedsiebiorcy = Math.round((podstawaOpodatkowaniaPrzedsiebiorcy * (this.props.finalTaxPercentage / 100) - skladkaZdrowotnaPrzesiebiorcy2) * 100) / 100;
        let zarobekLaczniePrzedsiebiorcy = Math.round((lacznyKosztPracodawcy - razemDoZusPrzedsiebiorcy - podatekPrzedsiebiorcy) * 100) / 100;


        return (
            <div className={'first-main-holder'}>

                <form>

                    <div className={'both-holder'}>

                        <div className={'uop-holder'}>

                            <h3>Umowa o prace</h3>

                            <div className={'amount-holder'}>
                                <p className={'fancy-text'}>Wpisz kwote</p>
                                <label>
                                    <input type={'number'} className={'fancy-input extra-style'}
                                           onChange={this.props.handleUopSalary} onBlur={this.handleBlur}/>
                                </label>

                                <select className={'fancy-select'} onChange={this.handleBrutNet}>
                                    <option value={'brut'}>Brutto</option>
                                    <option value={'net'}>Netto</option>
                                </select>
                            </div>

                            <div className={'alert-box'} style={this.state.alertStyle}>
                                <h4>Uwaga</h4>
                                <p>W miesiacu {this.state.testState} wejdziesz w II prog podatkowy. Kalkulator automatycznie
                                zaciagnie srednia z zakladki "Roczna tabela dochodow" i porowna wyniki</p>
                                <button onClick={this.handleAlertAccept} className={'fancy-button'}>OK</button>
                            </div>

                            <div className={'birth-place-holder'}>
                                <p className={'fancy-text'}>Czy miejsce zamieszkania jest w tym samym miejscu co miejsce
                                    pracy <FontAwesomeIcon id={'info-icon'} icon={faInfoCircle}
                                                           onMouseEnter={this.handleTest}
                                                           onMouseLeave={this.handleTestExit}/></p>
                                <select className={'fancy-select'} onChange={this.handleSamePlace}>
                                    <option value={111.25}>Tak</option>
                                    <option value={139.06}>Nie</option>
                                </select>
                            </div>

                            <p className={'fancy-text info-pop'} style={this.state.infoBarFirst}>Koszty uzyskania
                                przychodu uzyskane z tytulu jednej umowy wynosza 111,25
                                albo 139,06 przy zamieszkaniu w miesjscowosci poza zakladem pracy</p>

                        </div>

                        <div className={'b2b-holder'}>

                            <h3>Umowa B2B</h3>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Ekwiwalent na fakturze "na reke" (bez vat23%)</p>
                                <p className={' b2b-display-par'}>{this.state.b2bSalary}zl</p>
                            </label>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Wybierz % podatku [%]</p>
                                <select className={'fancy-select b2b-select'} onChange={this.handlePercentageTax}>
                                    <option value={18}>18</option>
                                    <option value={19}>19</option>
                                    <option value={32}>32</option>
                                </select>
                            </label>

                            <label className={'b2b-label'}>
                                <p className={'fancy-text b2b-text'}>Podstawa wymiaru skladek</p>
                                <select className={'fancy-select b2b-select'} onChange={this.handleZusType}>
                                    <option value={'maly ZUS'}>Maly ZUS</option>
                                    <option value={'duzy ZUS'}>Duzy ZUS</option>
                                </select>
                            </label>

                            <div className={'income-cost'}>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Komputer [zl]</p>
                                    <input type='number' className={'fancy-input b2b-input'}
                                           onChange={this.handleComputer} value={this.state.computerValue}/>
                                </label>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Telefon [zl]</p>
                                    <input type='number' className={'fancy-input b2b-input'}
                                           onChange={this.handlePhone} value={this.state.phoneValue}/>
                                </label>

                                <label className={'b2b-label'}>
                                    <p className={'fancy-text b2b-text'}>Samochod [zl]</p>
                                    <input type='number' className={'fancy-input b2b-input'}
                                           onChange={this.handleCar} value={this.state.carValue}/>
                                </label>

                                <label className={'b2b-label last-label'}>
                                    <p className={'fancy-text b2b-text'}>Paliwo [zl]</p>
                                    <input type='number' className={'fancy-input b2b-input'}
                                           onChange={this.handleFuel} value={this.state.fuelValue}/>
                                </label>

                            </div>
                        </div>
                    </div>

                    {/*<FontAwesomeIcon value={0} icon={faSyncAlt}/>*/}

                    <div className={'calculate-holder'}>
                        <button className={'fancy-button'} onClick={this.handleCalculate}
                                style={this.state.calculateButtonStyle}>Oblicz
                        </button>
                        <button onClick={this.refreshButton} style={this.state.refreshStyle} className={'fancy-button'} value={0}>Wyczysc </button>
                        <p className={'fancy-text'}>Tyle zyskasz wiecej na reke w przypadku b2b</p>
                        <div className={'calculate-input-holder'}>
                            <div className={'sum-display'}>
                                <p>Na miesiac</p>
                                <p className={'sum-display-par'}>{this.props.finalUopSalary !== 0 ? Math.round((zarobekLaczniePrzedsiebiorcy - this.props.averageNetSalary/12) * 100) / 100 : 0}zl</p>
                            </div>
                            <div className={'sum-display'}>
                                <p>W ciagu roku</p>
                                <p className={'sum-display-par'}>{this.props.finalUopSalary !== 0 ? Math.round((Math.round((zarobekLaczniePrzedsiebiorcy - this.props.averageNetSalary/12) * 100) / 100 * 12) * 100) / 100 : 0}zl</p>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        previousUopSalary: state.previousUopSalary,
        finalUopSalary: state.finalUopSalary,
        previousTypeSalary: state.previousTypeSalary,
        finalTypeSalary: state.finalTypeSalary,
        previousSamePlace: state.previousSamePlace,
        finalSamePlace: state.finalSamePlace,
        previousTaxPercentage: state.previousTaxPercentage,
        finalTaxPercentage: state.finalTaxPercentage,
        previousZusType: state.previousZusType,
        finalZusType: state.finalZusType,
        previousComputer: state.previousComputer,
        finalComputer: state.finalComputer,
        previousPhone: state.previousPhone,
        finalPhone: state.finalPhone,
        previousCar: state.previousCar,
        finalCar: state.finalCar,
        previousFuel: state.previousFuel,
        finalFuel: state.finalFuel,
        averageNetSalary: state.averageNetSalary,
        taxThreshold: state.taxThreshold
    }
};

export const mapDispatchToProps = (dispatch) => {

    return {
        handleDiscounts: (computer, phone, car, fuel) => {
            const action = {type: 'FIX_DISCOUNTS', previousComputer: computer, previousPhone: phone, previousCar: car, previousFuel: fuel};
            dispatch(action)
        },
        handleTaxThreshold: (result) => {
            const action = {type: 'TAX_THRESHOLD_DISPLAY', taxThreshold: result};
            dispatch(action);
        },
        handleUopSalary: (e) => {
            if (e.target.value <= 0 || e.target.value.length === 0) {
                const action = {type: 'CHANGED_RESULT_SALARY', previousUopSalary: 0};
                dispatch(action);
                return
            }
            const action = {type: 'CHANGED_RESULT_SALARY', previousUopSalary: parseInt(e.target.value)};
            dispatch(action);
        },
        handleSalaryType: (e) => {
            const action = {type: 'CHANGED_RESULT_TYPE_SALARY', previousTypeSalary: e.target.value};
            dispatch(action);
        },
        handleSamePlace: (e) => {
            const action = {type: 'CHANGED_RESULT_SAME_PLACE', previousSamePlace: e.target.value};
            dispatch(action)
        },
        handlePercentageTax: (e) => {
            const action = {type: 'CHANGED_RESULT_PERCENTAGE_TAX', previousTaxPercentage: e.target.value};
            dispatch(action)
        },
        handleZusType: (e) => {
            const action = {type: 'CHANGED_RESULT_ZUSTYPE', previousZusType: e.target.value};
            dispatch(action)
        },
        handleComputer: (e) => {
            if (e.target.value.length === 0) {
                const action = {type: 'CHANGED_RESULT_COMPUTERL', previousComputer: 0};
                dispatch(action);
                return
            }
            const action = {type: 'CHANGED_RESULT_COMPUTER', previousComputer: parseInt(e.target.value)};
            dispatch(action)
        },
        handlePhone: (e) => {
            if (e.target.value.length === 0) {
                const action = {type: 'CHANGED_RESULT_PHONE', previousPhone: 0};
                dispatch(action);
                return
            }
            const action = {type: 'CHANGED_RESULT_PHONE', previousPhone: parseInt(e.target.value)};
            dispatch(action)
        },
        handleCar: (e) => {
            if (e.target.value.length === 0) {
                const action = {type: 'CHANGED_RESULT_CAR', previousCar: 0};
                dispatch(action);
                return
            }
            const action = {type: 'CHANGED_RESULT_CAR', previousCar: parseInt(e.target.value)};
            dispatch(action)
        },
        handleFuel: (e) => {
            if (e.target.value.length === 0) {
                const action = {type: 'CHANGED_RESULT_FUEL', previousFuel: 0};
                dispatch(action);
                return
            }
            const action = {type: 'CHANGED_RESULT_FUEL', previousFuel: parseInt(e.target.value)};
            dispatch(action)
        },
        handleAverageNetSalary: (result) => {
            const action = {type: 'SET_AVERAGE_SALARY', averageNetSalary: parseInt(result)};
            dispatch(action)
        }
        ,
        clickHandler: (e) => {
            let shop = store.getState();
            let finalTypeSalary = shop.previousTypeSalary;
            let finalSamePlace = shop.previousSamePlace;
            let finalSalary = finalTypeSalary === 'brut' ? shop.previousUopSalary : Math.round((shop.previousUopSalary - (shop.previousSamePlace * 0.18) - 46.33) / (0.8629 * (1 - 0.09 - 0.18 + 0.0775)));
            let finalTaxPercentage = shop.previousTaxPercentage;
            let finalZusType = shop.previousZusType;
            let finalComputer = shop.previousComputer;
            let finalPhone = shop.previousPhone;
            let finalCar = shop.previousCar;
            let finalFuel = shop.previousFuel;
            e.preventDefault();
            const action = {
                type: 'CHANGED_RESULT_SUBMIT',
                finalUopSalary: finalSalary,
                finalTypeSalary: finalTypeSalary,
                finalSamePlace: finalSamePlace,
                finalTaxPercentage: finalTaxPercentage,
                finalZusType: finalZusType,
                finalComputer: finalComputer,
                finalPhone: finalPhone,
                finalCar: finalCar,
                finalFuel: finalFuel
            };
            dispatch(action);
            console.log(shop);
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainCalc);
