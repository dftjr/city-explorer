import React from 'react';
import Card from 'react-bootstrap/Card';

class CardCity extends React.Component {

    render() {

        let displayCity = this.props.apiData.map((data, idx) => {
            return <Card key={idx}>
                <Card.Body>
                    <Card.Text>Location: {data.display_name}</Card.Text>
                    <Card.Text>Latitude: {data.lat}</Card.Text>
                    <Card.Text>Longitude: {data.lon}</Card.Text>
                    {/* <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${data.lat},${data.lon}&zoom=12`}/> */}
                </Card.Body>
            </Card>
        });

        return (
            <div id='display'>{displayCity}</div>
        );
    }
}

export default CardCity;