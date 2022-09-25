import "../index.css";
import "../App.css";
import { useState } from 'react';


const piedra = 0;
const papel = 1;
const tijera = 2;

function Jugar() {
    const boton = Boton();
    const [numero, setNumero] = useState(Math.floor(Math.random() * 3));
    return (
        <>
            <div className="jugar">
                <header className="inicio">
                    <h1 className="titulo"> Jugador 1 </h1>
                    <h1 className="titulo"> Jugador 2</h1>
                </header>
                <section className="lugar">
                    <div>
                    <div>
                        <img className="tamaño"  alt="piedra" />
                    <h2 className="medio"> Puntaje Igual a: 0</h2>
                    </div>
                    </div>
                    <div>
                    <div>
                        <img className="tamaño"  alt="papel" />
                    </div>
                    <h2 className="medio"> Puntaje Igual a: 0</h2>
                    </div>
                </section>
                <div className="lugar">
                    <button className="boton"> Jugar </button>
                </div>
            </div>
        </>

    );
}
    function Boton(){

        if(piedra === piedra){
            return empate
        }
} export default Jugar;