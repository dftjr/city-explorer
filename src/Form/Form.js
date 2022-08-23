import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class FormSubmit extends React.Component {

    constructor(props) {
        super();
        this.state = {
            test: ''
        };
    }

    render() {
        return (
            <Form onSubmit={this.props.onSubmit}>
                <Form.Group
                    className="fm-1"
                    controlId="hornSelection"
                >
                    <Form.Label>Horn Selection</Form.Label>
                    <Form.Select
                        type="email"
                        placeholder="Horn Selection"
                        onChange={this.props.onChange}
                    >
                        <option value="0">all horns</option>
                        <option value="1">1 horn</option>
                        <option value="2">2 horns</option>
                        <option value="3">3 horns</option>
                        <option value="100">100 horns</option>
                    </Form.Select>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form >
        );
    }
}

export default FormSubmit;