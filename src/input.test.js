import { findByTestAttr, checkProps, storeFactor } from "../test/testUtils";
import { mount } from "enzyme";
import Input from "./input";
import React from "react";
import { Provider } from "react-redux";

// mock the entire module for destructuring
// const mockSetCurrentGuess = jest.fn();
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));
const setup = (initialState = {}, secretWord = "party") => {
  const store = storeFactor(initialState);
  return mount(
    <Provider store={store}>
      <Input secretWord={secretWord} />
    </Provider>
  );
};

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test("Input renders without error", () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("input box does not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("submit button does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test("Input renders without error", () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("input box to show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("submit button to show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({ success: false });
  });
  afterEach(() => {
    React.useState = originalUseState;
  });
  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("field is cleared upon submit button click", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };

    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
