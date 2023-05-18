import React, {useState} from "react"


export default function TextForm(props){
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text); //sends msg in console
        setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked" + text); //sends msg in console
        setText("You have clicked on handleLowClick")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");

    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text); //sends msg in console
        setText("You have clicked on handleClearClick")
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change"); //sends msg on console
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here2');
    // text = "new text"; //Wrong way to change state
    // setText("new text"); //Correct way to change state

    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>


        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter here please"}</p>



        </div>
        </>
    )

  

}