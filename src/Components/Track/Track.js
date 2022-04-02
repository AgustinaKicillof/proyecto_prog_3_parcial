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
        if (this.state.verMas == "aditional-info") {
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
          <img src="./img/image-default.png" alt="" />
          <h3>{this.props.dataTrack.title}</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque
            velit minus facere laboriosam voluptatem impedit ea unde labore
            optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis!
            Sint, laboriosam cum.
          </p>
          <button>Eliminar canción</button>
          <section className={`${this.state.verMas}`}>
            <p>
            Ranking: {this.props.dataTrack.position}
            </p>
            <p>
            Artista: {this.props.dataTrack.artist.name} <img src= {this.props.dataTrack.artist.picture_small} alt='artist-pic'></img>
            </p>
            <a href={this.props.dataTrack.album.link}>
            Album: {this.props.dataTrack.album.title} <img src= {this.props.dataTrack.album.cover_small} alt='album-pic'></img>
            </a>
          </section>
          <p className="vermas" onClick={()=>this.mostrar()}>{this.state.button}</p>
        </main>
      </article>
    );
  }
}

export default Track;
