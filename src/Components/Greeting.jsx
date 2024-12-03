import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1 id = "testID2">Hello, {props.name}!</h1>
      <p  id ="testID">You are {props.age} years old.</p>
    </div>
  );
}

export default Greeting;