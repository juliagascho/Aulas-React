import { ListaCompras } from "./components/ListaCompras/ListaCompras";
import { ListaFuncionarios } from "./components/ListaFuncionarios/ListaFuncionarios";
import { NavBar } from "./components/NavBar/NavBar";
import { ListaAlunos } from "./components/Exercicios15.03/ListaAlunos";
import { Numeros } from "./components/Exercicios15.03/Numeros";
import { Quadrado } from "./components/Quadrado/Quadrado";
import { Contador } from "./components/Contador/Contador";
import { Cadastro } from "./components/Cadastro/Cadastro";
import { ListFruits } from "./components/ListFruits/ListFruits";
import { Sorteio } from "./components/Sorteio/Sorteio";
import { Abas } from "./components/Abas/Abas";
import { QuestaoQuiz } from "./components/QuestaoQuiz/QuestaoQuiz";

export function App() {
  return (
    <>
      {/* <ListaCompras /> */}
      {/* <ListaFuncionarios /> */}
      {/* <NavBar logado={true} nomeUsuario="José" />
      <NavBar logado={false} /> */}
      {/* <ListaAlunos />
      <Numeros numero={8}/> */}
      {/* <Quadrado /> */}
      {/* <Contador /> */}
      {/* <Cadastro /> */}
      {/* <ListFruits /> */}
      {/* <Sorteio /> */}
      {/* <Abas /> */}
      <QuestaoQuiz />
    </>
  );
}
