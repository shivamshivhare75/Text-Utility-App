import React, { useState } from 'react'

export default function Form(props) {

    const update = (e) => {
        setText(e.target.value)
    }
    const upper = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const removeWhiteSpaces = () => {
        const a = text.split(" ").join("")
        setText(a)
    }
    const removeExtraSpaces = () => {
        const a = text.split(/[ ]+/).join(" ")
        setText(a)
    }
    const clearText = () => {
        const a = ""
        setText(a)
    }
    const copyText = () => {
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);



    }
    const mySwitch = {
        position: "relative",
        left: "99%",
        cursor: "pointer"
    };

    const [text, setText] = useState("")

    return (
        <>
            <div>
                <div className='container' >
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} style={mySwitch} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" style={mySwitch} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"><h3>{props.heading}</h3></label>
                    <textarea className="form-control" id="myBox" style={props.mode == "light" ? { color: "black", backgroundColor: "white" } : { color: "white", backgroundColor: "Lightgrey" }} placeholder='Enter Text Here' value={text} onChange={update} id="myBox" rows="6" ></textarea>
                </div>
                <button className='btn btn-primary ' onClick={upper} >Convert To Uppercase</button>
                <button className='btn btn-primary mx-3' onClick={lower} >Convert To Lower case</button>
                <button className='btn btn-primary ' onClick={removeWhiteSpaces} >Remove White Spaces</button>
                <button className='btn btn-primary mx-3' onClick={removeExtraSpaces} >Remove Extra Spaces</button>
                <button className='btn btn-primary  ' onClick={clearText} >Clear Text</button>
                <button className='btn btn-primary mx-3 ' onClick={copyText} >Copy Text</button>
            </div >
            <div className='container my-4 '>
                <h3>Your Text Summary</h3>
                <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div >

        </>

    )
}
