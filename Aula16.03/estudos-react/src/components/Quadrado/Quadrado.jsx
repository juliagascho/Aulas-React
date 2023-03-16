import "./Quadrado.css"


export function Quadrado() {

    function quandoClicar() {
        alert("CLICOOOOOU")
    }

    function quandoMouseEntrar(evento) {
        const elemActive = evento.target;
        elemActive.style.backgroundColor = "red";
    }
    // quando tem um elemento podem ter diversos eventos (onClick, onMouseEnter). Em determinado evento no elemento a gente chama uma função que vai ser executada quando o evento ocorrer.
    // Em 'evento' pode colocar qualquer nome (as vezes aparece apenas 'e')
    // target é o elemento que acionou o evento (em DOM), que neste caso é a propria div do return - que contem os eventos
    //quadrado (poderia ser qualquer nome) e guarda a div

    function quandoMouseSair(evento) {
        const elemActive = evento.target;
        elemActive.style.backgroundColor = "blue";
    }

    function quandoClicarDuasVezes(evento) {
        const elemActive = evento.target;
        elemActive.style.backgroundColor = "orange";
    }

    return (
        <div 
            className="quadrado"
            // onClick={quandoClicar}
            onMouseEnter={quandoMouseEntrar}
            onMouseLeave={quandoMouseSair}
            onDoubleClick={quandoClicarDuasVezes}
           
        >
        </div>
    )
}