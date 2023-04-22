import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import '../index.css';

export default function TextForm() {
  const [text, setText] = useState("Enter Text Here...");
  const textareaRef = useRef(null);

  const handleUpClick = () => {
    let UpperCasetext = text.toUpperCase();
    setText(UpperCasetext);
  };

  const handleLoClick = () => {
    let LowerCasetext = text.toLowerCase();
    setText(LowerCasetext);
  };

  const handleClearClick = () => {
    let ClearedText = "";
    setText(ClearedText);
  };

  const handlePrintClick = () => {
    let printContents = textareaRef.current.innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1 className="heading">Enter the Text to Analyse</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            value={text}
            onChange={handleOnChange}
            rows={11}
            ref={textareaRef}
          />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={handleUpClick} className="mx-1" >
        Convert to UpperCase
      </Button>
      <Button variant="primary" onClick={handleLoClick} className="mx-1" >
        Convert to LowerCase
      </Button>
      <Button variant="primary" onClick={handlePrintClick} className="mx-1" >
        Print
      </Button>
      <Button variant="danger" onClick={handleClearClick} className="mx-1" >
        Clear
      </Button>
      

      <div className="my-3">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{text.split(" ").length * 0.08} minutes to read</p>
      </div>
    </div>
  );
}
