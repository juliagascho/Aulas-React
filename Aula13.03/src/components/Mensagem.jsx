//nome da função começando com letra maiuscula indica que é um componente
// export define que a função pode ser importada
export function Mensagem() {

    const textoTitulo = "As batatas";
    const nomeautor = "J. Almir";
    const linkImagem = "https://picsum.photos/id/237/200/300";
    
    
    return (
      <section className="mensagem">
        <h2 className="titulo">{textoTitulo.toUpperCase()}</h2>
        <img src={linkImagem} alt="" />
        <p className="paragrafo">
            Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Detraxit consequat et quo num tendi nada.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Quem num gosta di mé, boa gentis num é.
        </p>
        <small>Esta frase foi criada por {nomeautor}</small>
      </section>
    );
  }