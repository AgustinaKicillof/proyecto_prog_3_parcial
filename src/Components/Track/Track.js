import React, { Component } from "react";
import "./track.css"

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
          verMas: "aditional-info", //como se muestra original
          button: "Ver más",
        };
        
      }
      
      mostrar(){
        if (this.state.verMas === "aditional-info") {
          this.setState({
            verMas: "mostrar",
            button: "Ver menos"
          })
        } else {
          this.setState({
            verMas: "aditional-info",
            button: "Ver más"
          })
        }
      }
  render() {
    return (
      <article>
        <section className="navigation">
          <div>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
          <i className="far fa-window-close"></i>
        </section>
        <main>
          
          <h3 className="title-song">{this.props.dataTrack.title}</h3>
          <img src= {this.props.dataTrack.album.cover_medium}alt='artist-pic'/>
          <h4 className="description">
          Artista: {this.props.dataTrack.artist.name} 
          </h4>
          <button className="boton-eliminar" onClick={()=>this.props.eliminarTrack(this.props.dataTrack.id)}>Eliminar canción</button>
          <section className={`${this.state.verMas}`}>
            <p>
            Ranking: {this.props.dataTrack.position}
            </p>
            <p>
            
            </p>
            <a href={this.props.dataTrack.album.link}>
            Album: {this.props.dataTrack.album.title} 
            </a>
            <p>
            Duration: {this.props.dataTrack.duration} segundos
            </p>
          </section>
          <p className="vermas" onClick={()=>this.mostrar()}>{this.state.button}</p>
        </main>
      </article>
    );
  }
}

export default Track;















//<img src= {this.props.dataTrack.artist.picture_small} alt='artist-pic'></img>