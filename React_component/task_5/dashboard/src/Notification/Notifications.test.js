import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';
import { getLatestNotification } from "../Utils/utils";

describe('Notifications component tests', () => {
  let wrapper;
  beforeEach(() => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ]
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  });


  it('should render NotificationItem', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should render right component x3', () => {
    const childWrapper = wrapper.find(NotificationItem);
    expect(childWrapper).toHaveLength(3)
  })

  it('should render li', () => {
    const childWrapper = wrapper.find(NotificationItem);
    expect(childWrapper.first().html()).toEqual('<li data-notification-type="default">New course available</li>')
  })

  it('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={true || false} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  })

  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  })

  it('should not rerender when props are updated with the same list', () => {
    const initialRender = wrapper.instance().render; // Store the initial render function
    wrapper.setProps({ displayDrawer: true }); // Update props with the same list
    const rerender = wrapper.instance().render; // Get the render function after prop update

    // Check if the render function remains the same (no rerender)
    expect(rerender).toBe(initialRender);
  });

  it('does rerender if there is not the same listNotificationItem', () => {
    const listNotifications1 = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    const listNotifications2 = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications1} />);
    const shouldUpdate = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotifications2 });

    expect(shouldUpdate).toHaveBeenCalled();
    expect(shouldUpdate).toHaveLastReturnedWith(true);
    jest.restoreAllMocks();
  });
});
