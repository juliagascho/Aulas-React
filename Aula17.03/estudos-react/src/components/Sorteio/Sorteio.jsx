import { useState } from "react";
import "./Sorteio.css";

export function Sorteio() {

    const [numero, setNumero] = useState(0)

    function sortear(){
        let numeroSorteado = Math.floor(Math.random() * 100)
        setNumero(numeroSorteado);
    }
    
    //ou
    // function sortear(numero){
    //     setNumero(numero = Math.floor(Math.random()*100));
    // }

    let color = "black"; //objeto de estilo
    if(numero %2 === 0){
        color = "green";
    }else {
        color = "orange";
    }
    const objectStyle = { color };

    //método professor:
    let h3Class;
    if(numero %2 === 0){
        h3Class = "par";
    }else {
        h3Class = "impar";
    }

    console.log("Componente reconstruiu " + new Date().toTimeString()); //diz que o componente reconstruiu e em qual horário - só no console

    return (
    <div className="sorteio">
      <h1 className="titulo">Sorteio</h1>  
      <h1 className="numero" style={objectStyle}>{numero}</h1>
      <h3 className={h3Class}>{numero}</h3>
      <button onClick={sortear}>Sortear</button>   
    </div>
  );
}

// no botão tem que chamar a função quando clicar
// no campo onde vai aparecer o resultado, tem que colocar o estado