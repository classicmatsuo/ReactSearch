import React from 'react';
import PropTypes from 'prop-types';
class CourseRow extends React.Component {
  render() {
    const course = this.props.course;
    const name = course.CourseName;
    const courseId = course.CourseID;
    const courseDays = course.Days;
    const courseGroup = course.Group;
    const courseGroupings = course.Groupings;
    const courseLocation = course.Location;
    const courseProgram = course.Program;
    const courseTeachers = course.Teachers;
    // const courseTime = course.TimeOfDay;
    const courseType = course.Type;
    // const courseClassCount = course.ClassCount;
    // const courseWeeks = course.Weeks;
    const courseDescription = course.Description;
    const courseDayTimeDisplay = course.DayTimeDisplay;

    const listCourseSmall = {
      fontSize: '14px'
    };

    let timeShow;
    // if (courseDayTimeDisplay !== ""){
    if (!Array.isArray(courseDayTimeDisplay) || !courseDayTimeDisplay.length){
      timeShow = <ul><li style={listCourseSmall}>{courseDays ? courseDays : null}</li><li style={listCourseSmall}>{courseLocation ? courseLocation : null}</li></ul>;
    } else {
      // timeShow = <span>{courseDays} {courseTime ? ' - ' + courseTime : null} {courseLocation ? ' - ' + courseLocation : null}</span>;
      timeShow = <ul>{courseDayTimeDisplay.map((time, i) => <li style={listCourseSmall} key={i} value={time}>{time}</li>)}</ul>;
    }
//{courseTime ? ' - ' + courseTime : null}

    return (
      <div className="greyBorder row content">
        <div className="content">
          <div>
            <h4 className="courseTitle"><a className="DEFAULT" href={"/classes/detail/?courseid=" + courseId} target="_blank" rel="noopener noreferrer"><span dangerouslySetInnerHTML={{__html:name}}></span></a>
            </h4>
            <div className="flagContainer">
              <span className="courseFlag head DEFAULT">{courseProgram}</span>
            </div>
            {courseTeachers ? <div dangerouslySetInnerHTML={{__html:courseTeachers}}></div>  : null}
            <p>
              {courseType}{courseGroup ? ' - ' + courseGroup : null} {courseGroupings ? ' - ' : null}{courseGroupings ? <span dangerouslySetInnerHTML={{__html:courseGroupings}}></span> : null}
            </p>
              {timeShow}
              {courseDescription ? <p><span dangerouslySetInnerHTML={{__html:courseDescription}}></span></p> : null}
            <div className="last action">
              <a className="btn btn-lrg courselink action" href={"/classes/detail/?courseid=" + courseId} target="_blank" rel="noopener noreferrer">Schedules &amp; Registration</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CourseRow.propTypes = {
  course: PropTypes.object
};

export default CourseRow;
