import { ListaCompras } from "./components/ListaCompras/ListaCompras";
import { ListaFuncionarios } from "./components/ListaFuncionarios/ListaFuncionarios";
import { NavBar } from "./components/NavBar/NavBar";
import { ListaAlunos } from "./components/Exercicios15.03/ListaAlunos";
import { Numeros } from "./components/Exercicios15.03/Numeros";

export function App() {
  return (
    <>
      {/* <ListaCompras /> */}
      {/* <ListaFuncionarios /> */}
      {/* <NavBar logado={true} nomeUsuario="José" />
      <NavBar logado={false} /> */}
      <ListaAlunos />
      <Numeros numero={8}/>
    </>
  );
}
