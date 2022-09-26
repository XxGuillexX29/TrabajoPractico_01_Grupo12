import "../index.css";
import "../App.css";
import imagen from "./img/Piedra.png";



function Jugar() {
    return (
        <>
            <div className="jugar">
                <section className="lugar">
                    <div>
                        <div>
                            <h1 className="titulo"> Jugador 1 </h1>
                            <img className="mano-Jugador" src={imagen} alt="imagen" />

                        </div>
                        <h2 className="puntajeJ"> Puntaje Igual a </h2>
                        <p className="Numero">0</p>
                    </div>
                    <div>
                        <div>
                            <h1 className="titulo"> Jugador 2</h1>
                            <img className="mano-Computadora" src={imagen} alt="imagen" />

                        </div>
                        <h2 className="puntajeC"> Puntaje Igual </h2>
                        <p className="Numero">0</p>
                    </div>
                </section>
                <div className="lugar">
                    <button className="botonJ"> Jugar </button>
                </div>
                <script src="Play.js"></script>
            </div>
            
        </>
        
    );
    

}

export default Jugar;