import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Map from './Map.js';
import Weather from './Weather.js';
import Movies from './Movies.js';

class FormSubmit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: '',
            apiCityData: [],
            apiWeatherData: [],
            map: '',
            city: '',
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
            let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
            console.log(response.data);
            this.setState({
                apiCityData: response.data,
                map: (`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${response.data.lat},${response.data.lon}&zoom=12`),
                error: false
            });

            console.log('City API data', response.data);

            let responseWeather = await axios.get(`${process.env.REACT_APP_SERVER}/weather?latQuery=${response.data[0].lat}&lonQuery=${response.data[0].lon}`);
            this.setState({
                apiWeatherData: responseWeather.data.forecastArr,
                error: false
            });

            console.log('Weather API data', responseWeather.data.forecastArr);

            let responseMovies = await axios.get(`${process.env.REACT_APP_SERVER}/movies?cityQuery=${this.state.city}`);
            this.setState({
                apiMovieData: responseMovies.data.moviesArr,
                error: false
            });

            console.log('Movies API data', responseMovies.data.moviesArr);

        } catch (error) {
            this.setState({
                error: true,
                errorMessage: `An Error Occurred: ${error.response.status}`
            });
        }
    }


    render() {

        return (
            <main>
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
                <br />
                {this.state.error ? <p>{this.state.errorMessage}</p> :

                    <div id="weatherDisplay">
                        <h1>WEATHER</h1>
                        <Weather apiWeatherData={this.state.apiWeatherData}
                        />
                        <br />
                    </div>
                }
                {this.state.error ? <p>{this.state.errorMessage}</p> :
                    <div id="mapCard">
                        <h1>CITIES</h1>
                        <Map apiCityData={this.state.apiCityData}
                        />
                    </div>
                }
                {this.state.error ? <p>{this.state.errorMessage}</p> :
                    <div id="movieCard">
                        <h1>MOVIES</h1>
                        <Movies apiMovieData={this.state.apiMovieData}
                        />
                    </div>
                }

            </main>

        )
    }
}

export default FormSubmit;
