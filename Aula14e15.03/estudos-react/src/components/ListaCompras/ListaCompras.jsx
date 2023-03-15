import "./ListaCompras.css";

const compras = [
  "Batata palha",
  "Batata frita pronta",
  "Batata doce",
  "Batata chips",
];

/* A função map sempre vai retornar algo, e esse algo vai ser um onovo array. Resultado do map da linha 23:
const elementosCompras = [
    <li key="0">Batata palha</li>,
    <li key="1">Batata frita pronta</li>,
    <li key="2">Batata doce</li>,
    <li key="3">Batata chips</li>,
]
*/

const produtos = [
  { cod: 1, nome: "Batata palha", quantidade: 5, precoUnitario: 5.5 },
  { cod: 2, nome: "Batata frita pronta", quantidade: 3, precoUnitario: 10.5 },
  { cod: 3, nome: "Batata doce", quantidade: 10, precoUnitario: 20 },
  { cod: 4, nome: "Batata chips", quantidade: 5, precoUnitario: 15 },
];
// cada objeto representa um produto


export function ListaCompras() {
  const elementosCompras = compras.map((nomeCompra, index) => {
    // função map sabe que o primeiro parametro é o valor do array e o segundo é o index (posição do valor)
    return <li key={index}>{nomeCompra}</li>;
    //nomeCompra representa cada elemento da array compras
  });

  const elementosProdutos = produtos.map((produto) => {
    return <div key={produto.cod} className="card-compra">   
        <h2>{produto.nome}</h2>
        <p>Quantidade: {produto.quantidade}</p>
        <p>Subtotal: R${produto.quantidade * produto.precoUnitario}</p>
    </div>
  })
  // a key nesse caso vai na div que é a tag mais superior, a que vai repetir, e ao invés de usar o index generico, se usou produto.cod

  return (
    <>
      <h2>Lista de compras</h2>
      <ul>{elementosCompras}</ul>
      <hr />
      <h2>Lista de produtos</h2>
      <div>{elementosProdutos}</div>
    </>
  );
}
