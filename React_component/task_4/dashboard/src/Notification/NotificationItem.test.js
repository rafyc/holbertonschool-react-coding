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
    expect(wrapper.html()).toEqual(`<li data-notification-type="default">test</li>`);
  })

  it('renders html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const liItem = wrapper.find('li');
    expect(liItem).toHaveLength(1);
    expect(liItem.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
  });

  it('when click on the component, the spy is called with the right ID argument', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem markAsRead={markAsReadSpy} id={4} />)
    wrapper.simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(4);
    expect(markAsReadSpy).toHaveBeenCalled
    jest.restoreAllMocks();
  })
});
