import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


const Notifications = ({ displayDrawer, listNotifications }) => {
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
              <NotificationItem key={ele.id} type={ele.type} value={ele.value} html={ele.html} />
            ))}
          </ul>
        </div >
      )}
    </div>
  );
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
