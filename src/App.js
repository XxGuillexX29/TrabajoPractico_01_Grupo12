import "./components/Css/App.css";
import './components/Css/index.css';
import './index.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Paginaprincipal from "./components/Paginaprincipal";
import Jugar from "./components/PruebaPPT";
import Colaboradores from "./components/Colaboradores";
//import "./components/Play";

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/"element={<Paginaprincipal/>}/>;
        <Route path= "/Colaboradores" element={<Colaboradores/>}/>;
        <Route path= "/PiedraPapelTijera" element={<Jugar/>}/>;
      </Routes>
    </Router>
  );

}

export default App;
