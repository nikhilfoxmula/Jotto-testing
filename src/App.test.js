import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr,storeFactor } from "../test/testUtils";
import { Provider } from "react-redux";
jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions";
const setup = () => {
  const store = storeFactor();
  return mount(<Provider store={store}><App /></Provider>);
};
test("App component renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord does not run on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    // using setProps because wrapper.update() doesn't trigger useEffect
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
