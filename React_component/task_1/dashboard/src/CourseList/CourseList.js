import React from "react";
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";
import CourseShape from './CourseShape';
import './CourseList.css'

const CourseList = ({ listCourses }) => {
  return (
    <table id="CouseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        <tbody>
          {listCourses.length == 0 && <CourseListRow textFirstCell='No course available yet' />}
          {listCourses.map((ele) => <CourseListRow key={ele.id} textFirstCell={ele.name} textSecondCell={ele.credit} isHeader={false} />)}
        </tbody>
      </thead>
    </table>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList
