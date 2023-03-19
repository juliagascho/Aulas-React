//- Crie um componente que recebe uma prop numero, e mostra se é par ou ímpar;

import "./Numeros.css";

export function Numeros({numero}) {
    
    let mensagem;

    if (numero % 2 == 0){
        mensagem = <p>O número é par!</p>
    } else {
        mensagem = <p>O número é ímpar!</p>
    }
    return (
        <div className="mensagem">{mensagem}</div>
    );
};