import React, { useState } from "react";

export default function (props) {
  const [text, setText] = useState("Enter the text");

  const handleUpClick = () => {
    // console.log("Uppercase is Done" + text)
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to UpperCase", "success")
  };
  const handleLoClick = () => {
    // console.log("Uppercase is Done" + text)
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to LowerCase", "success")

  };
  const handleSentenceClick = () => {
    let newtext =
      text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    setText(newtext);
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
  };

  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color: props.mode=== "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode=== "dark" ? "white" : "black" 
            }}
            id="mybox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>
          Convert to Sentence Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Convert to Clear
        </button>
      </div>

      <div className="className my-3" style={{color: props.mode=== "dark" ? "white" : "black"}}>
        <h1>Character Count</h1>
        <p className="pw">
          {text.split(" ").length} words {text.length} characters
          <p>{0.008 * text.split(" ").length} Minutes</p>
        </p>
        <h2>Preview</h2>
        <p className="pw">{text}</p>
      </div>
    </>
  );
}
