import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ClipLoader } from "react-spinners";

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuario);
        alert("Usuario cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmarSenha("");
    }
  }

  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen
                      place-items-center font-bold"
      >
        <div
          className="bg-[url('https://ik.imagekit.io/cyxf3ndyl/Design%20sem%20nome.png?updatedAt=1761319186346')] lg:block hidden bg-no-repeat
                     w-full min-h-screen bg-cover bg-center"
        ></div>
        <form
          className="flex justify-center items-center flex-col w-2/3 gap-3"
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-slate-900 text-5xl">Criar uma nova conta</h2>
          <div className="_52lr _9bq0 fsm fwn fcg font-normal">
            É rápido e fácil.
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border border-slate-700 rounded p-2"
              onChange={atualizarEstado}
              value={usuario.nome}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border border-slate-700 rounded p-2"
              onChange={atualizarEstado}
              value={usuario.usuario}
              onChangeCapture={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border border-slate-700 rounded p-2"
              onChange={atualizarEstado}
              value={usuario.foto}
              onChangeCapture={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border border-slate-700 rounded p-2"
              onChange={atualizarEstado}
              value={usuario.senha}
              onChangeCapture={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border border-slate-700 rounded p-2"
              onChange={handleConfirmarSenha}
              value={confirmarSenha}
              onChangeCapture={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col items-center w-full gap-3 mt-4">
            <button
              type="submit"
              className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2"
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={24} />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>

            <a
              href="/login"
              className="rounded text-blue-400 font-normal hover:underline no-underline"
            >
              Já tem uma conta?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
