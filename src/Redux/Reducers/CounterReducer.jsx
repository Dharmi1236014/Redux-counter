
import { DECREMENT, INCREMENT } from "../ActionType";

const initialValue = {
    counter: 0
}

export const CounterReducer = (state = initialValue, action) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}
