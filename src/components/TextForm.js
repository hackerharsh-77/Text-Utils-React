import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleClick = ()=>{
        let newText= " ";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
     <>
        <div className="container"  style={{color:props.mode==='dark'?'white':'#070749'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#070749'}} id="myBox" onChange={handleOnChange} rows="8"></textarea>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClick}>Clear text</button>
            </div>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#070749'}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text above to preview it here"}</p>
        </div>
     </>
    )
}
