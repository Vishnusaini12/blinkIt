import React from 'react';

const BlinkIt = ({ type, onClick }) => {
  const btnStyle = {
    backgroundColor: 'yellow',
    height: '40px',
    marginTop: '10px',
    width: '90%', 
    maxWidth: '300px', 
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  };
  return (
    <div>
      <button onClick={onClick} style={btnStyle}>Log in with mobile number</button>
    </div>
  );
};

export default BlinkIt;
