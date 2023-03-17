// Titulo é o nome do componente
// Componente de função

import "./Titulo.css"

// export function Titulo() {
//   const textoTitulo = "Palavras sábias do dia";
//   
//   // A parte "visual" do componente
//   return <h1>{textoTitulo}</h1>;
// }

export function Titulo(props) {
  const textoTitulo = props.children

  let objectStyle = {
    backgroundColor: props.backgroundColor,  // background-color
    borderLeftColor: props.borderLeftColor  // border-left-color
  }

  return (
        <h1 className="titulo" style={objectStyle}>
              {textoTitulo}
        </h1>
);
};

// children -> propriedade padrão do props. Representa o texto dentro da tag.
