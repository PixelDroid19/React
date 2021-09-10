import React, { useState, useEffect} from "react";

let Url = '';

export default function Sounds(){  
  const [UrlC, setUrl] = useState(true);

  const Minectaft = () =>{
    if(UrlC === true){
      Url = 'https://heroku-mini-backet.herokuapp.com/bankOne';
      console.log(Url)
    }else{
      Url = 'https://heroku-mini-backet.herokuapp.com/BotonesEstadoTwo'
      console.log(Url) 
    }
  }

  useEffect(()=>{
    Minectaft()
  })

  return(
    Minectaft
    )
}