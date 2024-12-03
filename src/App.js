import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import { useEffect, useMemo } from 'react';
import "./App.css";
import Login from "./login/Login";
import Home from "./home/Home";
import Tools from "./tools/Tools";
import StandingOrder from "./standingOrder/StandingOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";


var totalSteps = ["tools-navigate-button","</tools>","create-standing-order-button","</create-standing-order>","account-select","recipient-name-input","account-number-input","amount-input","start-date-input","confirm-button"]

var previousBorder;
var previousBorderWidth;
var previousBorderColor;

var currentStep = -1;
var currentSteps = []

var previousPage ="/";
var currentPage;
function removeBorder(component){

  console.log(component)
  if(component){
    component.style.border = previousBorder;
    component.style.borderWidth = previousBorderWidth;
    component.style.borderColor = previousBorderColor;
  }
}

function getElement() {
  var i = 0;
  var j;
  currentPage = window.location.pathname;
  console.log(currentPage)
  totalSteps.forEach(element => {
    if(element==="<"+currentPage+">"){
      console.log("j found", i)
      j=i+1;
    }
    i++;
  });
  
  currentSteps = totalSteps.slice(j);
  console.log(currentSteps)

  if(currentPage!=previousPage){
    currentStep=0;
  }
  previousPage=currentPage;

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
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="tools" element={<Tools />} />
          <Route path="create-standing-order" element={<StandingOrder />} />
        </Routes>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
