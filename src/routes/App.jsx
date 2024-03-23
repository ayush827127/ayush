import "./App.css";
import Contact from "../components/Contact";
import Educations from "../components/Educations";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Header />
        <Home />
        <Skills />
        <Educations />
        <Projects />
        <Experiences />
        <Contact />
    </>
  );
}

export default App;
