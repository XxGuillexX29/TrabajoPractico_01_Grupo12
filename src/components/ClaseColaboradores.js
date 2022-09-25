import React from "react"
class ClaseColaboradores extends React.Component {
    render() {
        return (
            <div >
                
                        <h1>{this.props.Nombre}</h1>
                        <a href="#">
                            <  img class="ImagenColaborador" src={this.props.img} alt="Vista Previa"/></a>
                        <h3>Descripcion</h3>
                        <p> {this.props.Descripcion}</p>
                         
</div>
                                )
    }
}


                                export default ClaseColaboradores;