import React, { Component } from 'react';
import CourseTable from './CourseTable/CourseTable';
// import {programFilter} from './actions';
import PropTypes from 'prop-types';


class FilterableCourseTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterTeacherText: '',
      filterDobText: '',
      programSelect: '',
      groupSelect: '',
      groupingsSelect: '',
      locationSelect: '',
      daySelect: '',
      timeSelect: '',
      programSet: new Set(),
      groupSet: new Set(),
      groupingsSet: new Set(),
      locationOptionSet: new Set(),
      dayOptionSet: new Set(),
      timeOptionSet: new Set(),
      errorFlag: 0
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

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
      timeSelect: '',
      timeOptionSet: new Set()
    });
    if (this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 59
      });
    }
  }

  handleFilterTeacherTextChange(filterTeacherText) {
    this.setState({
      filterTeacherText: filterTeacherText,
      timeSelect: '',
      timeOptionSet: new Set()
    });
    if (this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 60
      });
    }
  }

  handleFilterDobTextChange(filterDobText) {
    this.setState({
      filterDobText: filterDobText,
      programSelect: '',
      groupingsSelect: '',
      locationSelect: '',
      daySelect: '',
      timeSelect: '',
      programSet: new Set(),
      groupingsSet: new Set(),
      locationOptionSet: new Set(),
      dayOptionSet: new Set(),
      timeOptionSet: new Set()
    });
    // 2 to the 5th power = 32 options, 1 of which is all blank fields. so we have 31 options
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect === "") {
      this.setState({
        errorFlag: 1
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect === "") {
      this.setState({
        errorFlag: 2
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 3
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 4
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 5
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 6
      });
    }

    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 7
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 8
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 9
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 10
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 11
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 12
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 13
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 14
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 15
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 16
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 17
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 18
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 19
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 20
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 21
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 22
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 23
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 24
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 25
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 26
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 27
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 28
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 29
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === "") {
      this.setState({
        errorFlag: 30
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== "") {
      this.setState({
        errorFlag: 31
      });
    }
  }

  handleProgramChange(programSelect) {
    this.setState({
      programSelect: programSelect,
      locationSelect: '',
      groupingsSelect: '',
      daySelect: '',
      timeSelect: '',
      groupingsSet: new Set(),
      locationOptionSet: new Set(),
      dayOptionSet: new Set(),
      timeOptionSet: new Set()
    });
    // 2 to the 4th power = 16 options, 1 of which is all blank fields. so we have 15 options
    if (this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 33
      });
    }
    if (this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 34
      });
    }
    if (this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 35
      });
    }
    if (this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 36
      });
    }
    if (this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 37
      });
    }
    if (this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 38
      });
    }
    if (this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 39
      });
    }
    if (this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 40
      });
    }
    if (this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 41
      });
    }
    if (this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 42
      });
    }
    if (this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 43
      });
    }
    if (this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 44
      });
    }
    if (this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 45
      });
    }
    if (this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 46
      });
    }
    if (this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 47
      });
    }
  }

  handleGroupChange(groupSelect) {
    this.setState({
      groupSelect: groupSelect,
      programSelect: '',
      groupingsSelect: '',
      locationSelect: '',
      filterDobText: '',
      daySelect: '',
      timeSelect: '',
      programSet: new Set(),
      groupingsSet: new Set(),
      locationOptionSet: new Set(),
      dayOptionSet: new Set(),
      timeOptionSet: new Set()
    });
    // 2 to the 5th power = 32 options, 1 of which is all blank fields. so we have 31 options
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect === "") {
      this.setState({
        errorFlag: 1
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect === "") {
      this.setState({
        errorFlag: 2
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 3
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 4
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 5
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 6
      });
    }

    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 7
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 8
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 9
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 10
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 11
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 12
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 13
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 14
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 15
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 16
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 17
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 18
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 19
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 20
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 21
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 22
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 23
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 24
      });
    }
    if (this.state.programSelect === "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 25
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 26
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 27
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect !== "" && this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 28
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 29
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === "") {
      this.setState({
        errorFlag: 30
      });
    }
    if (this.state.programSelect !== "" && this.state.groupingsSelect === "" && this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== "") {
      this.setState({
        errorFlag: 31
      });
    }
  }

  handleGroupingsChange(groupingsSelect) {
    this.setState({
      groupingsSelect: groupingsSelect,
      locationSelect: '',
      daySelect: '',
      timeSelect: '',
      locationOptionSet: new Set(),
      dayOptionSet: new Set(),
      timeOptionSet: new Set()
    });
    // 2 to the 3rd power = 8 options, 1 of which is all blank fields. so we have 7 options
    if (this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 48
      });
    }
    if (this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 49
      });
    }
    if (this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 50
      });
    }
    if (this.state.daySelect === "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 51
      });
    }
    if (this.state.daySelect === "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 52
      });
    }
    if (this.state.daySelect !== "" && this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 53
      });
    }
    if (this.state.daySelect !== "" && this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 54
      });
    }
  }

  handleLocationChange(locationSelect) {
    this.setState({
      locationSelect: locationSelect,
      timeSelect: '',
      timeOptionSet: new Set()
    });
    if (this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 58
      });
    }
  }

  handleDayChange(daySelect) {
    this.setState({
      daySelect: daySelect,
      locationSelect: '',
      timeSelect: '',
      locationOptionSet: new Set(),
      timeOptionSet: new Set()
    });
    // 2 to the 2nd power = 4 options, 1 of which is all blank fields. so we have 3 options
    if (this.state.locationSelect !== ""  && this.state.timeSelect === ""){
      this.setState({
        errorFlag: 55
      });
    }
    if (this.state.locationSelect === "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 56
      });
    }
    if (this.state.locationSelect !== "" && this.state.timeSelect !== ""){
      this.setState({
        errorFlag: 57
      });
    }
  }

  handleTimeChange(timeSelect) {
    this.setState({
      timeSelect: timeSelect
    });
    // if ( timeSelect === "Morning") {
    //   this.setState({
    //     timeSelect:  "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13"
    //   });
    // } else if ( timeSelect === "Afternoon") {
    //   this.setState({
    //     timeSelect: "12, 13, 14, 15, 16, 17, 18"
    //   });
    // } else if ( timeSelect === "Evening") {
    //   this.setState({
    //     timeSelect: "17, 18, 19"
    //   });
    // } else if ( timeSelect === "Late Evening") {
    //   this.setState({
    //     timeSelect: "19, 20, 21, 22, 23, 24"
    //   });
    // }
  }

  render() {

    return (
      <div>
        <CourseTable
          catalog={this.props.catalog}
          programSet={this.state.programSet}
          groupSet={this.state.groupSet}
          groupingsSet={this.state.groupingsSet}
          locationOptionSet={this.state.locationOptionSet}
          dayOptionSet={this.state.dayOptionSet}
          timeOptionSet={this.state.timeOptionSet}

          onFilterTextChange={this.handleFilterTextChange}
          onFilterTeacherTextChange={this.handleFilterTeacherTextChange}
          onFilterDobTextChange={this.handleFilterDobTextChange}
          onProgramChange={this.handleProgramChange}
          onGroupChange={this.handleGroupChange}
          onGroupingsChange={this.handleGroupingsChange}
          onLocationChange={this.handleLocationChange}
          onDayChange={this.handleDayChange}
          onTimeChange={this.handleTimeChange}

          filterText={this.state.filterText}
          filterTeacherText={this.state.filterTeacherText}
          filterDobText={this.state.filterDobText}
          programSelect={this.state.programSelect}
          groupSelect={this.state.groupSelect}
          groupingsSelect={this.state.groupingsSelect}
          locationSelect={this.state.locationSelect}
          daySelect={this.state.daySelect}
          timeSelect={this.state.timeSelect}
          coursesNumberAmount={this.state.coursesNumberAmount}

          errorFlag={this.state.errorFlag}
        />
      </div>
    );
  }
}

FilterableCourseTable.propTypes = {
  catalog: PropTypes.string
};

export default FilterableCourseTable;
