import "./QuestaoQuiz.css";
import { useState } from "react";

const pergunta = {
    enunciado: "Qual é a capital de Brunei?",
    alternativas: [
        "Fortaleza",
        "Bandar Seri Begawan",
        "Jakarta",
        "Kuala Lumpur",
    ],
    alternativaCorreta: "Bandar Seri Begawan",
}

let qtdeTentativas = 0; // exemplo do professor usando outro estado

export function QuestaoQuiz(){

    const [statusQuiz, setStatusQuiz] = useState("pendente"); // inicialmente tá pendente, o usuario precisa responder - então ele vai mostrar a página com as perguntas e as alternativas

// pendente = precisa marcar uma alternativa
// acertou = marcou a alternativa c0orreta
// errou = marcou a alternativa errada

    function checarResposta(altMarcada){
        if(altMarcada === pergunta.alternativaCorreta){
            setStatusQuiz("acertou");
        } else {
            setStatusQuiz("errou");
            qtdeTentativas = qtdeTentativas + 1;            
            if(qtdeTentativas === 3){
                setStatusQuiz("acabou");
            }
        }
    }

    // no estado pendente vai mostrar o enunciado e li's com as alternativas:
    // vai ter um clique para cada alternativa
    // ele vai mapear a primeira altrnativa, e no clique ele vai verificar se ta certo ou errado. e vai fazer isso com todas as alternativas. ele vai chamar checarresposta para cada alternativa, que vai verificar se acertou ou errou.
    if(statusQuiz === "pendente"){  
    return (
        <div>
            <h3>{pergunta.enunciado}</h3>
            <ol type="a">
                {pergunta.alternativas.map((alt) => (
                <li className="alternativa" onClick={() => checarResposta(alt)}> 
                    {alt}
                </li>
                ))}                
            </ol>
        </div>
        )
    //esse alt representa uma alternativa uma por uma, os elementos da array
    }else if(statusQuiz === "acertou"){
        return (
            <div>
                <h3>Parabéns, você acertou!!</h3>
           </div> 
        )   
    }else if(statusQuiz === "errou" && qtdeTentativas === 1){
        return (
            <div>
                <h3>Errou!! Você tem mais 2 tentativas!!</h3>
                <button onClick={() => setStatusQuiz("pendente")}>Tente novamente</button>
           </div> 
        )
    }else if(statusQuiz === "errou" && qtdeTentativas === 2){
        return (
            <div>
                <h3>Errou!! Você tem mais 1 tentativa!!</h3>
                <button onClick={() => setStatusQuiz("pendente")}>Tente novamente</button>
           </div> 
        )
    }else if(statusQuiz === "acabou"){
        return (
            <div>
                <h3>Acabaram as suas chances!!!</h3>                
           </div> 
        ) 
    }
}