import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE.","success")
    }

    const handleLoClick = () => {    
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase.","success")
    }

    const handleSpacesClick = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Spaces are removed.","success")
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared.","success")
    }

    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to the Clipboard.","success")
    }

    const handleOnChange = (event) => {
        console.log("onchange was clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState('enter text here...');



    //text = 'new text'; //wrong way to change the state
    //setText("new text"); //correc way to change the state

    return (
        <>
            <div className="container" style={{ color: props.uiMode === 'dark' ? 'white' : 'black' }}>
                <h1 style={{fontFamily: 'nunito'}}>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" 
                    style={{
                        backgroundColor: props.uiMode === 'dark' ? '#30475E' : '#e7e7e7',
                        color: props.uiMode === 'dark' ? 'white' : 'black',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '5px 20px',
                    }}>
                    </textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}  > Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}  > Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleSpacesClick}  > Trim Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}  > Copy Text</button>
                <button className="btn btn-secondary mx-1" onClick={handleClearClick}  > Clear</button>

            </div>
            <div className="container my-2" style={{ color: props.uiMode === 'dark' ? 'white' : 'black' }}>
                <h2 style={{fontFamily: 'nunito'}}>your text summary</h2>

                <p className="mx-3">{text.split(" ").length - 1} words and {text.length} characters</p>

                <p className="mx-3">{0.008 * text.split(" ").length} minutes to read</p>

                <h2 style={{fontFamily: 'nunito'}}> preview</h2>

                <p className="mx-3"> {text.length > 0 ? text : "enter something in the textbox above to preview it here"}</p>

            </div>
        </>
    )
}
