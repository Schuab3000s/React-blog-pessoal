import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F5F5DC] to-[#4CAF50] flex justify-center">
        <div className="container grid grid-cols-2 text-white h-[500px]">
          <div className="flex flex-col gap-4 items-center justify-center py-4 h-full">
            <h2 className="text-5xl font-bold text-[#5D4037]">
              Seja Bem Vindo!
            </h2>
            <p className="text-xl text-[#5D4037]">
              Expresse aqui seus pensamentos e opniões
            </p>
            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalPostagem />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center m-5 border-8">
            <img
              src="https://krioskcreata.com/media/service/Content.gif"
              alt="Imagem Página Home"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>

      <ListaPostagens />
    </>
  );
}

export default Home;
