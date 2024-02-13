import { textoMatheusLink } from "./textosSobreMim";
import minhaFoto from "/imgs/minha-foto.webp";
import "./style.scss";
import Voltar from "../../Components/Voltar";

const SobreMim = () => {
  return (
    <>
      <Voltar rotaDestino="/dev-link/home" />
      <article className="sobre-mim">
        <h1 className="nome-pagina">Sobre Mim</h1>
        <section className="quem-sou">
          <h1>Quem é Matheus Link?</h1>
          <img
            src={minhaFoto}
            alt="Foto Matheus Link"
            className="foto-matheus"
          />
          <p>{textoMatheusLink}</p>
        </section>
      </article>
    </>
  );
};

export default SobreMim;
