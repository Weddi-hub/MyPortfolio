import {BrowserRouter,Routes,Route} from "react-router-dom";
import  Home from  "./Pages/Home"
import Skills from "./Pages/Skills"
import Contact from "./Pages/Contact"
import Work from "./Pages/Work"
import PageNotFound from  "./Pages/PageNotFound"
import About from "./Pages/About";

function App() {
  return (
    <div>
          <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Skills" element={<Skills/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Work" element={<Work/>}/>
            <Route path="/*" element={<PageNotFound/>}/>

          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
