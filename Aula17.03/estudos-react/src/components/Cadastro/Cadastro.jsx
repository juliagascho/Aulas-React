import "./Cadastro.css"
import { useState } from "react";

export function Cadastro() {

    const [nome, setNome] = useState("");
    function obterNome(evento) {
        const campo = evento.target; // pega o campo, target chamei de campo
        const valor = campo.value; //value pega o valor que foi digitado no campo, campo tem um valor
        setNome(valor); //passo pro setnome o valor do campo
    }

    const [email, setEmail] = useState("");
    function obterEmail(evento) {
        const campo = evento.target;
        const valor = campo.value;
        setEmail(valor);
    }

    // const [email, setEmail] = useState("");
    // function obterEmail(evento) {
    //     setEmail(evento.target.value);
    // } 
    
    const [resumo, setResumo] = useState("");
    function obterResumo(evento) {
        setResumo(evento.target.value);
    }

    // const [resumo, setResumo] = useState("");
    // function obterResumo(evento) {
    //      const textarea = evento.target;
    //      const valor = textarea.value;
    //      setResumo(valor);
    // }

    return(
        <div className="container">
            <strong className="strongTitulo">Formulário de cadastro</strong>
            <br/>
            <input className="nome" type="text" placeholder="Digite seu nome" onChange={obterNome} />
            <br/>
            <input className="email" type="email" placeholder="Digite seu e-mail" onChange={obterEmail} />
            <br/>
            <textarea className="resumo" placeholder="Resumo de descrição do usuário" onChange={obterResumo} />
            <br/>
            <strong>{nome}</strong>
            <strong>{email}</strong>
            <strong>{resumo}</strong>
        </div>
    )
}

//onChange evento que vai chamar a função cada vez que o campo for alterado