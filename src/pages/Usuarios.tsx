import { useEffect, useState } from 'react';
import Usuario from '../models/Usuario';
import UsuariosService from '../services/Usuarios';

const UsuariosPage = function () {

  enum Estado {
    Lendo,
    ErroLer,
    Lido,
    Criar,
    Salvando,
    Criado,
    ErroCriar,
  };
  
  
  const [estado, setEstado] = useState<Estado>(Estado.Lendo);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const botaoNovoUsuarioClicado = function (){
    setEstado(Estado.Criar)
  };
  const botaoSalvarClicado = function(){
    setEstado(Estado.Salvando)
    setEstado(Estado.Criado)
    setEstado(Estado.Criar)
  }
  const botaoCarregarClicado = function (){};
  const botaoCancelarClicado = function (){
    setEstado(Estado.Lendo)
    setEstado(Estado.Criar)
  };

  useEffect(function () {
    UsuariosService.lerTodos(
      function (usuarios) {
        setUsuarios(usuarios);
        setEstado(Estado.Lido);
      },
      function () {
        setEstado(Estado.ErroLer);
      }
    );
  }, [Estado.ErroLer, Estado.Lido]);

  return (
    <>
      {(estado === Estado.Lendo) && (
        <p>Carregando...</p>
      )}

      {(estado === Estado.ErroLer) && (
        <>
          <p>ERRO! Não foi possível carregar.</p>
          <button onClick={botaoCarregarClicado}>Carregar</button>
        </>
      )}

      {((estado === Estado.Lido) || (estado===Estado.Criar) || (estado===Estado.Salvando)) && (
        <>
          <h1>Usuários</h1>
          <ul>
            {usuarios.map(function (usuario) {
              return <li>{usuario.nome}</li>
            })}
          </ul>
          <button onClick={botaoNovoUsuarioClicado}>Novo Usuario</button>
        </>
      )}
                {(estado===Estado.Criado)&&(
                <p>SUCESSO</p>
                )}

                {(estado===Estado.ErroCriar)&&(
                   <p>ERRO</p>
                )}

              {(estado===Estado.Criar)&&(
            <form><div>
              <input placeholder='Nome' />
              <input placeholder='Login' />
              <input placeholder='Senha' type='password'/>
              </div>
              <div>
                <button onClick={botaoSalvarClicado}>Salvar</button>
                <button onClick={botaoCancelarClicado}>Cancelar</button>
              </div>
              </form>
              )}
              {(estado===Estado.Salvando)&&(
                <p>Salvando...</p>
              )}
    </>
  );
};

export default UsuariosPage;