import { createStore } from "redux";

const initialState = {
    previousUopSalary: 0,
    finalUopSalary: 0,
    previousTypeSalary: 'net',
    finalTypeSalary: 'net',
    previousSamePlace: 'tak',
    finalSamePlace: 'tak',
    previousTaxPercentage: 0,
    finalTaxPercentage: 0,
    previousZusType: 111.25,
    finalZusType: 139.06,
    previousComputer: 0,
    finalComputer: 0,
    previousPhone: 0,
    finalPhone: 0,
    previousCar: 0,
    finalCar: 0,
    previousFuel: 0,
    finalFuel: 0,
};

const reducer  = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGEDRESULTSALARY': {
            return Object.assign({}, state, {previousUopSalary: action.previousUopSalary});
        }
        case 'CHANGEDRESULTTYPESALARY': {
            return Object.assign({}, state, {previousTypeSalary: action.previousTypeSalary});

        }
        case 'CHANGEDRESULTSAMEPLACE': {
            return Object.assign({}, state, {previousSamePlace: action.previousSamePlace});

        }
        case 'CHANGEDRESULPERCENTAGETAX': {
            return Object.assign({}, state, {previousTaxPercentage: action.previousTaxPercentage});
        }
        case 'CHANGEDRESULTZUSTYPE': {
            return Object.assign({}, state, {previousZusType: action.previousZusType});
        }
        case 'CHANGEDRESULTCOMPUTER': {
            return Object.assign({}, state, {previousComputer: action.previousComputer});
        }
        case 'CHANGEDRESULTPHONE': {
            return Object.assign({}, state, {previousPhone: action.previousPhone});
        }
        case 'CHANGEDRESULTCAR': {
            return Object.assign({}, state, {previousCar: action.previousCar});
        }
        case 'CHANGEDRESULTFUEL': {
            return Object.assign({}, state, {previousFuel: action.previousFuel});
        }
        case 'CHANGEDRESULTSUBMIT': {
            return Object.assign({}, state, {finalUopSalary: action.finalUopSalary, finalTypeSalary: action.finalTypeSalary,
                finalSamePlace: action.finalSamePlace, finalTaxPercentage: action.finalTaxPercentage, finalZusType: action.finalZusType,
            finalComputer: action.finalComputer, finalPhone: action.finalPhone, finalCar: action.finalCar, finalFuel: action.finalFuel,
            });
        }
        default: return state
    }
};

const store = createStore(reducer);

export default store;