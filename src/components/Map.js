import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../styles/Map.css';

class Map extends React.Component {

    render() {

        let displayCity = this.props.apiCityData.map((data, idx) => {
            return (
                <div id='mapCard'>
                    <Card>
                        <Card.Body>
                            <Card.Text>Location: {data.display_name}</Card.Text>
                            <Card.Text>Latitude: {data.lat}</Card.Text>
                            <Card.Text>Longitude: {data.lon}</Card.Text>
                            <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${data.lat},${data.lon}&zoom=12`} />
                        </Card.Body>
                    </Card>
                </div>
            )
        });

        return (
            <Container>
                <div id='mapCard' > {displayCity[0]}</div>
            </Container>
        );
    }
}

export default Map;
