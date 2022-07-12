import { ADD_NUMBER, DIV_NUMBER, MUL_NUMBER, RESET_NUMBER, SUB_NUMBER } from "../actions";

const defaultState = {
  value: 0,
  log: "0",
};

function calculatorReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER: {
      console.log(action.number);
      const prev = state.value;
      return {
        ...state,
        value: state.value + +action.number,
        log: prev + "+" + action.number,
      };
    }
    case SUB_NUMBER: {
      console.log(action.number);
      const prev = state.value;
      return {
        ...state,
        value: state.value - +action.number,
        log: prev + "-" + action.number,
      };
    }
    case MUL_NUMBER: {
      const prev = state.value;

      return {
        ...state,
        value: state.value * +action.number,
        log: prev + "*" + action.number,
      };
    }
    case DIV_NUMBER: {
        
      if (action.number === 0) {
        return state;
      }
      const prev = state.value;

      return {
        ...state,
        value: state.value / +action.number,
        log: prev + "/" + action.number,
      };
    }

    case RESET_NUMBER : {
        return {
            ...state,
            value: 0,
            log: '0'
        }
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

export default calculatorReducer;
