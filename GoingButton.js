import React, { Component } from 'react';
import{Alert} from 'react-native';
import  firebase from './firebase';

const rootRef = firebase.database().ref();
const eventRef = rootRef.child('events');
const indEvent = eventRef.child();

class GoingButton extends Component {
    
  constructor(props) {
    super(props);
    this.Going = this.Going.bind(this);
  }

  Going(event) {

    var user =firebase.auth().currentUser;

    if (!(indEvent.child(event).child('usersattending').contains(user))){
      indEvent.child(event).child('usersattending').add(user);
    }
  }

  render() {
    
  return (
    <button onClick={this.Going}>
    Click me!
  </button>
  );
}
}
export default GoingButton;