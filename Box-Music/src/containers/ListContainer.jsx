import React, { Component } from "react";
import styled from "styled-components";
import BoxSound from "../components/BoxMusic";
import UrlBox from "../Hooks/SwitchCustom"

//Sound
let Url = 'https://heroku-mini-backet.herokuapp.com/bankOne',
    Url1 ='https://heroku-mini-backet.herokuapp.com/bankOne',
    Url2 = 'https://heroku-mini-backet.herokuapp.com/BotonesEstadoTwo';


    if(localStorage.getItem('Url') !== null){
      Url = localStorage.getItem('Url');
    }else {
      Url = 'https://heroku-mini-backet.herokuapp.com/bankOne';
    }

//Function
export default class LoggingButton extends Component { 
  constructor(){
      super();
      this.state = {
          Sound: []
      } 
  }

  async componentDidMount(){
       const res = await fetch(Url);
       const data = await res.json();
       this.setState({Sound:data})
       console.log(data);
  }

  handleClick(url) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", url);
    etiquetaAudio.play();
  }

  render() {

    const DivMain = styled.div`
      display: grid;
      width:80%;
      grid-template-columns:80% 20%;
    `;

    const Div = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      background-color: #8cb639;
      text-align: center;
      max-width: 500px;
      margin: 0 auto;`

    const Switch = styled.input`
        width:100%;
        padding:5px;
    `;
    
    // Esta sintaxis nos asegura que `this` esta ligado dentro de handleClick
    return (
      <DivMain>
        <Div>
        {
            this.state.Sound.map((Sound, index)=>{
                return(
                    <BoxSound 
                    key={`${Sound}-${index}`}
                    Sounds={Sound}
                    />
                   
                )
            })
        }
        </Div>
        <div>
          <button onClick={()=>{
              if(Url === Url1){
              localStorage.setItem('Url', Url2);
              window.location="ReactDOM.render()"
            }else if(Url !== Url1){
              localStorage.setItem('Url', Url1);
              window.location="ReactDOM.render()"
            }
          }
          }>Cambio</button>
        </div>
      </DivMain>
    );
  }
}