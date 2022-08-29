import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../styles/Weather.css';

class Weather extends React.Component {

  render() {

    let dailyWeatherCard = this.props.apiWeatherData.map((data, idx) => {
      ;
      return (
        <Card>
          <Card.Body>
            <Card.Text>Description: {data.forecast}</Card.Text>
            <Card.Text>Date: {data.time}</Card.Text>
          </Card.Body>
        </Card>
      );
    });

    return (
      <div className='weatherSection'>
        <Container>
          <div id='weatherCard' > {dailyWeatherCard[0]}</div>
          <div id='weatherCard' > {dailyWeatherCard[1]}</div>
          <div id='weatherCard' > {dailyWeatherCard[2]}</div>
          <div id='weatherCard' > {dailyWeatherCard[3]}</div>
          <div id='weatherCard' > {dailyWeatherCard[4]}</div>
        </Container>
      </div>
    );
  }
}

export default Weather;
