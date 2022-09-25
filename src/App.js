import "./App.css";
import './index.js';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Paginaprincipal from "./components/Paginaprincipal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/"element={<Paginaprincipal/>}/>;

        
      </Routes>

    </Router>
  );

}

export default App;
