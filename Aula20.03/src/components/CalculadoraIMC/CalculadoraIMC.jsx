import './CalculadoraIMC.css'
import { useEffect, useState } from "react";

export function CalculadoraIMC() {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState();

    useEffect (() => {
        
        const resultadoImc = peso / (altura ** 2)
        setImc(resultadoImc);

    }, [peso, altura]) 

    return (
        <div className="calculadoraIMC">
                <h2>Calcule seu IMC aqui:</h2>
                <input 
                    type="number" 
                    placeholder="Digite seu peso (Kg)" 
                    onChange={(evento) => setPeso(evento.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Digite sua altura" 
                    onChange={(evento) => setAltura(evento.target.value)}
                />
                <br />
                {(imc !== Infinity && !isNaN(imc)) && <p>O seu IMC é: {imc.toFixed(2)}</p>}
                
        </div>
    )
}