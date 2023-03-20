import { useState } from "react"
import { useEffect } from "react";


export function ConversorDist() {

    const [metro, setMetro] = useState('');
    const [mm, setMm] = useState();
    const [cm, setCm] = useState();
    const [km, setKm] = useState();

    useEffect(() => {
        
        const resultadoMm = metro * 1000;
        setMm(resultadoMm);

        const resultadoCm = metro * 100;
        setCm(resultadoCm);

        const resultadoKm = metro / 1000;
        setKm(resultadoKm);

    }, [metro]) 

    return (
        <>
            <input
                type="number"
                placeholder="Digite a distância em metros"
                onChange={(evento) => setMetro(evento.target.value)}
            />
            <p>Distância em mm: {mm}</p>
            <p>Distância em cm: {cm}</p>
            <p>Distância em km: {km}</p>
        </>
    )
}