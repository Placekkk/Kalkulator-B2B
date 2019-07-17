import { createStore } from "redux";

const initialState = {
    result: 0
};

const reducer  = (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGEDRESULT': {
            return Object.assign({}, state, {result: action.result});

        }
        default: return state


    }

};




const store = createStore(reducer);

export default store;