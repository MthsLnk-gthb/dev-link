
import TextosIntro from "../../Components/TextosIntroducao/TextosIntro";
import AsideRedes from "../../Components/AsideRedes/AsideRedes";
import './style.scss'

const Home = () => {
  return (
    <>
      <AsideRedes />
      <main className="home-page">
        <h1 className="nome-pagina">Home</h1>
        <article className="article-home">
          <TextosIntro />
        </article>
      </main>
    </>
  );
};

export default Home;
