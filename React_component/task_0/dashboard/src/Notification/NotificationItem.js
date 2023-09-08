import React from "react";
import PropTypes from 'prop-types';
const NotificationItem = ({ type, value, html }) => {
  const liProps = {
    'data-notification-type': type,
  };
  return (
    html ? (
      <li {...liProps} dangerouslySetInnerHTML={html}></li>
    ) : (
      <li {...liProps}>{value}</li>
    )
  );
};


NotificationItem.prototype = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string,
}

NotificationItem.defaultProps = {
  type: 'default',
}

export default NotificationItem;
