import NotificationItem from './NotificationItem';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { getLatestNotification } from '../Utils/utils';

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

  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it(' it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.html()).toEqual(`<li data-notification-type="default">test</li>`)
  })

  it('renders NotificationItem components', () => {
    const listItems = wrapper.find(NotificationItem);
    expect(listItems).toHaveLength(3);
    expect(listItems.at(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});
