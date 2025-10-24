const Footer = () => {
  return (
  <div className="mt-32 py-4 flex md:flex-row flex-col justify-between items-center">
    <h1 className="text-2xl font-bold">Portofolio</h1>
    <div className="flex gap-7">
      <a href="#beranda">Beranda</a>
      <a href="#tentang">Tentang</a>
      <a href="#proyek">Proyek</a>
    </div>
    <div className="flex item-center gap-3">
      <a href="https://www.linkedin.com/in/ega-mulyana-001617296/">
        <i className="ri-linkedin-fill ri-2x"></i>
      </a>
      <a href="https://www.instagram.com/kazuetsu._?igsh=MWVxaTN2NmUybDV1Zg==">
        <i className="ri-instagram-fill ri-2x"></i>
      </a>
      <a href="https://discordapp.com/users/437458976343326731">
        <i className="ri-discord-fill ri-2x"></i>
      </a>
      <a href="https://github.com/egamulyana">
        <i className="ri-github-fill ri-2x"></i>
      </a>
    </div>
  </div>
)
};

export default Footer;