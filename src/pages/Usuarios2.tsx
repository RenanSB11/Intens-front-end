import axios from "axios";
import { useState } from "react";

enum Estado {
	Lendo,
	ErroLer,
	Lido,
}

const Usuarios2 = function (){

    const conexaoComSucesso=function(){
        setEstado(Estado.Lido);
    }
    const conexaoComErro=function(){
        setEstado(Estado.ErroLer);
    }
    const botaoCarregarClicado = function(){
        setEstado(Estado.Lendo);
        axios.get('http://localhots:4000/api/usuarios')
        .then(conexaoComSucesso)
        .catch(conexaoComErro)
    }
    const [estado, setEstado]=useState(Estado.ErroLer)

    return(
    <>
    {(estado === Estado.Lendo)&&(
    <p>Carregando ...</p>
    )}

    {(estado===Estado.ErroLer)&&(
        <>
             <p>ERRO ao tentar carregar.</p>
            <button onClick={botaoCarregarClicado}>Carregar</button>
            </>
    )}
    {(estado ===Estado.Lido)&&(
        <>
     <h1>User2</h1>
    <ul>
        <li>real madrid</li>
        <li>liverpol</li>
        <li>milan</li>
    </ul>
    </>  
    )}

    </>
    )
};
export default Usuarios2