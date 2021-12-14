import { findByTestAttr, checkProps } from "../test/testUtils";
import { shallow } from "enzyme";
import Input from "./input";

const setup = (props = {}) => {
  return shallow(<Input />);
};

test("renders without error",()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper,"component-input");
    expect(component.length).toBe(1)
})