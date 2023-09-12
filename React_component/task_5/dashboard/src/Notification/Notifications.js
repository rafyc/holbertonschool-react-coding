import React, { Component } from "react";
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { render } from "enzyme";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.listNotifications.length === this.props.listNotifications.length) {
  //     return false;
  //   }
  //   return true;
  // }
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }


  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className='container'>
        <div className='menuItem'>
          Your notifications
        </div>
        {displayDrawer && (
          <div className='Notifications'>
            <button
              style={{
                position: "absolute",
                right: "1rem",
                top: ".5rem",
                fontSize: "1rem",
                border: "none",
                background: "none",
                cursor: "pointer"
              }}
              aria-label="Close"
              onClick={() => {
                console.log("Close button has been clicked\n");
              }}

            >x</button>
            <ul>
              {listNotifications.length == 0 ? <p>No new notification for now</p> : <p>Here is the list of notifications</p>}
              {listNotifications.map((ele) => (
                <NotificationItem key={ele.id} type={ele.type} value={ele.value} html={ele.html} markAsRead={this.markAsRead} />
              ))}
            </ul>
          </div >
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
