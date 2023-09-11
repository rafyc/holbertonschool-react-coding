import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe('When isHeader is true', () => {
  it('renders one cell with colspan(2) when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'Hello'} />);
    expect(wrapper.find('th')).toHaveLength(1);
  })
  it('renders 2 cell when textSecondCell exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'Hello'} textSecondCell={'Holberton'} />);
    expect(wrapper.find('th')).toHaveLength(2);
  })
})

describe('When isHeader is not true', () => {
  it('renders one cell with colspan(2) when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell={'Hello'} textSecondCell={'Holberton'} />);
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('td')).toHaveLength(2);
  })

})
