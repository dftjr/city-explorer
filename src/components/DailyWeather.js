import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Card.css';

class DailyWeather extends React.Component {

  render() {

    let dailyWeatherCard = this.props.apiWeatherData.map((data, idx) => {
      return (
        <Card key={idx}>
          <Card.Body>
            <Card.Text>Description: {data.forecast}</Card.Text>
            <Card.Text>Date: {data.time}</Card.Text>
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
