import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Card.css';

class Movie extends React.Component {

    render() {

        let displayMovie = this.props.apiMovieData.map((data, idx) => {
            return (
                <Card key={idx}>
                    <Card.Body>
                        <Card.Img src={`https://image.tmdb.org/t/p/w440_and_h660_face${data.image_url}`} />
                        <Card.Text>Title: {data.title}</Card.Text>
                        <Card.Text>Overview: {data.overview}</Card.Text>
                        <Card.Text>Average Votes: {data.average_votes}</Card.Text>
                        <Card.Text>Total Votes: {data.total_votes}</Card.Text>
                        <Card.Text>Popularity: {data.popularity}</Card.Text>
                        <Card.Text>Date Released: {data.released_on}</Card.Text>
                    </Card.Body>
                </Card>
            )
        });

        return (
            <div id='movieCard' > {displayMovie}</div>
        );
    }
}

export default Movie;
