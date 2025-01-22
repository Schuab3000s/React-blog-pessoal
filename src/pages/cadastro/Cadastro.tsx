import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrar } from '../../services/Service'
import './Cadastro.css'
import { RotatingLines } from 'react-loader-spinner'

function Cadastro() {

  const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const[confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })
  
  useEffect(() => {
    if (usuario.id !== 0){
      retornar()
    }
  }, [usuario])

  function retornar(){
    navigate('/login')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)

      try{
        await cadastrar(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
      }catch(error){
        alert('Erro ao cadastrar o usuário!')
      }
    }else{
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      setUsuario({...usuario, senha: ''})
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }
  
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-[#F5F5DC]"> {/* Fundo com Bege Claro */}
    <div className="fundoCadastro hidden lg:block"></div>
    <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={cadastrarNovoUsuario}>
        <h2 className='text-[#5D4037] text-5xl'>Cadastrar</h2> {/* Texto Marrom Escuro */}
        <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-[#5D4037]">Nome</label> {/* Texto Marrom Escuro */}
            <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2 border-[#5D4037] rounded p-2"
                value={usuario.nome}
                onChange={(e) => atualizarEstado(e)}
            />
        </div>
        <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-[#5D4037]">Usuario</label> {/* Texto Marrom Escuro */}
            <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 border-[#5D4037] rounded p-2"
                value={usuario.usuario}
                onChange={(e) => atualizarEstado(e)}
            />
        </div>
        <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-[#5D4037]">Foto</label> {/* Texto Marrom Escuro */}
            <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="border-2 border-[#5D4037] rounded p-2"
                value={usuario.foto}
                onChange={(e) => atualizarEstado(e)}
            />
        </div>
        <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-[#5D4037]">Senha</label> {/* Texto Marrom Escuro */}
            <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-[#5D4037] rounded p-2"
                value={usuario.senha}
                onChange={(e) => atualizarEstado(e)}
            />
        </div>
        <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-[#5D4037]">Confirmar Senha</label> {/* Texto Marrom Escuro */}
            <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border-2 border-[#5D4037] rounded p-2"
                value={confirmaSenha}
                onChange={(e) => handleConfirmarSenha(e)}
            />
        </div>
        <div className="flex justify-around w-full gap-8">
            <button className='rounded text-white bg-[#4CAF50] hover:bg-[#388E3C] w-1/2 py-2' onClick={retornar}>
                Cancelar
            </button>
            <button 
                type='submit'
                className='rounded text-white bg-[#4CAF50] hover:bg-[#388E3C] w-1/2 py-2 flex justify-center'>
                {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Cadastrar</span>}
            </button>
        </div>
    </form>
</div>

    </>
  )
}

export default Cadastro
