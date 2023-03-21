import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

export default function TextForm(props) {
    const handleUpEvent = () =>{
      //  console.log("convert to uppercase clicked");
        setText(text.toUpperCase());
    }
    const handleChangeEvent = (event) =>{
      //  setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');

  return (
    <Form>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{props.heading} - {text}</Form.Label>
        <Form.Control as="textarea" rows={8} value={text} onChange={handleChangeEvent}/>
      </Form.Group>
      <button className='btn btn-primary' onClick={handleUpEvent}>Convert to Uppercase</button>
    </Form>
  )
}
