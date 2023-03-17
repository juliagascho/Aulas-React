import "./Abas.css";
import { useState } from "react";

export function Abas() {
    
    const [aba, setAba] = useState("home");

    function irParaHome () {
        // definindo estado da aba ativa para home
       setAba("home"); 
    }
    function irParaPerfil () {
       setAba("perfil"); 
    }
    // para a aba ajuda foi feito direto no return com uma arrow para exemplificar

    let conteudoAba; // vai conter o layout da aba selecionada
    if( aba === "home"){
        conteudoAba = <div>HOME</div>;
    } else if (aba === "perfil"){
        conteudoAba = <div>PERFIL</div>;
    } else if (aba === "ajuda"){
        conteudoAba = <div>AJUDA</div>;
    }

    return (
        <div>
        <button onClick={irParaHome}>Home</button>
        <button onClick={irParaPerfil}>Perfil</button>
        <button onClick={() => setAba("ajuda")}>Ajuda</button> 
        <hr />
        {conteudoAba}
        </div>
    );
}

//     let aba = "perfil";

//     if (aba === "home"){
//         return (
//             <div>
//                 <button>Home</button>
//                 <button>Perfil</button>
//                 <button>Ajuda</button>
//                 <hr />
//                 <div>HOME</div>
//             </div>
//         );
//     } else if (aba === "perfil"){
//         return (
//             <div>
//                 <button>Home</button>
//                 <button>Perfil</button>
//                 <button>Ajuda</button>
//                 <hr />
//                 <div>PERFIL</div>
//             </div>
//         );
//     } else if (aba === "ajuda"){
//         return (
//             <div>
//                 <button>Home</button>
//                 <button>Perfil</button>
//                 <button>Ajuda</button>
//                 <hr />
//                 <div>AJUDA</div>
//             </div>
//         );
//     };
// };
