import React, { useState } from 'react'

export default function About (props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
       
    // })
    let myStyle = {
      color: props.mode === 'dark'? 'white': '#042743', //If not dark then white and vice versa
      backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)': 'white',
     

    }

    return (
      <div className="container">
        <h1 className="my-3" style={{color: props.mode === 'dark'? 'white': '#042743'}}>About Us</h1>
        <div className="card" style={myStyle}>
          <div className="card-body">
            <h5 className="card-title"><strong>Introducing Text Formatter</strong></h5>
            <p className="card-text">Welcome to Text Formatter, an immaculate text analytics program that is not only easy-to-use, but also free and universally compatible. With Text Formatter, you can swiftly and conveniently examine your text - counting characters and words has never been this simple.</p>
            <p className="card-text">This cost-free tool delivers instant results, making it a go-to platform for bloggers, students, and professionals who need to meet specific word or character counts in their essays, blogs, or any other kind of writing assignments.</p>
            <p className="card-text">Universal compatibility is what sets Text Formatter apart. Regardless of your browser preference - be it Chrome, Internet Explorer, Mozilla Firefox, Edge or Safari - Text Formatter is always at your service, ensuring an experience without any hassles. Explore Text Formatter today and elevate your text analysis to profound levels!</p>
          </div>
        </div>
      </div>

  )
}
