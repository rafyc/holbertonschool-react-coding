import App from "./App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notification/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

const testComponentForNotifications = (componentName) => {
  it(`should render the ${componentName} component`, () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(componentName)).toHaveLength(1)
  });
};

describe('CourseList component', () => {
  it('by default CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    const courseWrapper = wrapper.find(CourseList)
    expect(courseWrapper.exists()).toBe(false);
  })
})

describe('when isLoggedIn is true', () => {
  it('should verify that the Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    const loginWrapper = wrapper.find(Login)
    expect(loginWrapper.exists()).toBe(false);
  })
})

describe('when isLoggedIn is true', () => {
  it('verify that the CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    const couseListWrapper = wrapper.find(CourseList)
    expect(couseListWrapper.exists()).toBe(true);
  })
})


describe('when ctrl + h are pressed ', () => {
  it('logOut func passed as a prop is called + alert function with right str', () => {
    const logOutMock = jest.fn();
    const alert = jest.spyOn(global, 'alert');
    shallow(<App logOut={logOutMock} />);
    expect(alert);
    expect(logOutMock);
    jest.restoreAllMocks();
  })
})

testComponentForNotifications(Header);
testComponentForNotifications(Footer);
testComponentForNotifications(Login);
testComponentForNotifications(Notifications);
