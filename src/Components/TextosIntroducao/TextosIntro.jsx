import { textoDois, textoInicial } from "../../routes/Home/textosHome";


const TextosIntro = () => {
  return (
    <section className="textos-de-introducao">
      <p>{textoInicial}</p>
      <p>{textoDois}</p>
    </section>
  );
}

export default TextosIntro