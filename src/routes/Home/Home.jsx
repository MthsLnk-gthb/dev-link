import { textoMatheusLink } from "./textosHome";
import minhaFoto from "../../../public/imgs/minha-foto.webp";
import TextosIntro from "../../Components/TextosIntroducao/TextosIntro";
import AsideRedes from "../../Components/AsideRedes/AsideRedes";

const Home = () => {
  return (
    <main className="home-page">
      <h1 className="nome-pagina">Home</h1>

      <AsideRedes />

      <article className="article-home">
        <TextosIntro />

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
      {/* <Tutoriais/> */}
    </main>
  );
};

export default Home;
