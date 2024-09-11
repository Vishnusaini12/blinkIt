import React from 'react';
import BlinkIt from './blinkIt';
import image from './assets/images.jpeg';

function App() {
  const btn = () => {
    console.log("button clicked");
  };

  const containerStyle = {
    height: 'auto', 
    color: 'blue',
    maxWidth: '90%', 
    margin: '40px auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'black',
    textAlign: 'center',
    alignItems: 'center',
    boxSizing: 'border-box', 
  };

  const imageStyle = {
    marginTop: '5%',
    width: '70%', 
    height: 'auto', 
    borderRadius: '5px',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    margin: '20px 0 10px 0', 
  };

  const subHeadingStyle = {
    marginTop: '5px',
    fontSize: '1rem',
  };

  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={image} alt="Store" />

      <h2 style={headingStyle}>
        blink<span style={{ color: 'yellow' }}>it</span> store
      </h2>

      <h5 style={subHeadingStyle}>
        Help us to fulfill orders to keep<br />delivery in minutes.
      </h5>
      <BlinkIt type="button" onClick={btn} />
    </div>
  );
}

export default App;
