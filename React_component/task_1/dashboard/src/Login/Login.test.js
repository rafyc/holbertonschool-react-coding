import Login from "./Login";
import { shallow } from "enzyme";

describe('<Login />', () => {
  it('it renders Login without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  })
})

describe('<Login />', () => {
  it('it renders imgnand H1 tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  })
})
