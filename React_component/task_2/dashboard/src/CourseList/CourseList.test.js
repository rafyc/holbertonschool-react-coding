import CourseList from "./CourseList";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('CourseList', () => {
  let wrapper;

  beforeEach(() => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ]
    wrapper = shallow(<CourseList listCourses={listCourses} />);
  });

  it('it renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  })

  it('it renders 5 rows', () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  })
  describe('When listCourse is empty', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders CourseList component without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders only headers and text "No course available yet"', () => {
      const row = wrapper.find('CourseListRow');
      expect(row).toHaveLength(3);
      expect(row.at(2).prop('textFirstCell')).toEqual('No course available yet');
    });
  });
})
