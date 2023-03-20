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

    function limpar() {
        setPeso("");
        setAltura("");
        setImc("");
    }
      
      
    return (
        <>
            <div className="calculadoraIMC">
                <h2>Calcule seu IMC aqui:</h2>
                <input type="text" placeholder="Digite seu peso (Kg)" onChange={obterPeso} value={peso}></input>
                <input type="text" placeholder="Digite sua altura" onChange={obterAltura} value={altura}></input>
              
                <br />
                <button onClick={calculaImc}>Calcular</button>
                <button onClick={limpar}>Limpar</button>
                <br />
                {(imc !== Infinity && !isNaN(imc)) && <p>O seu IMC é: {imc.toFixed(2)}</p>}
            </div>
        </>
    );
}
