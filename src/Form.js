import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class FormSubmit extends React.Component {

    constructor(props) {
        super();
        this.state = {
            apiData: '',
            city: ''
        };
    }

    handleApiGrab = async (e) => {
        e.preventDefault();
        let response = await axios.get();
        this.setState({
            apiData: response.data.results
        });
    }

    handleCityInput = (e) => {
        let city = e.target.value;
        console.log(city);
        this.setState({
            city: '',
            apiData: ''
        });
    }

    handleCitySubmit = async (e) => {
        e.preventDefault();
        let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
        console.log(response.data);
        this.setState({
            apiData: response.data
        });
    }

    render() {
        console.log(this.state.city);
        return (
            <>
                <Form onSubmit={this.handleCitySubmit}>
                    <label>Pick a city:
                        <input type="text"
                            onInput={this.handleCityInput}
                        <Button type="submit"</Button>
                </label>
            </Form>
            </>
        );
    }
}

export default FormSubmit;
