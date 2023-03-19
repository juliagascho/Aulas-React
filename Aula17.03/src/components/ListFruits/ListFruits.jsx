import { frutas } from "../../data/frutas.js";
import { useState } from "react";
import "./ListFruits.css";

export function ListFruits() {

    const [resultados, setResultados] = useState([]);  // inicia com um array vazio, esse resultado que vai mostrar lá no return

    function filtrarFrutas(evento) {
        const valor = evento.target.value;  // target diz quem chama a função, nesse caso o campo de busca, e no campo tem um valor (value)
        let busca = []; // array que vai conter todas as frutas que tiverem na minha busca, ao final do for esse vai ser o array que eu quero, o resultado
        for (let fruta of frutas) {
            let indice = fruta.nome.toLowerCase().indexOf(valor.toLowerCase());  // o valor que foi digitado no campo de busca tem um indice em nome?
            if(indice !== -1) {    //verifica se a fruta faz parte dos resultados (indice -1 não existe)
                busca.push(fruta);
            } 
        }
        setResultados(busca);  // tenho um estado de um array inicialmente vazio, então eu tenho que setar um array, nesse caso vai ser o array busca
    }

    return (
        <div className="frutas">
            <input type="text" placeholder="Digite o nome de uma fruta..." onChange={filtrarFrutas}></input>
            <br />

            <ul>
                {resultados.map(fruta => (
                <li>
                    <img src={fruta.imagem} />
                </li>
                ))}
            </ul>
        </div>
    )
//map vai pegar cada elemento do array e retornar uma coisa diferente
// {frutas.map(function(fruta){
// return (
//     <li>{fruta.nome}</li>
// )}

}



// Método feito pelo Thomas:
// export function Pesquisa(){

//     let [resultados, setResultados] = useState([]);
    
//     function getFrutas(evt){
//         let frutasResult = frutas.filter((fruta) => fruta.nome.toLowerCase().includes(evt.target.value.toLowerCase()));

//         if(evt.target.value !== ""){
//             setResultados(frutasResult.map((fruta) => {
//                 return(
//                     <div className="fruta">
//                         <h3>{fruta.nome}</h3>
//                     </div>
//                 )
//             }));
//         }else{
//             setResultados([]);
//         }
//     }

//     return (
//         <div>
//             <input className="pesquisa" type="text" placeholder="Pesquise sua fruta.." onChange={getFrutas}/>
//             {resultados}
//         </div>
//     )
// }