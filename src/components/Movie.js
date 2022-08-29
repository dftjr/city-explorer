import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../styles/Movie.css';

class Movie extends React.Component {

    render() {

        let displayMovie = this.props.apiMovieData.map((data, idx) => {
            return (
                <div id='movieCard'>
                    <Card>
                        <Card.Body>
                            <Card.Img src={`https://image.tmdb.org/t/p/w440_and_h660_face${data.image_url}`} />
                            <Card.Text>Title: {data.title}</Card.Text>
                            <div className='movieScroll'>
                                <Card.Text>Overview: {data.overview}</Card.Text>
                            </div>
                            <Card.Text>Average Votes: {data.average_votes}</Card.Text>
                            <Card.Text>Total Votes: {data.total_votes}</Card.Text>
                            <Card.Text>Popularity: {data.popularity}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text>Date Released: {data.released_on}</Card.Text>
                        </Card.Footer>
                    </Card>
                </div>
            )
        });

        return (
            <Container>
                <div className='movieSection1'>
                            <div id='movieCard1' >{displayMovie[0]}</div>
                            <div id='movieCard2' >{displayMovie[1]}</div>
                            <div id='movieCard3' >{displayMovie[2]}</div>
                            <div id='movieCard4' >{displayMovie[3]}</div>
                            <div id='movieCard5' >{displayMovie[4]}</div>
                </div>
                <div className='movieSection2'>
                            <div id='movieCard6' >{displayMovie[5]}</div>
                            <div id='movieCard7' >{displayMovie[6]}</div>
                            <div id='movieCard8' >{displayMovie[7]}</div>
                            <div id='movieCard9' >{displayMovie[8]}</div>
                            <div id='movieCard10' >{displayMovie[9]}</div>
                </div>
            </Container>
        );
    }
}

export default Movie;
