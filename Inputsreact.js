import React, { useState } from 'react';
import { Form , FormControl, Button, InputGroup } from 'react-bootstrap';

function Inputsreact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) =>{
        const form = event.currentTarget;
        if(form.checkvalidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

        return (
            <Form validated={validated} noValidate onSubmit={handleSubmit}>
                <div>
                   <h1> using  ReactBoostrap</h1>
                   <Form.Group controlId="validationCustom01">
                      <Form.Control size="lg" type="text" placeholder="Large text" />
                      <br />
                      <Form.Control type="text" placeholder="Normal text" />
                      <br />
                      <Form.Control size="sm" type="text" placeholder="Small text" />
                      <br />
                      <Form.Control type="text" placeholder="Readonly input here..." readOnly />
                    </Form.Group>
                    <br />
                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                    <br />
                    <Form.Control placeholder="Disabled input" disabled />
                    <br />
                    <InputGroup>
                        <InputGroup.Prepend>
                           <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          required />
                        <FormControl.Feedback type="invalid">
                             Please choose a username..
                        </FormControl.Feedback>
                        <Button type="submit">Submit form</Button>
                    </InputGroup>    
               </div>    
            </Form>
        );

}
export default Inputsreact;