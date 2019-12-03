import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'



export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:""}
  }
  componentDidMount() {
    // start listening for firebase updates
    
        var time = new Date().getDate()

      this.setState({
        date: time
      });

  }

  render(){
    return (
      <DatePicker
        style={{width: 400}}
        date={this.state.date}
        mode="datetime"
        placeholder="select date"
        format = "MMMM Do YYYY, h:mm:ss a"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { this.props.onDateChange && this.props.onDateChange(date);this.setState({date: date})}}
      />
    )
  }
}