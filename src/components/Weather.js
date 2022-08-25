import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Card.css';

class Weather extends React.Component {

  render() {

    let displayWeather = this.props.apiWeatherData.map((data, idx) => {
      return (
        <Card key={idx}>
          <Card.Body>
            <Card.Text>Description: {data.description}</Card.Text>
            <Card.Text>Date: {data.date}</Card.Text>
          </Card.Body>
        </Card>
      )
    });

    return (
      <div id='weatherCard' > {displayWeather}</div>
    );
  }
}

export default Weather;
