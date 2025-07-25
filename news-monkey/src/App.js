import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import News from "./News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const apiKey = process.env.REACT_APP_API_URL; 
  const [progress,setProgress]=useState(0); 

  const  SetProgressFunction=(prog)=>{
       setProgress(prog);
  }

  return (
    <>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <LoadingBar
             color="#FF0000"
             style={{height:2}}
             progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News key="general" apiKey={apiKey} category="general"  pagesize={5} country="us" setProgress={SetProgressFunction}></News>}/>
            <Route exact path="/general" element={<News key="general" apiKey={apiKey} category="general"  pagesize={5}  country="us" setProgress={SetProgressFunction}></News>}/>
            <Route exact 
                path="/business"
                element={<News key="business" apiKey={apiKey} category="business"  pagesize={5} country="us" setProgress={SetProgressFunction}></News>}
              />
              <Route exact 
                path="/health"
                element={<News key="health" apiKey={apiKey} category="health"  pagesize={5} country="us" setProgress={SetProgressFunction}></News>}
              />
              <Route exact 
                path="/entertainment"
                element={<News key="entertainment" apiKey={apiKey} category="entertainment"  pagesize={5} country="us" setProgress={SetProgressFunction}></News>}
              />
              <Route exact 
                path="/sports"
                element={<News key="sports" apiKey={apiKey} category="sports"  pagesize={5} country="us" setProgress={SetProgressFunction}></News>}
              />
              <Route exact 
                path="/science"
                element={<News key="science" apiKey={apiKey} category="science"  pagesize={5} country="us" setProgress={SetProgressFunction}></News>}
              />
              <Route exact 
                path="/technology"
                element={<News key="technology" apiKey={apiKey} category="technology"  pagesize={5} country="us" setProgress={SetProgressFunction}></News>}
              />
          </Routes>
        </Router> 
      </div>
    </>
  );
}

export default App;
