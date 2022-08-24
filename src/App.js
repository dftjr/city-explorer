import React from 'react';
import FormSubmit from './Form.js';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      test: ''
    };
  }

  render() {
    return (
      <>
      
      <p>Website is working!</p>
      <FormSubmit/>
      
      </>
    );
  }
}

export default App;
