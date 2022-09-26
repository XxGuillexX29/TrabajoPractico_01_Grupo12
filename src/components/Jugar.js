import "../index.css";
import "../App.css";

let puntajesUsuario = document.querySelector(".puntajeJ");
let puntajesComputadora = document.querySelector(".puntajeC");
let puntosUsuario = 0;
let puntosComputadora = 0;
let eleccionComputadora = "";
let eleccionUsuario = "";
let manoUsuaria = document.querySelector(".mano-usuaria");
let manoComputadora = document.querySelector(".mano-computadora");
import PIEDRA from "./img/Piedra.png"
import PAPEL from "./img/Papel.png"
import TIJERA from "./img/Tijera.png"

import imagen from "./img/Piedra.png";



function Jugar() {
    return (
        <>
            <div className="jugar">
                <section className="lugar">
                    <div>
                        <div>
                            <h1 className="titulo"> Jugador 1 </h1>
                            <img className="mano-Jugador" src={PIEDRA} alt="imagen" />

                        </div>
                        <h2 className="puntajeJ"> Puntaje Igual a: 0 </h2>
                    </div>
                    <div>
                        <div>
                            <h1 className="titulo"> Jugador 2</h1>
                            <img className="mano-Computadora" src={PIEDRA} alt="imagen" />

                        </div>
                        <h2 className="puntajeC"> Puntaje Igual a: 0</h2>
                    </div>
                </section>
                <div className="lugar">
                    <button onclick= {click()} className="Boton"> Jugar </button>
                </div>
                <script src="Play.js"></script>
            </div>
        </>
    );
}
function click(){
manoUsuaria.src = { PIEDRA }
    manoComputadora.src = { PIEDRA }
    eleccionUsuario = obtenerEleccion();
    eleccionComputadora = obtenerEleccionComputadora();
    decidirPuntaje();
}
function obtenerEleccion () {
        let numeroAlAzar = Math.floor(Math.random() * 3)
    
        if (numeroAlAzar == 0) {
            manoJugador.src = { PIEDRA }
        }
        else if (numeroAlAzar == 1) {
            manoJugador.src = { PAPEL }
        }
        else if (numeroAlAzar == 2) {
            manoJugador.src = { TIJERA }
        }
    }
function obtenerEleccionComputadora () {
        let numeroAlAzar = Math.floor(Math.random() * 3)
    
        if (numeroAlAzar == 0) {
            manoComputadora.src = { PIEDRA }
        }
        else if (numeroAlAzar == 1) {
            manoComputadora.src = { PAPEL }
        }
        else if (numeroAlAzar == 2) {
            manoComputadora.src = { TIJERA }
        }
    }
    
    
function decidirPuntaje  () {
        if (eleccionComputadora == 0) {
            if (eleccionUsuario == 0) {
                resultadoTexto.textContent = "Empate"
            }
            else if (eleccionUsuario == 1) {
                resultadoTexto.textContent = "¡Ganaste!"
                puntosUsuario++
                puntajesUsuario.textContent = puntosUsuaria;
            }
            else if (eleccionUsuario == 2) {
                puntosComputadora++
                puntajesComputadora.textContent = puntosComputadora;
                resultadoTexto.textContent = "Perdiste"
            }
        }
        else if (eleccionComputadora == 1) {
            if (eleccionUsuario == 1) {
                resultadoTexto.textContent = "Empate"
            }
            else if (eleccionUsuario == 2) {
                resultadoTexto.textContent = "¡Ganaste!"
                puntosUsuario++
                puntajesUsuario.textContent = puntosUsuaria;
            }
            else if (eleccionUsuario == 0) {
                puntosComputadora++
                puntajesComputadora.textContent = puntosComputadora;
                resultadoTexto.textContent = "Perdiste"
            }
        }
        else if (eleccionComputadora == 2) {
            if (eleccionUsuario == 2) {
                resultadoTexto.textContent = "Empate"
            }
            else if (eleccionUsuario == 0) {
                resultadoTexto.textContent = "¡Ganaste!"
                puntosUsuario++
                puntajesUsuario.textContent = puntosUsuaria;
            }
            else if (eleccionUsuario == 1) {
                puntosComputadora++
                puntajesComputadora.textContent = puntosComputadora;
                resultadoTexto.textContent = "Perdiste"
            }
        }
    }

export default Jugar;