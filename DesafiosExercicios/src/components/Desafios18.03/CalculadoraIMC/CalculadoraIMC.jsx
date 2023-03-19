import { useState } from "react";
import "./CalculadoraIMC.css"


export function CalculadoraIMC() {
    const [imc, setImc] = useState();
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    

    // FORMULA IMC = peso / altura²

    function obterPeso(e) {
        const input = e.target;
        const valor = input.value;
        setPeso(valor);
    }

    function obterAltura(e) {
        const input = e.target;
        const valor = input.value;
        setAltura(valor);
    }

    function calculaImc() {
        const pesoFloat = parseFloat(peso.replace(',','.'));
        const alturaFloat = parseFloat(altura.replace(',','.'));
        const valor = pesoFloat / (alturaFloat ** 2);
        setImc(valor.toFixed(2));
    }
      
      
    return (
        <>
            <div className="calculadoraIMC">
                <h2>Calcule seu IMC aqui:</h2>
                <input type="text" placeholder="Digite seu peso (Kg)" onChange={obterPeso}></input>
                <input type="text" placeholder="Digite sua altura" onChange={obterAltura}></input>
              
                <br />
                <button onClick={calculaImc}>Calcular</button>
                <br />
                {imc && (
                <strong>Seu peso é de {peso}kg e você tem {altura}m, seu IMC é: {imc}</strong>
                )}
            </div>
        </>
    );
}
