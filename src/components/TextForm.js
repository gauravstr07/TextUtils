import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    //console.log("Upperscase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been clear!", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra speces removed!", "success");
  };

  const handleOnClick = (event) => {
    console.log("On change..!");
    setText(event.target.value);
  };

  //setText("Value has been changed");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnClick}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#192734" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length} words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview here"}
        </p>
      </div>
    </>
  );
}
