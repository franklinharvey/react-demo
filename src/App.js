import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const config =
    {
      apiKey: "AIzaSyAxb_rqtxdIa19IzpYSai9oU9mkPn8ABFQ",
      authDomain: "forum-25c0b.firebaseapp.com",
      databaseURL: "https://forum-25c0b.firebaseio.com",
      projectId: "forum-25c0b",
      storageBucket: "forum-25c0b.appspot.com",
      messagingSenderId: "715344969805"
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (
      <ThreadDisplay database={this.database} />
    );
  }
}

export default App;
