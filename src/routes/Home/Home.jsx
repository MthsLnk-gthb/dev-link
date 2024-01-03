const Home = () => {
  
  const icons = [
    {
      src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      alt: "Nosso Instagram",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/256/174/174857.png",
      alt: "Nosso Linkedin",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/256/1384/1384060.png",
      alt: "Nosso Youtube",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/3046/3046126.png",
      alt: "Nosso TikTok",
    },
  ];

  return (
    <main className="home-page">
      <h1>Home</h1>

    <article className="article-home">
      <aside className="grid-redes-sociais">
        {icons.map((icone) => (
          <button className="btn-rede-social" key={icone.alt}>
            <img src={icone.src} alt={icone.alt} className="img-rede-social" />
          </button>
        ))}
      </aside>

      <section className="texto-da-home">
        <p>
          Na DevLink, somos mais que uma instituição educacional, somos
          impulsionadores de sonhos, moldando mentes para o futuro digital.
          Nossa empresa é um farol para aqueles que buscam uma experiência
          educacional excepcional, ofertamos cursos e artigos que ensinam o que
          o mercado demanda para equipá-lo com as habilidades necessárias para
          os desafios tecnológicos do mundo atual. Em nosso ecossistema
          educacional dinâmico, a tecnologia converte-se em oportunidade, e cada
          curso é uma viagem personalizada, guiando-o rumo à maestria
          tecnológica. 🚀✨
        </p>
      </section>
    </article>
    </main>
  );
};

export default Home;
