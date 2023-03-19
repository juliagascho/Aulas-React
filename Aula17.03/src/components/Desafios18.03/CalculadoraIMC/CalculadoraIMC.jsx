import { useState } from "react";


export function CalcImc() {
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
      
    // function calculaImc() {
    //     const valor = peso / altura ** 2;
    //     setImc(valor.toFixed(2));
    //     console.log(valor)
    // }
    
    return (
        <>
            <div>
                <input type="text" placeholder="Digite seu peso (Kg)" onChange={obterPeso}></input>
                <input type="text" placeholder="Digite sua altura" onChange={obterAltura}></input>
                <br />
                <strong>Seu peso é: {peso} Kg</strong>
                <br />
                <strong>Sua altura é: {altura}m</strong>
                <br />
                <button onClick={calculaImc}>Calcular</button>
                <br />
                <strong>Seu IMC é: {imc}</strong>
            </div>
        </>
    );
}
