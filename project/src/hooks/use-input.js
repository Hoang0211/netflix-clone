import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
  isFocus: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched, isFocus: true };
  }
  if (action.type === 'FOCUS') {
    action.ref.current.focus();
    return { value: state.value, isTouched: state.isTouched, isFocus: true };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true, isFocus: false };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false, isFocus: false };
  }
  return inputStateReducer;
};

const useInput = (validateValue, inputRef) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputFocusHandler = () => {
    dispatch({ type: 'FOCUS', ref: inputRef });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    display: inputState.isFocus || inputState.value.trim() !== '',
    inputFocusHandler,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
