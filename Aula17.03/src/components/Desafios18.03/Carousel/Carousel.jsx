// 2) Crie um componente Carrossel que possui dados que serão os itens (array) do carrosel (objeto com imagem e titulo). Deve haver os botões de avançar e voltar pelos itens do carrossel.

import { useState } from "react";
import { dadosCarousel } from "../../../data/dadosCarousel";

let index = 0;

export function Carousel() {

    const [indexImg, setIndexImg] = useState(index);
    
    function incArray() {
        index = index + 1
        if(index < dadosCarousel.length){
            setIndexImg(index)  
            // console.log(dadosCarousel.length)
            // console.log(index)
            // console.log(newIndex)  
            // console.log(indexImg) 
        } else {
            index = 0
            setIndexImg(index) 
        }   
    }

    function decArray() {        
        index = index - 1        
        if(index > 0){
            setIndexImg(index)            
        } else {
            index = 4
            setIndexImg(index) 
        }      
    }

    return (
        <div>
          <img src={dadosCarousel[indexImg].img} />
          <p>{dadosCarousel[indexImg].tit}</p>
          <button onClick={decArray}>Voltar</button>
          <button onClick={incArray}>Avançar</button>          
        </div>
      );
}

