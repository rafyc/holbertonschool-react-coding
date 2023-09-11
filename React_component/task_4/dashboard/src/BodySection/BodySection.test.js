import BodySection from "./BodySection";
import { shallow } from "enzyme";


describe('Bodysection', () => {
  let wrapper;

  beforeEach(() => {
    const props = { title: "test title", children: <p>test children node</p> }
    wrapper = shallow(<BodySection {...props} />);
  });

  it('should render correctly the children and one h2 element', () => {
    expect(wrapper.exists()).toBe(true);
    const titleWrapper = wrapper.find('h2');
    const textWrapper = wrapper.find('p');
    expect(titleWrapper.exists()).toBe(true);
    expect(titleWrapper).toHaveLength(1);
    expect(titleWrapper.text()).toBe('test title');
    expect(textWrapper.exists()).toBe(true);
    expect(textWrapper).toHaveLength(1);
    expect(textWrapper.text()).toBe('test children node');
  })
})
