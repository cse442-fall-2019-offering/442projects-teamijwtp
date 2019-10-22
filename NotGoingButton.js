import React, { Component } from 'react';
import{Alert} from 'react-native';

const rootRef =firebase.database().ref();
const eventRef = rootRef.child('events');
const indEvent = eventRef.child();

class NotGoingButton extends Component {
  
  constructor(props) {
    super(props);
    this.notGoing = this.notGoing .bind(this);
  }

  notGoing(event) {
    var user =firebase.auth().currentUser;
    if ((indEvent.child(event).child('usersattending').contains(user))){
      indEvent.child(event).child('usersattending').remove(user);
    }
  }  
  render() {
  return (
    <button onClick={this.notGoing }>
    Click me!
  </button>
  );
}
}
export default NotGoingButton;