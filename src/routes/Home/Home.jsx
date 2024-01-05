import Tutoriais from '../Tutoriais/Tutoriais'

const Home = () => {
  const icons = [
    {
      src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      alt: "Meu Instagram",
      link: "",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/256/174/174857.png",
      alt: "Nosso Linkedin",
      link: "",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/256/1384/1384060.png",
      alt: "Nosso Youtube",
      link: "https://www.youtube.com/channel/UCFv5LW1KHS6vvuHbHroda7Q",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/3046/3046126.png",
      alt: "Nosso TikTok",
      link: "",
    },
  ];

  const handleClickRedeSocial = (link) => {
    window.open(link, "_blank");
  };

  return (
    <main className="home-page">
      <h1 className="nome-pagina">Home</h1>

      <article className="article-home">
        <aside className="grid-redes-sociais">
          {icons.map((icone) => (
            <button
              onClick={(e) => {
                e.preventDefault(), handleClickRedeSocial(icone.link);
              }}
              className="btn-rede-social"
              key={icone.alt}
            >
              <img
                src={icone.src}
                alt={icone.alt}
                className="img-rede-social"
              />
            </button>
          ))}
        </aside>

        <section className="texto-da-home">
          <p>
            Bem-vindo à DevLink, um ponto de encontro para entusiastas e
            profissionais de Front-End! Aqui, mergulhamos nas últimas
            tendências, compartilhamos experiências de carreira e oferecemos
            dicas valiosas para impulsionar seu desenvolvimento profissional.
            Junte-se a nós para aprender, colaborar e construir conexões no
            vasto mundo da tecnologia. Vamos criar juntos o futuro do
            desenvolvimento Front-End e além. 🚀✨
          </p>
        </section>
      </article>
      <Tutoriais/>
    </main>
  );
};

export default Home;
