import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Card.css';

class Map extends React.Component {

    render() {

        let displayCity = this.props.apiCityData.map((data, idx) => {
            return (
                <Card key={idx}>
                    <Card.Body>
                        <Card.Text>Location: {data.display_name}</Card.Text>
                        <Card.Text>Latitude: {data.lat}</Card.Text>
                        <Card.Text>Longitude: {data.lon}</Card.Text>
                        <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${data.lat},${data.lon}&zoom=12`} />
                    </Card.Body>
                </Card>
            )
        });

        return (
            <div id='mapCard' > {displayCity}</div>
        );
    }
}

export default Map;
