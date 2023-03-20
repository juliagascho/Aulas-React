// 3) Crie um componente CadastroPessoas ou Desafio3 que:
// Possua 4 inputs: email, nome, cpf, salario;
// Ao clicar em adicionar estes dados devem ser inseridos em um array de objetos;
// Estes dados no array devem ser listados logo abaixo num formato de tabela;
// Deve haver uma coluna com um botão que ao ser pressionado remove o objeto (pessoa) do array, alterando, dessa forma as linhas da tabela;

import { useState } from "react"
import "./Desafio3.css"

export function Desafio3() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");    
    const [salario, setSalario] = useState("");
    const [listaPessoas, setListaPessoas] = useState([]);

    function adicionarPessoa() {
        const novaPessoa = {
            nome: nome, // recebe o que vai no input do nome
            email: email,
            cpf: cpf,
            salario: salario,
        };

        // listaPessoas.push(novaPessoa); não funciona porque o array tem que ser novo ou diferente do anterior, não vai atualizar
        // a gente tem que pegar os dados novos, e juntas com os dados que ja exiswtiam na tabela

        // gerar um novo array que pega os elementos da lista e junta com a nova pessoa:
        // spread = ... -> vai adicionar a nova pessoa na lista de pessoas
        // ...listaPessoas traz a lista já existente do array, e p novaPessoa adiciona a nova pessoa nesse array
        // tem que ser um array novo, senão ele não entende porque atualizar:
        const novoArray = [...listaPessoas, novaPessoa];
        setListaPessoas(novoArray);
    }

    function removerPessoa(objeto) {
        const novoArray = listaPessoas.filter((elemento) => elemento !== objeto); // gera uma lista com os outros objetos do array, sem este objeto que eu cliquei
        setListaPessoas(novoArray);
    }

    return (
        <div className="cadastro-pessoas">
            <input 
                type="text" 
                placeholder="Nome" 
                onChange={(evento) => setNome(evento.target.value)}
                value={nome}
            /> <br/>
            <input 
                type="email" 
                placeholder="Email" 
                onChange={(evento) => setEmail(evento.target.value)}
                value={email}
            /> <br/>
            <input 
                type="text" 
                placeholder="CPF" 
                onChange={(evento) => setCpf(evento.target.value)}
                value={cpf}
            /> <br/>
            <input 
                type="number" 
                placeholder="Salário" 
                onChange={(evento) => setSalario(evento.target.value)}
                value={salario}
            /> <br/>
            <button onClick={adicionarPessoa}>Adicionar</button>
            <hr/>
            <table className="tabela-pessoas">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Salário</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPessoas.map((elemento, index) => {
                        return (
                            <tr key={index}>
                                <td>{elemento.nome}</td>
                                <td>{elemento.email}</td>
                                <td>{elemento.cpf}</td>
                                <td>{elemento.salario}</td>
                                <td>
                                    <button onClick={() => removerPessoa(elemento)}>
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        )
                    })}                     
                </tbody>
            </table>
        </div>
    )
}

// dentro do map: primeiro parametro pega os valores do objeto e o segundo parametro é a posição numerica daquele objeto no array

// tem que fazer a arrow dentro do obotão de remover passando elemento, pra que ele saiba o que remover
// se nao fazer a arrow ele remove automatico