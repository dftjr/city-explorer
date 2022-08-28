import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Card.css';

class DailyWeather extends React.Component {

  render() {

    let dailyWeatherCard = this.props.apiWeatherData.map((data, idx) => {
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
      <div id='weatherCard' > {dailyWeatherCard}</div>
    );
  }
}

export default DailyWeather;
