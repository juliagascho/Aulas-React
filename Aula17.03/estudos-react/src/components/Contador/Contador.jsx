import "./Contador.css";

import { useState } from "react"; // useState é uma função que cria um estado, importada do react.

export function Contador() {
  // useState é uma função que cria um estado
  // um estado é uma variável especial que vai sincronizar as mudanças na página
  // indice 0 -> estado (posição zero desse array sempre vai ser o estado)
  // indice 1 -> função que muda o estado (posição 1 do array sempre vai ser a função que muda o estado)

  // const array = useState(0); // essa função useState retorna um array que vai conter duas posições: o estado e a função que altera o estado
  // let numero = array[0]; // estado
  // let setNumero = array[1]; // função que muda o valor do estado
  //ou:
  // destruct (desestruturação) : quebra um objeto em arrays e atribui a variaveis
  let [numero, setNumero] = useState(0); // dentro do useState (VAI O VALOR INICIAL DO ESTADO)

  //incrementar
  function inc() {
    const novoNumero = numero + 1;
    setNumero(novoNumero); // meu estado agora é o novoNumero
  }

  //decrementar
  function dec() {
    setNumero(numero - 1);
  }

  // incrementar 10
  function inc10() {
    const novoNumero = numero + 10;
    setNumero(novoNumero);
  }

  // incrementar 100
  function inc100() {
    setNumero(numero + 100);
  }

  // multiplicar 3
  function mult3() {
    setNumero(numero * 3);
  }

  // divisão 2
  function div2() {
    setNumero(numero / 2);
  }

  // decrementar 50
  function dec50() {
    setNumero(numero - 50);
  }

  // decrementar 5
  function dec5() {
    setNumero(numero - 5);
  }

  //zerar
  function zerar() {
    setNumero(0);
    
  }

  
  return (
    <div className="contador">
      <h1>{numero}</h1>

      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
      <button onClick={inc10}>+10</button>
      <button onClick={inc100}>+100</button>
      <button onClick={mult3}>*3</button>
      <button onClick={div2}>/2</button>
      <button onClick={dec50}>-50</button>
      <button onClick={dec5}>-5</button>
      <button onClick={zerar}>Zerar</button>
    </div>
  );
}

// Atividade 1:
// Faça uma melhoria do contador desenvolvido em aula. Crie novas opões de incrementação e decrementarão mudando o estado do contador. Crie as seguintes opções: +10, +100, *3, /2, -50, -5. Para isso utilize botões para cada novo recurso. Para acionar as funções, utilize o evento onClick do React.
