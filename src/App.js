import "./App.css";
import Login from "./login/Login";
import Home from "./home/Home";
import Tools from "./tools/Tools";
import StandingOrder from "./standingOrder/StandingOrder";
import html2canvas from "html2canvas";
import { useRef } from "react";
import PocketBase from "pocketbase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CaptureButton } from "./App.styled";
import NavBar from "./navbar/NavBar";

const pb = new PocketBase("http://127.0.0.1:8090");

function generateRandomString() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

function dataURLToBlob(dataURL) {
  const [metadata, base64Data] = dataURL.split(',');
  const byteString = atob(base64Data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uintArray = new Uint8Array(arrayBuffer);
  
  // Fill the array with byte values
  for (let i = 0; i < byteString.length; i++) {
    uintArray[i] = byteString.charCodeAt(i);
  }

  // Create the Blob from the ArrayBuffer
  return new Blob([uintArray], { type: metadata.split(';')[0].split(':')[1] });
}

function App() {
  const captureRef = useRef(null);

  const captureAndUploadImage = async () => {
    try {
      const canvas = await html2canvas(captureRef.current);
  
      // Step 1: Convert canvas to a data URL (base64 image)
      const imageDataUrl = canvas.toDataURL("image/png");
  
      // Step 2: Convert the data URL to a Blob
      const blob = dataURLToBlob(imageDataUrl);
      const id = generateRandomString();
      // Step 3: Create a File from the Blob
      const file = new File([blob], `${id}.png`, { type: "image/png" });
      
      console.log("Created File from Data URL:", file); // Log the file for debugging
      console.log(`id: ${id}`)
  
      // Step 4: Create FormData and append the File object
      const formData = new FormData();
      formData.append('image', file); // Attach the file
      formData.append('sessionID', id);
  
      // Step 5: Upload the file to PocketBase
      const fileUploadResponse = await pb.collection("images").create(formData);
  
      console.log("Uploaded File:", fileUploadResponse); // Log the response from PocketBase
    } catch (error) {
      console.error("Error capturing or uploading image:", error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App" ref={captureRef}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="tools" element={<Tools />} />
          <Route path="create-standing-order" element={<StandingOrder />} />
        </Routes>
        <CaptureButton onClick={captureAndUploadImage}>Capture</CaptureButton>
        <NavBar />
      </div>
      <img id="imagePreview" alt="Preview" />
    </BrowserRouter>
  );
}

export default App;
