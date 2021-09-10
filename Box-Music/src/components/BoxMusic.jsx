import React, { Component } from "react";
import styled from "styled-components";

//Function
export default class LoggingButton extends Component {

  handleClick(url) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", url);
    etiquetaAudio.play();
  }
  
  render() {
    const {url, keyTrigger, color, colorHover} = this.props.Sounds;

    const Input = styled.input`
      text-align: center;
      padding: 10px;
      margin: 10px;
      border: none;
      background-color: ${color};

      &:hover {
        background-color: ${colorHover};
      }
    `;

    // Esta sintaxis nos asegura que `this` esta ligado dentro de handleClick
    return (
          <Input
            type="button"
            value={keyTrigger}
            onClick={() =>
              this.handleClick(url)
            }
          />
    );
  }
}
