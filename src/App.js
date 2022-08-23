import React from 'react';
import FormSubmit from '../src/Form/Form';

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
