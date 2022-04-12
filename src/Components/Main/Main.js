import React, { Component } from "react";
import Header from "../Header/Header";
import Track from "../Track/Track";
import './main.css'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      listaTracks: [],
      listaBuscar: [],
      loadTracks: false,
      cantidadTarjetas: 20,
      orden: 'Columnas',
      button: 'Ordenar por filas',
    };
  }
  componentDidMount(){
    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10")
    .then((response)=>response.json())
    .then((infoMusica)=>{
      console.log(infoMusica.data)
      this.setState({
        listaTracks: infoMusica.data,
        loadTracks: true,
        listaBuscar: infoMusica.data,
      })
    })
  }
  agregarMas(){
    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit="+ this.state.cantidadTarjetas)
    .then((response)=>response.json())
    .then((infoMusica)=>{
      console.log(infoMusica.data)
      this.setState({
        listaTracks: infoMusica.data,
        listaBuscar: infoMusica.data,
        loadTracks: true, 
        cantidadTarjetas: this.state.cantidadTarjetas+10
      })
    })
  }
  eliminarTrack(idBorrado){
    let listaFiltrada = this.state.listaTracks.filter(cancion=>cancion.id !== idBorrado) 
    this.setState({
      listaTracks: listaFiltrada,
      listaBuscar: listaFiltrada
    })
  }
  buscarTarjetas(dato){ //dato es lo que pongo en el buscador
    let listaFiltrada = this.state.listaBuscar.filter(cancion=>cancion.title.toLowerCase().includes(dato.toLowerCase())) 
    this.setState({
      listaTracks: listaFiltrada
    })
  }

  reordenar(){
    if (this.state.orden === 'Filas'){
      this.setState({
        orden: 'Columnas',
        button: 'Ordenar por filas'
      })
    }else{
      this.setState({
        orden: 'Filas',
        button: 'Ordenar por columnas',
      })
      
      }
    
  }

  render() {
    return (
      console.log(this.state.orden),
      <React.Fragment>
      <Header agregarMas={()=>this.agregarMas()} buscarTarjetas={(dato)=>this.buscarTarjetas(dato)} reordenar={()=>this.reordenar()}/>
      <section className={this.state.orden==="Filas"?"card-contanier-row":"card-container-column"}>
        {this.state.loadTracks?(
        this.state.listaTracks.map((cancion,idx)=>( //si es un si devolve esto//
          <Track eliminarTrack={(idBorrado)=>this.eliminarTrack(idBorrado)} key={cancion.title + idx} dataTrack={cancion} orden={this.state.orden}/>
        ))
        ): <h2 className="loader-text">Cargando...</h2>// los : =else
      }   
      </section>
      </React.Fragment>
    );
  }
}

export default Main;
