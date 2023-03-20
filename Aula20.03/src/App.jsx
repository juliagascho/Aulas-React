import { CalculadoraIMC } from "./components/CalculadoraIMC/CalculadoraIMC";
import { CalculadoraPorcentagem } from "./components/CalculadoraPorcentagem/CalculadoraPorcentagem";
import { ConversorDist } from "./components/ConversorDist/ConversorDist";
import { ConversorTemp } from "./components/ConversorTemp/ConversorTemp";
import { Dicionario } from "./components/Dicionario/Dicionario";


export function App() {
  return (
    <>
      {/* <ConversorTemp /> */}
      {/* <ConversorDist /> */}
      {/* <Dicionario /> */}
      <CalculadoraIMC />
      <CalculadoraPorcentagem />
    </>
  );
}
