import { useState } from "react"
import { useEffect } from "react";
import "./ConversorTemp.css"

export function ConversorTemp() {

    const [tempC, setTempC] = useState(0);
    const [tempF, setTempF] = useState(0);
    const [tempK, setTempK] = useState(0);

    // efeitos: ações secundárias
    useEffect(() => {
        // quando a tempC for alterada, essa função/efeito vai ser executado automaticamente, sem precisar apertar em nada
        const resultadoF = tempC * 1.8 + 32;
        setTempF(resultadoF);

        const resultadoK = Number(tempC) + 273; //number foi colocado porque tava ficando como string
        setTempK(resultadoK);
    }, [tempC]) //array de dependencias

    // useEffect vai rodar efeitos -> reage a mudanças -> precisa ser estado
    // passa uma arrow function, tem que dizer pra ele quando ele vai reagir e mostrar o efeito
    // toda vez que digitar no campo tempC (segundo parametro), vai executar a função que está no primeiro parametro

    //para brincar:
    useEffect(() => {
        document.title = tempF
    }, [tempC])

    return(
        <div>
            <input type="number"
             placeholder="Temperatura em °C"
             onChange={(evento) => setTempC(evento.target.value)}
        />
        <p>Valor digitado: {tempC}°C</p>
        <p>Temperatura em Fahrenheit: {tempF}°F</p>
        <p>Temperatura em Kelvin: {tempK}K</p>
        </div>
    )
}