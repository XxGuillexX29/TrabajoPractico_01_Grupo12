import "./App.css";
import './index.js';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Paginaprincipal from "./components/Paginaprincipal";
import Jugar from "./components/Jugar";
import Colaboradores from "./components/Colaboradores";
//import "./components/Play";

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/"element={<Paginaprincipal/>}/>;
        <Route path= "/Colaboradores" element={<Colaboradores/>}/>;
        <Route path= "/Jugar" element={<Jugar/>}/>;
      </Routes>
    </Router>
  );

}

export default App;
