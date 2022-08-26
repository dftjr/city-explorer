import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Map from './Map.js';
import Weather from './Weather.js';

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
            lat: '',
            lon: ''
        };
    }

    handleCityInput = (e) => {
        let city = e.target.value;
        console.log(this.state.city);
        this.setState({
            city: city,
        });
    }


    handleMultipleMethods = (e) => {
        e.preventDefault();
        this.handleWeatherSubmit();
        this.handleCitySubmit();
    }

    handleCitySubmit = async () => {
        try {
            let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
            console.log(response.data.map(data => data.lat));
            this.setState({
                apiCityData: response.data,
                map: (`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${response.data.lat},${response.data.lon}&zoom=12`),
                error: false
            });
            console.log('City API data', response.data);
        } catch (error) {
            this.setState({
                error: true,
                errorMessage: `An Error Occurred: ${error.response.status}`
            });
        }
    }

    handleWeatherSubmit = async () => {
        try {
            let response = await axios.get(`${process.env.REACT_APP_SERVER}/weather?latQuery=${this.state.lat}&lonQuery=${this.state.lon}&key=${process.env.REACT_APP_WEATHER_API_KEY}`);
            console.log(response);
            this.setState({
                apiWeatherData: response.data.forecastArr,
                error: false
            });
            console.log('Weather API data', response.data.forecastArr)
        } catch (error) {
            this.setState({
                props: true,
                errorMessage: `An Error Occurred: ${error.response.status}`
            });
        }
    }

    render() {

        return (
            <main>
                <Form onSubmit={this.handleMultipleMethods}>
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
                        <br/>
                    </div>
                }
                {this.state.error ? <p>{this.state.errorMessage}</p> :
                    <div id="mapCard">
                        <h1>CITIES</h1>
                        <Map apiCityData={this.state.apiCityData}
                        />
                    </div>
                }

            </main>

        )
    }
}

export default FormSubmit;
