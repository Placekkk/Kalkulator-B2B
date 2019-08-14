import { createStore } from "redux";

const initialState = {
    previousUopSalary: 0,
    finalUopSalary: 0,
    previousTypeSalary: 'brut',
    finalTypeSalary: '',
    previousSamePlace: 111.25,
    finalSamePlace: 0,
    previousTaxPercentage: 18,
    finalTaxPercentage: 18,
    previousZusType: 'maly ZUS',
    finalZusType: 'duzy ZUS',
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
        case 'CHANGED_RESULT_SALARY': {
            return Object.assign({}, state, {previousUopSalary: action.previousUopSalary});
        }
        case 'CHANGED_RESULT_TYPE_SALARY': {
            return Object.assign({}, state, {previousTypeSalary: action.previousTypeSalary});

        }
        case 'CHANGED_RESULT_SAME_PLACE': {
            return Object.assign({}, state, {previousSamePlace: action.previousSamePlace});

        }
        case 'CHANGED_RESULT_PERCENTAGE_TAX': {
            return Object.assign({}, state, {previousTaxPercentage: action.previousTaxPercentage});
        }
        case 'CHANGED_RESULT_ZUSTYPE': {
            return Object.assign({}, state, {previousZusType: action.previousZusType});
        }
        case 'CHANGED_RESULT_COMPUTER': {
            return Object.assign({}, state, {previousComputer: action.previousComputer});
        }
        case 'CHANGED_RESULT_PHONE': {
            return Object.assign({}, state, {previousPhone: action.previousPhone});
        }
        case 'CHANGED_RESULT_CAR': {
            return Object.assign({}, state, {previousCar: action.previousCar});
        }
        case 'CHANGED_RESULT_FUEL': {
            return Object.assign({}, state, {previousFuel: action.previousFuel});
        }
        case 'CHANGED_RESULT_SUBMIT': {
            return Object.assign({}, state, {finalUopSalary: action.finalUopSalary, finalTypeSalary: action.finalTypeSalary,
                finalSamePlace: action.finalSamePlace, finalTaxPercentage: action.finalTaxPercentage, finalZusType: action.finalZusType,
            finalComputer: action.finalComputer, finalPhone: action.finalPhone, finalCar: action.finalCar, finalFuel: action.finalFuel,
            });
        }
        case 'FIX_DISCOUNTS': {
            return Object.assign({}, state, {previousComputer: action.previousComputer, previousPhone: action.previousPhone,
                previousCar: action.previousCar, previousFuel: action.previousFuel});
        }
        default: return state
    }
};

const store = createStore(reducer);

export default store;