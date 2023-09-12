import React from "react";
import { useMemo } from 'react'
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  const liProps = useMemo(() => {
    const props = { 'data-notification-type': type };
    if (html) props.dangerouslySetInnerHTML = html;
    return props;
  }, [type, html]);


  return (
    <li {...liProps} onClick={() => { (markAsRead(id)) }}>{value}</li>
  )
}

NotificationItem.proptype = {
  id: PropTypes.number,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => { },
}

export default NotificationItem;
