// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Topnav from './components/Topnav';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <>
  <Topnav title = "TextUtils1"/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TextForm heading= "Enter the text to analyze"/>} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}