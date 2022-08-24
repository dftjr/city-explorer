import React from 'react';
import FormSubmit from './Form.js';
import  '../styles/App.css';

class App extends React.Component {

  render() {
    return (
      <div class='display'>
        <h1>Website is working!</h1>
        <FormSubmit />
      </div>
    );
  }
}

export default App;
