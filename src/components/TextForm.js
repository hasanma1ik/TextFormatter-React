import React, {useState} from "react"


export default function TextForm(props){
    const handleUpClick = ()=>{
         console.log("Uppercase was clicked" + text)
        setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = ()=>{
        console.log("Uppercase was clicked" + text); 
        setText("You have clicked on handleLowClick")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");

    }
    const handleClearClick = ()=>{
        console.log("Uppercase was clicked" + text);
        setText("You have clicked on handleClearClick")
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change"); //sends msg on console
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed!", "success");
    }

    const handleSentenceCase = () => {
        let newText = text.toLowerCase();
        newText = newText.replace(/(^\w{1}|\.\s*\w{1})/gi, (char) => {
          return char.toUpperCase();
        });
        setText(newText);
        props.showAlert("Text converted to sentence case!", "success");
      };
      
    const [text, setText] = useState('Enter Text here');
    // text = "new text"; //Wrong way to change state
    // setText("new text"); //Correct way to change state

    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-2'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE ALL</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>lowercase all</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove WhiteSpace</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceCase}>Sentence Case</button>


{/* filer element function will fix number count, buttons will be disabled if no text in box */}

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Text Analysis</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>



        </div>
        </>
    )

  

}