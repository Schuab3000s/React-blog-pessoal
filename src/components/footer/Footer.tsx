import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-[#4CAF50] text-[#F5F5DC]">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-2">
                        <LinkedinLogo size={48} weight="bold" color="#5D4037" />
                        <InstagramLogo size={48} weight="bold" color="#5D4037" />
                        <FacebookLogo size={48} weight="bold" color="#5D4037" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
