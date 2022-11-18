import imagenJuego from "./img/opcion1.png";
import "./Css/index.css";
import "./Css/App.css";
import { Link } from "react-router-dom";

export default function Home() {
    return ( 
        //Se colocaron imagenes y botonea de cada juegos y colaboradores 
        <><div className="principal">
            <h1>Piedra, Papel y Tijera</h1>

        </div><div className="imagen">

                <img src={imagenJuego} alt="Juego" />

            </div><nav>
                <ul> 
                    <li>
                        <Link to="/PiedraPapelTijera" className="botonJugar">Piedra papel o tijera</Link>
                    </li>
                    <li>
                        <Link to="/Colaboradores" className="botonJugar">Colaboradores</Link>
                    </li>
                    
                </ul>
            </nav></>

    );
}

