import { Titulo } from "./Titulo"

export function Postagem() {

    const textoTitulo = "Atividade react";
    const nomeautor = "J. Gascho";
    const linkImagem = "https://picsum.photos/id/237/200/300"
    
    
    return (
      <section className="postagem">
        <Titulo></Titulo> 
        <h2 className="titulo">{textoTitulo.toUpperCase()}</h2>
        <img src={linkImagem} />
        <p className="paragrafo">
            Testando react pela primeira vez.
        </p>
        <small>Postagem por {nomeautor}</small>
      </section>
    );
  }

  // fiz 2 titulos, o const daqui e o Titulo que importei.