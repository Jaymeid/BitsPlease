import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import { useEffect, useMemo } from 'react';

var currentSteps = ["testID","testID2"]

var previousBorder;
var previousBorderWidth;
var previousBorderColor;

var currentStep = -1;

function removeBorder(component){
  console.log(component)
  if(component){
    component.style.border = previousBorder;
    component.style.borderWidth = previousBorderWidth;
    component.style.borderColor = previousBorderColor;
  }
}

function getElement() {
  const component = document.getElementById(currentSteps[currentStep]);

  if(currentStep>0){
    const prevComponent = document.getElementById(currentSteps[currentStep-1]);
    removeBorder(prevComponent);
  }
  if(currentStep>=currentSteps.length){
    removeBorder(document.getElementById(currentSteps[currentSteps.length-1]));
  }

  if(component){
    previousBorder = component.style.border;
    previousBorderWidth = component.style.borderWidth;
    previousBorderColor = component.style.borderColor;

    component.style.border = '1px solid #000000'; // Black border, 1 pixel wide
    component.style.borderWidth = '2px'; // Change border width
    component.style.borderColor = 'blue'; // Change border color
  }
  currentStep++;
}

document.addEventListener('click', (event) => {
  // Your custom function call
  console.log("clicked")
  var id = event.target.id;
  if(id===currentSteps[currentStep-1] || currentStep>=currentSteps.length){
    getElement();  
  }
});

function App() {

  useEffect(() => {
    console.log("effect")
    if(currentStep===0){
      getElement();
    }else{
      currentStep=0;
    }
  }, []);


  
  return (
    <div className="App">
      <header className="App-header">

      <a onClick={()=>{}}>test</a>
        <a>test 2</a>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Greeting></Greeting>
      </header>
    </div>
  );
}

export default App;
