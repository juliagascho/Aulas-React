// Trazer de outro arquivo/biblioteca alguma função ou variável
import { createRoot } from "react-dom/client";
import { Blog } from "./components/Blog/Blog";
import { ListMusic } from "./components/ListMusic/ListMusic";
import { FooterContainer } from "./components/Footer/index";
import { Mensagem } from "./components/Mensagem/Mensagem";
import { Postagem } from "./components/Postagem/Postagem";
import { Titulo } from "./components/Titulo/Titulo";
import { Task } from "./components/Task/Task"


// Linka o arquivo css ao projeto React
import "./styles.css";

// Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement);

// Inserimos o conteúdo da página
root.render(
  <div>
    {/*<Titulo></Titulo>
    <Mensagem></Mensagem>
    <hr />
    <Postagem></Postagem>
    <hr />
    <Blog></Blog>
    <hr/>
    <Footer></Footer>*/} 

    <Titulo borderLeftColor="red" backgroundColor="#FF000022">Músicas</Titulo>
    <ListMusic></ListMusic>

    <Titulo borderLeftColor="black" backgroundColor="pink">Tasks</Titulo>
    <Task title="Beber água" status="Pendente" deadline="14/03/2023 12:00"/>
    <Task title="Marcar reunião" status="Feito" deadline="23/03/2023 12:00"/>
    <Task title="Correr" status="Atrasado" deadline="04/03/2023 12:00"/>
    
    <Titulo>
      A Emma é linda.
    </Titulo>

    <FooterContainer></FooterContainer>

  </div>
);
// passa os valores por meio dos atributos
// recebe os valores por meio de props.atributo

// let nome = "Almir";

// root.render(
//   <section>
//     <h1>React é top</h1>
//     <img src="https://picsum.photos/200" />
//     <p>
//       Olá, tudo bem? <br /> <b>{nome.toUpperCase()}</b>
//     </p>
//     <p>Soma: {1 + 1}</p>
//   </section>
// );

// JSX = Javascript Extension
// No fim o HTML é convertido para Javascript (por baixo dos panos)
// JSX = Açúcar Sintático

// Dentro das chaves podemos escrever expressões JS!
