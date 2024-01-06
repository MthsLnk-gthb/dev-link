const AsideRedes = () => {

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
    <aside className="grid-redes-sociais">
      {icons.map((icone) => (
        <button
          onClick={(e) => {
            e.preventDefault(), handleClickRedeSocial(icone.link);
          }}
          className="btn-rede-social"
          key={icone.alt}
        >
          <img src={icone.src} alt={icone.alt} className="img-rede-social" />
        </button>
      ))}
    </aside>
  );
}

export default AsideRedes