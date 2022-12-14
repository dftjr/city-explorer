import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Map from './Map.js';
import Weather from './Weather.js';
import Movie from './Movie.js';
import '../styles/App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: '',
            apiCityData: [],
            city: '',
            map: '',
            apiWeatherData: [],
            apiMovieData: [],
            movieImg: ''
        };
    }

    handleCityInput = (e) => {
        let city = e.target.value;
        console.log(this.state.city);
        this.setState({
            city: city,
        });
    }

    handleCitySubmit = async (e) => {
        e.preventDefault();
        try {

            // Get city
            let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
            this.setState({
                apiCityData: response.data,
                map: (`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${response.data.lat},${response.data.lon}&zoom=12`),
                error: false
            });

            // Get weather
            let responseWeather = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}`);
            console.log(responseWeather.data);
            this.setState({
                apiWeatherData: responseWeather.data,
                error: false
            });

            // Get movies
            let responseMovies = await axios.get(`${process.env.REACT_APP_SERVER}/movies?city=${this.state.city}`);
            this.setState({
                apiMovieData: responseMovies.data.moviesArr,
                error: false
            });

            // Error message
        } catch (error) {
            this.setState({
                error: true,
                errorMessage: `An Error Occurred: ${error.response.status}`
            });
            console.log(error);
        }
    }


    render() {

        return (
            <main>
                <div className='form'>
                    <Form onSubmit={this.handleCitySubmit}>
                        <label>Pick a city:</label>
                        <br />
                        <input type="text"
                            onInput={this.handleCityInput}
                            input="city"
                        />
                        <Button
                            type="submit">Explore!
                        </Button>
                    </Form>
                </div>
                <br />
                {this.state.error ? <p>{this.state.errorMessage}</p> :
                    <div className='weatherBlock'>
                        <h1>WEATHER</h1>
                        <Weather apiWeatherData={this.state.apiWeatherData}
                        />
                        <br />
                    </div>
                }
                {this.state.error ? <p>{this.state.errorMessage}</p> :
                    <div className='cityBlock'>
                        <h1>CITIES</h1>
                        <Map apiCityData={this.state.apiCityData}
                        />
                    </div>
                }
                {this.state.error ? <p>{this.state.errorMessage}</p> :
                    <div className='movieBlock'>
                        <h1>MOVIES</h1>
                        <Movie apiMovieData={this.state.apiMovieData}
                        />
                    </div>
                }

            </main>

        )
    }
}

export default App;
