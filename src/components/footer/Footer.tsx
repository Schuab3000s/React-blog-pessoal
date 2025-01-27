import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  let data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="flex justify-center bg-[#4CAF50] text-[#F5F5DC]">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal Generation | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/kevin-schuab/" target="_blank">
              <LinkedinLogo size={48} weight="bold" color="#5D4037" />
            </a>
            <a href="https://www.instagram.com/kevinschuab" target="_blank">
              <InstagramLogo size={48} weight="bold" color="#5D4037" />
            </a>
            <a href="https://github.com/Schuab3000s" target="_blank">
              <GithubLogo size={48} weight="bold" color="#5D4037" />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return <>{component}</>;
}

export default Footer;
