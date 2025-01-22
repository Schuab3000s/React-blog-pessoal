import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert("O Usuário foi desconectado com sucesso!");
        navigate("/");
    }

    return (
        <>
            <div className="w-full bg-[#4CAF50] text-[#F5F5DC] flex justify-center py-4">
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className="text-2xl font-bold hover:text-[#5D4037]">
                        Blog Pessoal
                    </Link>

                    <div className="flex gap-4">
                        <Link to="/postagens" className="hover:text-[#5D4037]">
                            Postagens
                        </Link>
                        <Link to="/temas" className="hover:text-[#5D4037]">
                            Temas
                        </Link>
                        <Link to="/cadastrartema" className="hover:text-[#5D4037]">
                            Cadastrar tema
                        </Link>
                        <Link to="/perfil" className="hover:text-[#5D4037]">
                            Perfil
                        </Link>
                        <Link to="" onClick={logout} className="hover:text-[#5D4037]">
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
