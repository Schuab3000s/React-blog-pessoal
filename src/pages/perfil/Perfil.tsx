import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert('Você precisa estar logado')
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto m-4 rounded-2xl overflow-hidden bg-[#F5F5DC]'> {/* Fundo com Bege Claro */}

            <img 
                className='w-full h-72 object-cover border-b-8 border-[#F5F5DC]' 
                src="https://static.vecteezy.com/system/resources/previews/004/876/215/large_2x/light-beige-paper-texture-background-kraft-paper-horizontal-with-unique-design-soft-natural-paper-style-for-aesthetic-creative-design-free-photo.jpg" 
                alt="Capa do Perfil" />

            <img 
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' 
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div 
                className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-gradient-to-b from-[#F5F5DC] to-[#4CAF50] text-[#5D4037] text-2xl items-center justify-center" 
            >
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>

        </div>
    )
}

export default Perfil
