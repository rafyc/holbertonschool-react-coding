import Footer from "./Footer";
import { shallow } from "enzyme";

describe('<Footer />', () => {
  it('it renders Footer without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  })
})

describe('<Footer />', () => {
  it('render the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  })
})
