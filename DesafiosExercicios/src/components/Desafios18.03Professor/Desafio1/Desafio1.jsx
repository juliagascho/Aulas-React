import { useState } from "react"


export function Desafio1() {

    //Capturando dados do inpu:
    // -> onChange
    // -> função para coletar o valor
    // estado para armazenar:

    //onChange e função feitos no return

    // estado para armazenar:
    const [peso, setPeso] = useState(""); // pode começar com string vazia para aparecer o placeholder
    const [altura, setAltura] = useState(0); // ou pode começar com 0, vai aparecer 0 no input inicial
    const [imc, setImc] = useState(-1);

    function calcularImc() {
        const resultado = peso / (altura * altura);
        setImc(resultado);
    }

    function limpar() {
        setPeso("");
        setAltura(0);
        setImc(-1);
    }

    return (
        <div>
            <h3>Calculadora IMC</h3>
            <input 
            type="number" 
            placeholder="Digite o peso" 
            onChange={(evento) => setPeso(evento.target.value)} 
            value={peso}
            />
            <input 
            type="number" 
            placeholder="Digite a altura" 
            onChange={(evento) => setAltura(evento.target.value)}
            value={altura} 
            />
            <br/>
            <button onClick={calcularImc}>Calcular</button>
            <button onClick={limpar}>Limpar</button>
            {imc > -1 && <p>O seu IMC é: {imc.toFixed(2)}</p>}
        </div>
    )
}

// value = {peso} e value = {altura} é para o input entender a função limpar e limpar os campos 