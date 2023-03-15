// trazer de outro arquivo/bibolioteca alguma função ou variável
// a função createRoot está dentro do arquivo react-dom/client (biblioteca externa)
// biblioteca react-dom está dentro da pasta mode_nodules e o arquivo client dentro da biblioteca
// import { createRoot } from "react-dom/client"; // precisa importar o que você quer usar do react nesse arquivo
// import { Mensagem } from "./components/Mensagem";
// import { Titulo } from "./components/Titulo"; // caminho completo para importar, para importar de forma simplificada, começa a digitar o nome da função onde quer chamar, e completa com primeira opção que o vs dá

// // Linka o arquivo css ao projeto React:
// import './styles.css';

// // selecionando a div na pagina
// const rootElement = document.getElementById("root");

// // a div root será a base da aplicação
// const root = createRoot(rootElement);

// // inserimos o conteudo da pagina

// root.render(
//   <div>
//     <Titulo></Titulo>
//     <Mensagem></Mensagem>
//   </div>
// );

// let nome = "Batata";

// root.render(
//     <section>
//         <h1>Hello world!</h1>

//         <section>
//             <h1>React é top</h1>
//             <img src="https://picsum.photos/200" />
//             <p>
//                 Olá, tudo bem? <br /> <b>{nome.toUpperCase()}</b>
//             </p>
//             <p>Soma: {1+1}</p>
//         </section>
//     </section>
// );

// html dentro do javascript:
// JSX = JavaScript Extension -> chamado de açúcar sintático
// no fim o HTML é convertido para Javascript (por baixo dos panos)

// dentro das chave4s podemos escrever expressões javascript



// ATIVIDADE:

import { createRoot } from "react-dom/client"; 
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";

// Linka o arquivo css ao projeto React:
import './styles.css';

// selecionando a div na pagina
const rootElement = document.getElementById("root");

// a div root será a base da aplicação
const root = createRoot(rootElement);

// inserimos o conteudo da pagina

root.render(
  <div>
    <Blog></Blog>
    <Footer></Footer>
  </div>

);
