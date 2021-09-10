import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
let i = 0;


const Palabras = () =>{
    //Estado
     const [Words, setWords] = React.useState([])

    //Hooks UseEffect
    React.useEffect(()=>{
        obtenerDatos();
    }, [])//Evita un bucle infinito

    const obtenerDatos = async (e = random()) =>{
        const res = await fetch(Url)
        const data = await res.json()
        setWords(data.quotes[e])
    }

    //Function Words dRandom
    const Wordswitch = () =>{
        i = random();
        obtenerDatos(i)
    }

    //Function Random
    const random = () =>{
       return Math.floor((Math.random() * 99) + 1);
    }

    const randomColor = () =>{
        let Color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        return Color;
    }

    
    const BoxPalabras = styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    display: grid;
    padding: 10px;
    background-color: ${randomColor()};
    position: absolute;
    width: 30%;
    height: auto;
    top:30%;
    left: 35%;
    `;

    const Button = styled.button`
        border:none;
        background-color: #191934;
        margin-top: 10px;
        width:80px;
        height:30px;
    &:hover{
        background-color: #77767c;
    }
    
    `;
   
 return(
        <BoxPalabras>
            <div>
                <p>{Words.quote}</p>
                <span>{Words.author}</span>
            </div>

            <Button onClick={()=>{Wordswitch()}}>Cambio</Button>
        </BoxPalabras>
    )
}

export default Palabras