import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import CardCity from './Card.js';

class FormSubmit extends React.Component {

    constructor(props) {
        super();
        this.state = {
            city: '',
            apiData: [],
            error: false,
            errorMessage: '',
            weatherArr: '',
            lat: '',
            long: ''
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
            this.setState({
                apiData: response.data,
                error: false
            });
        } catch (error) {
            console.log('error', error);
            this.setState({
                error: true,
                errorMessage: `An Error Occurred: ${error.response.status}`
            });
        }

    }

    handleWeatherSubmit = async (e) => {
        e.preventDefault();
        try {
            let url = await axios.get(`${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`);
            this.setState({
                weatherArr: url.data,
                error: false
            });
        } catch (error) {
            console.log('error', error);
            this.setState({
                error: true,
                errorMessage: `An Error Occurred: ${error.response.status}`
            });
        }

    }
    

render() {

    return (
        <main>
            <Form onSubmit={this.handleCitySubmit() & (submitFunc=this.handleWeatherSubmit())}>
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
            {
                this.state.error
                    ?
                    <p>{this.state.errorMessage}</p>
                    :
                    <div id="cardDisply">
                        <CardCity apiData={this.state.apiData} />
                    </div>
            }
        </main>,
    );
}
}

export default FormSubmit;
