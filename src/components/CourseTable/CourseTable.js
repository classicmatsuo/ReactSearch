import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CourseRow from '../CourseRow/CourseRow';
import './coursetable.css';

class CourseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: [],
      isLoading: true,
      coursesNumberAmount: 0,
      dayOptionList: [
        { day: "Monday"},
        { day: "Tuesday"},
        { day: "Wednesday"},
        { day: "Thursday"},
        { day: "Friday"},
        { day: "Saturday"},
        { day: "Sunday"}
      ],
      sorterDay: {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
      },
      // timeOptionList: [
      //   { time: "Morning"},
      //   { time: "Afternoon"},
      //   { time: "Evening"}
      // ],
      // sorterTime: {
      //   Morning: 1,
      //   Afternoon: 2,
      //   Evening: 3
      // },
      // 2.0 below
      timeOptionList: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
      ],
      sorterTime: {
        "Morning": 1,
        "Afternoon": 2,
        "Early Evening": 3,
        "Evening": 4
      },
      locationOptionList: [
        { location: "Lincoln Square - Lincoln Ave Campus"},
        { location: "Lincoln Park - Armitage Ave"},
        { location: "South Loop - Michigan Ave"},
        { location: "Evanston"},
        { location: "Glencoe"},
        { location: "Park Ridge"},
        { location: "Lake Forest"},
        { location: "Western Springs"},
      ],
      sorterLocation: {
        "Lincoln Square - Lincoln Ave Campus": 1,
        "Lincoln Park - Armitage Ave": 2,
        "South Loop - Michigan Ave": 3,
        "Evanston": 4,
        "Glencoe": 5,
        "Park Ridge": 6,
        "Lake Forest": 7,
        "Western Springs": 8
      }

    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterTeacherTextChange = this.handleFilterTeacherTextChange.bind(this);
    this.handleFilterDobTextChange = this.handleFilterDobTextChange.bind(this);
    this.handleProgramChange = this.handleProgramChange.bind(this);
    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.handleGroupingsChange = this.handleGroupingsChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  componentDidMount() {
    const th = this;
    this.serverRequest =
      axios.get(this.props.catalog)
        .then(function(result) {
          th.setState({
            catalog: result.data.catalog,
            isLoading: false
          });
        });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleFilterTeacherTextChange(e) {
    this.props.onFilterTeacherTextChange(e.target.value);
  }

  handleFilterDobTextChange(e) {
    this.props.onFilterDobTextChange(e.target.value);
  }

  handleProgramChange(e){
    this.props.onProgramChange(e.target.value);
  }

  handleGroupChange(e){
    this.props.onGroupChange(e.target.value);
  }

  handleGroupingsChange(e){
    this.props.onGroupingsChange(e.target.value);
  }

  handleLocationChange(e){
    this.props.onLocationChange(e.target.value);
  }

  handleDayChange(e){
    this.props.onDayChange(e.target.value);
  }

  handleTimeChange(e){
    this.props.onTimeChange(e.target.value);
  }

  render() {
    const filterText = this.props.filterText;
    const filterTeacherText = this.props.filterTeacherText;
    const filterDobText = this.props.filterDobText;
    const programSelect = this.props.programSelect;
    const groupSelect = this.props.groupSelect;
    const groupingsSelect = this.props.groupingsSelect;
    const locationSelect = this.props.locationSelect;
    const daySelect = this.props.daySelect;
    const timeSelect = this.props.timeSelect;

    const programSet = this.props.programSet;
    const groupSet = this.props.groupSet;
    const groupingsSet = this.props.groupingsSet;
    // const locationSet = this.props.locationSet;

    const dayOptionList = this.state.dayOptionList;
    const dayOptionSet = this.props.dayOptionSet;
    const sorterDay = this.state.sorterDay;

    const timeOptionList = this.state.timeOptionList;
    const timeOptionSet = this.props.timeOptionSet;
    const sorterTime = this.state.sorterTime;

    const locationOptionList = this.state.locationOptionList;
    const locationOptionSet = this.props.locationOptionSet;
    const sorterLocation = this.state.sorterLocation;

    const errorFlag = this.props.errorFlag;



    const rows = [];

    function sorting(json_object, key_to_sort_by) {
      function sortByKey(a, b) {
          let x = a[key_to_sort_by];
          let y = b[key_to_sort_by];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }
      json_object.sort(sortByKey);
    }
    sorting(this.state.catalog, 'CourseNameSort');

    this.state.catalog.forEach((course) => {

      const arrayLength = course.GroupingsArray.length;
      function addGroupings(){
        for (let i = 0; i < arrayLength; i++) {
          if (course.GroupingsArray[i] !== ''){
            groupingsSet.add(course.GroupingsArray[i]);
          }
        }
      }

      // const dayOptionLength = dayOptionList.length;
      // function addDays(){
      //   for (let i = 0; i < dayOptionLength; i++) {
      //     if (course.Days.indexOf(dayOptionList[i].day) !== -1){
      //       dayOptionSet.add(dayOptionList[i].day);
      //       // console.log(dayOptionList[i]);
      //     }
      //   }
      // }

      const dayOptionLength = dayOptionList.length;
      function addDays(){
        for (let i = 0; i < dayOptionLength; i++) {
          // if (dayOptionList[i].day.search(course.Days)){
          if (course.Days.indexOf(dayOptionList[i].day) !== -1){
            dayOptionSet.add(dayOptionList[i]);
            // console.log(dayOptionList[i]);
            // console.log(dayOptionSet);
          }
        }
      }

      const timeOptionLength = timeOptionList.length;
      function addTimes(){
        for (let i = 0; i < timeOptionLength; i++) {
          // if course.TimeOfDay string matches any of the of times in the timeOptionList, add it to the timeOptionSet
          course.TimeOfDay.forEach(function(timeHour) {
              if (timeOptionList.includes(timeHour)){
                // timeOptionSet.add(timeOptionList[i].time);
                // console.log(timeOptionList[i]);
                // console.log(timeHour);
                if ( timeHour < 12) {
                  timeOptionSet.add("Morning");
                } else if ( timeHour > 12 && timeHour <= 13) {
                  timeOptionSet.add("Morning").add("Afternoon");
                } else if ( timeHour > 13 && timeHour <= 17) {
                  timeOptionSet.add("Afternoon");
                } else if ( timeHour > 17 && timeHour <= 18) {
                  timeOptionSet.add("Afternoon").add("Evening");
                } else if ( timeHour > 18 && timeHour < 19) {
                  timeOptionSet.add("Early Evening");
                } else if ( timeHour === 19 ) {
                  timeOptionSet.add("Early Evening").add("Evening");
                } else if ( timeHour > 19) {
                  timeOptionSet.add("Evening");
                }
              }
          });

        }
      }

      const locationOptionLength = locationOptionList.length;
      function addLocations(){
        for (let i = 0; i < locationOptionLength; i++) {
          if (course.Location.indexOf(locationOptionList[i].location) !== -1){
            locationOptionSet.add(locationOptionList[i].location);
          }
        }
      }

      // if then return
      if (course.CourseName.toUpperCase().indexOf(filterText.toUpperCase()) === -1) {
        return;
      }

      if (course.Teachers.toUpperCase().indexOf(filterTeacherText.toUpperCase()) === -1) {
        return;
      }

      if (filterDobText && filterDobText.length > 9){
        let isoDate = Date.parse(filterDobText) / 1000;
        if ((isoDate > course.DOBmax) || (isoDate < course.DOBmin)){
          return;
        }
      }

      if (groupingsSelect && course.GroupingsArray.indexOf(groupingsSelect) === -1) {
        return;
      }

      if (programSelect && course.Program !== programSelect) {
        return;
      }

      if (groupSelect && course.Group !== groupSelect) {
        return;
      }

      if (locationSelect && course.Location.indexOf(locationSelect) === -1) {
        return;
      }

      if (daySelect && course.Days.indexOf(daySelect) === -1) {
        return;
      }

      // let contains = function(needle) {
      //     // Per spec, the way to identify NaN is that it is not equal to itself
      //     var findNaN = needle !== needle;
      //     var indexOf;
      //
      //     if(!findNaN && typeof Array.prototype.indexOf === 'function') {
      //         indexOf = Array.prototype.indexOf;
      //     } else {
      //         indexOf = function(needle) {
      //             var i = -1, index = -1;
      //
      //             for(i = 0; i < this.length; i++) {
      //                 var item = this[i];
      //
      //                 if((findNaN && item !== item) || item === needle) {
      //                     index = i;
      //                     break;
      //                 }
      //             }
      //
      //             return index;
      //         };
      //     }
      //
      //     return indexOf.call(this, needle) > -1;
      // };
      //
      // course.TimeOfDay.forEach(function(needle) {
      //   if (contains.call(timeSelect, needle) === true){
      //     return;
      //   };
      // });

      let timeOptionSetEach = new Set();
      let daystampnumber = 0;

      function filterTime() {

        course.TimeOfDay.forEach(function(timeHour) {
          if ( timeHour < 12) {
            timeOptionSetEach.add("Morning");
          } else if ( timeHour > 12 && timeHour <= 13) {
            timeOptionSetEach.add("Morning").add("Afternoon");
          } else if ( timeHour > 13 && timeHour <= 17) {
            timeOptionSetEach.add("Afternoon");
          } else if ( timeHour > 17 && timeHour <= 18) {
            timeOptionSetEach.add("Afternoon").add("Evening");
          } else if ( timeHour > 18 && timeHour < 19) {
            timeOptionSetEach.add("Early Evening");
          } else if ( timeHour === 19 ) {
            timeOptionSetEach.add("Early Evening").add("Evening");
          } else if ( timeHour > 19) {
            timeOptionSetEach.add("Evening");
          }
          timeOptionSetEach.forEach(function(daystamp){

            if (timeSelect && timeSelect.includes(daystamp)){
              daystampnumber++;
              // console.log(daystamp);
            }

          })
        });
        // console.log(timeOptionSetEach);

      }
      filterTime();

      if (timeSelect && daystampnumber === 0) {
        // console.log(daystampnumber);
        return;
      }

      // if (timeSelect && timeSelect.indexOf(course.TimeOfDay) === -1) {
      //   return;
      // }

      // if (timeSelect && course.TimeOfDay.indexOf(timeSelect) === -1) {
      //   return;
      // }

      // skip over if it doesnt have a coursename
      if (course.CourseName === ''){
        return;
      }

      // adding to the new sets performed below
      // only adds values to dropdown that are not blank
      if (course.Group !== ''){
        groupSet.add(course.Group);
      }

      if (course.Program !== ''){
        programSet.add(course.Program);
      }

      addGroupings();
      addDays();
      addTimes();
      addLocations();



      // if (course.Location !== ''){
      //   locationSet.add(course.Location);
      // }

      rows.push(
        <CourseRow
          course={course}
          key={course.CourseID}
        />
      );

    });


    const formField = {
      display: 'inline-block',
      width: '48%',
      margin: '1%',
      verticalAlign: 'top'
    };
    // const textSearch = {
    //   display: "inline-block",
    //   width: "48%",
    //   marginRight: "2%"
    // };
    const fullWidth = {
      width: "100%"
    };

    let programArr = Array.from(programSet);
    let newProgramArr = programArr.sort();

    let groupArr = Array.from(groupSet);
    let newGroupArr = groupArr.sort();

    let groupingsArr = Array.from(groupingsSet);
    let newGroupingsArr = groupingsArr.sort();

    let locationsArr = Array.from(locationOptionSet);
    let newLocationsArr = locationsArr.sort(function(a, b) {
      return sorterLocation[a] - sorterLocation[b];
    });

    let dayOptionArr = Array.from(dayOptionSet);
    let newDayOptionArr = dayOptionArr.sort(function(a, b) {
      return sorterDay[a.day] - sorterDay[b.day];
    });
    // console.log("newdayoptionarr" + newDayOptionArr);
   

    let dayTimeArr = Array.from(timeOptionSet);
    let newTimeArr = dayTimeArr.sort(function(a, b) {
      return sorterTime[a] - sorterTime[b];
    });
    // let newTimeArr = dayTimeArr.sort(function(a, b){return a-b});

    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <img alt="loading..." src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
        </div>
      );
    }

    const coursesNumberAmount = rows.length;

    let dob;
    let today = new Date();
    if (groupSelect === "Child") {
      dob = (<div>
        <label htmlFor="dobField">Date of Birth</label>
        <input
          id="dobField"
          className="form-control"
          type="date"
          placeholder="Search By Date of Birth..."
          value={this.props.filterDobText}
          onChange={this.handleFilterDobTextChange}
          max={today.toISOString().split('T')[0]}
        />
      </div>);
    }

    function validate(errorFlag) {
      // true means invalid, so our conditions got reversed
      const programErrorArray = [1, 2, 6, 10, 11, 12, 18, 19, 20, 21, 26, 27, 28, 29, 30, 31];
      const groupingsErrorArray = [2, 3, 4, 6, 9, 10, 11, 13, 17, 18, 19, 20, 22, 23, 25, 28, 33, 34, 38, 39, 43, 44, 45, 47];
      const dayErrorArray = [4, 5, 6, 8, 9, 10, 16, 17, 18, 19, 23, 24, 27, 29, 30, 31, 34, 35, 37, 38, 42, 43, 44, 46, 48, 50, 53, 54];
      const locationErrorArray = [7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 25, 26, 27, 28, 29, 36, 37, 38, 39, 41, 42, 43, 47, 49, 50, 52, 53, 55, 57];
      const timeErrorArray = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 40, 41, 42, 43, 44, 45, 46, 47, 51, 52, 53, 54, 56, 57, 58];

      return {
        programSelect: (programErrorArray.indexOf(errorFlag) > -1) && (programSelect === "") && (programSet.size > 0),
        groupingsSelect: (groupingsErrorArray.indexOf(errorFlag) > -1) && (groupingsSelect === "") && (groupingsSet.size > 0),
        daySelect: (dayErrorArray.indexOf(errorFlag) > -1) && (daySelect === "") && (dayOptionSet < 1),
        locationSelect: (locationErrorArray.indexOf(errorFlag) > -1) && (locationSelect === "") && (locationOptionSet.size > 0),
        timeSelect: (timeErrorArray.indexOf(errorFlag) > -1) && (timeSelect === "") && (timeOptionSet.size > 0)
      };
    }
    const errors = validate(errorFlag);


    return (
      <div>
        <form>
          <div style={formField}>
            <label htmlFor="Age">Courses for</label>
            <select id="Age" className="form-control" onChange={this.handleGroupChange} value={this.props.groupSelect} >
              <option value="">All</option>
                {
                  newGroupArr.map((course, i) =>
                    <option key={i} value={course}>{course}</option>
                  )
                }
            </select>

            {dob}

            <label htmlFor="Program">Instrument or Program</label>
            <select id="Program" className={`form-control ${errors.programSelect ? "error" : ""}`} onChange={this.handleProgramChange} value={this.props.programSelect} >
              <option value="">All</option>
                {
                  newProgramArr.map((course, i) =>
                    <option key={i} value={course}>{course}</option>
                  )
                }
            </select>
            {/* {errors.programSelect &&
              <span className="errorFlag">
                Please reselect
              </span>
            } */}

            <label htmlFor="Groupings">Groupings</label>
            <select id="Groupings" className={`form-control ${errors.groupingsSelect ? "error" : ""}`} onChange={this.handleGroupingsChange} value={this.props.groupingsSelect} >
              <option value="">All</option>
                {
                  newGroupingsArr.map((course, i) =>
                    <option key={i} value={course}>{course}</option>
                  )
                }
            </select>
            {/* {errors.groupingsSelect &&
              <span className="errorFlag">
                Please reselect
              </span>
            } */}

            <label htmlFor="weekDay">Day of Week</label>
            <select id="weekDay" className={`form-control ${errors.daySelect ? "error" : ""}`} onChange={this.handleDayChange} value={this.props.daySelect}>
              <option value="">All</option>
              {
                newDayOptionArr.map((course, i) =>
                  <option key={i} value={course.day}>{course.day}</option>
                )
              }
            </select>
            {/* {errors.daySelect &&
              <span className="errorFlag">
                Please reselect
              </span>
            } */}
          </div>
          <div style={formField}>
            <label htmlFor="Location">Location</label>
            <select id="Location" className={`form-control ${errors.locationSelect ? "error" : ""}`} onChange={this.handleLocationChange} value={this.props.locationSelect}>
              <option value="">All</option>
              {
                newLocationsArr.map((course, i) =>
                  <option key={i} value={course}>{course}</option>
                )
              }
            </select>
            {/* {errors.locationSelect &&
              <span className="errorFlag">
                Please reselect
              </span>
            } */}
            <div>
              <label htmlFor="searchField">Course Name</label>
              <input
                id="searchField"
                className="form-control"
                type="text"
                placeholder="Search By Course Name..."
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}
                style={fullWidth}
              />
            </div>
            <div>
              <label htmlFor="Instructor">Teacher</label>
              <input
                id="Instructor"
                className="form-control"
                type="text"
                placeholder="Search By Teacher Name..."
                value={this.props.filterTeacherText}
                onChange={this.handleFilterTeacherTextChange}
                style={fullWidth}
              />
            </div>
            <label htmlFor="timeDay">Time of Day</label>
            <select id="timeDay" className={`form-control ${errors.timeSelect ? "error" : ""}`} onChange={this.handleTimeChange} value={this.props.timeSelect}>
              <option value="">Anytime</option>
              {
                newTimeArr.map((course, i) =>
                  <option key={i} value={course}>{course}</option>
                )
              }
              {/* <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option> */}
            </select>
            {/* {errors.timeSelect &&
              <span className="errorFlag">
                Please reselect
              </span>
            } */}
          </div>
        </form>
        <div style={{ margin: 20 }}>
          <div>Found: {coursesNumberAmount}</div>
          <div>
            Search Params: {filterText} {filterTeacherText} {filterDobText} {programSelect} {groupSelect} {groupingsSelect} {locationSelect} {daySelect} {timeSelect} 
          </div>
          <div className="secondary-item">
            {rows}
          </div>
          
        </div>
      </div>
    );
  } 
}

CourseTable.propTypes = {
  catalog: PropTypes.string,
  programSet: PropTypes.object,
  groupSet: PropTypes.object,
  groupingsSet: PropTypes.object,
  // locationSet: .PropTypes.object,
  dayOptionSet: PropTypes.object,
  timeOptionSet: PropTypes.object,
  locationOptionSet: PropTypes.object,

  onFilterTextChange: PropTypes.func,
  onFilterTeacherTextChange: PropTypes.func,
  onFilterDobTextChange: PropTypes.func,
  onProgramChange: PropTypes.func,
  onGroupChange: PropTypes.func,
  onGroupingsChange: PropTypes.func,
  onLocationChange: PropTypes.func,
  onDayChange: PropTypes.func,
  onTimeChange: PropTypes.func,

  filterText: PropTypes.string,
  filterTeacherText: PropTypes.string,
  filterDobText: PropTypes.string,
  programSelect: PropTypes.string,
  groupSelect: PropTypes.string,
  groupingsSelect: PropTypes.string,
  locationSelect: PropTypes.string,
  daySelect: PropTypes.string,
  timeSelect: PropTypes.string,
  coursesNumberAmount: PropTypes.string,

  errorFlag: PropTypes.number
};

export default CourseTable;