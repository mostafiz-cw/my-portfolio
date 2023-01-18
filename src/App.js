// import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      {/* <header className="App-header">
        <p>Site is under construction.</p>
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1-z7S5t4P4Yqj2BRmOmDFqcXiIgpxr_Bk/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          See My Resume
        </a>
      </header> */}
    </div>
  );
}

export default App;
