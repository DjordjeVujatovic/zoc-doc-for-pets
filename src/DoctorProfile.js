import React, { Component } from 'react';
import ProfileHeaderComponent from './Components/ProfileHeaderComponent';
import FormComponent from './Components/FormComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfileHeaderComponent />
        <FormComponent />
      </div>
    );
  }
}

export default App;
