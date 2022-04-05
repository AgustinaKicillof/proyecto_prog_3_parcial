import React, { Component } from "react";
import Header from "../Header/Header"
import Track from "../Track/Track"

class Main extends Component {
  constructor() {
    super();
    this.state = {
      listaTracks: [],
      loadTracks: false,
      cantidadTarjetas: 20
    };
  }
  componentDidMount(){
    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10")
    .then((response)=>response.json())
    .then((infoMusica)=>{
      console.log(infoMusica.data)
      this.setState({
        listaTracks: infoMusica.data,
        loadTracks: true 
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
        loadTracks: true, 
        cantidadTarjetas: this.state.cantidadTarjetas+10
      })
    })
  }
  render() {
    return (
      <React.Fragment>
      <Header agregarMas={()=>this.agregarMas()}/>
      <section className="card-container">
        {this.state.loadTracks?(
        this.state.listaTracks.map((cancion,idx)=>( //si es un si devolve esto//
          <Track key={cancion.title + idx} dataTrack={cancion}/>
        ))
        ): <h2>Cargando...</h2>// los : =else
      } 
        
      </section>
      </React.Fragment>
    );
  }
}

export default Main;
