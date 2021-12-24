import checkPropTypes from "prop-types/checkPropTypes";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/reducers/index";
import { middlewares } from "../src/configureStore";

export const storeFactor = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
};
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
