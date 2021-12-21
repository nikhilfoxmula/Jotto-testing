import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";
const setup = () => {
  return shallow(<App />);
};
test("App component renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1);
});
