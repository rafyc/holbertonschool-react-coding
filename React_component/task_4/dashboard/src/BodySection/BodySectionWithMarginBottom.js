import React from 'react';
import BodySction from './BodySection';
import { PropTypes } from "prop-types";


const BodySectionWithMarginBottom = (props) => {

  return (
    <div className='bodySectionWithMargin'>
      <BodySction {...props} />
    </div>
  )
}

BodySectionWithMarginBottom.propTypes = {
  children: PropTypes.node,
}
export default BodySectionWithMarginBottom;
