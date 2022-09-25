import inicio from "../components/img/PPT.png";
import "../index.css";
import "../App.css";
import { Link } from "react-router-dom";



function Home() {
    return (
        <><><><div className="principal">
            <h1>Piedra,papel o tijeras</h1>

        </div>


            <div className="imagen">

                <img src={inicio} alt="Juego" />

            </div></>
            <div className="jugar">
                <Link to="/jugar" className="botonJ">Jugar</Link>
            </div></>
            <div className="colaboradores">
                <Link to="/Colaboradores" className="botonD">Desarrolladores</Link>
            </div></>

        //TUKI2
    );
}

export default Home;
