import Background from './../../assets/images/about_background.png';

export const HeroAbout = () => {
  return (
    <section className="about-hero">
      <img src={Background} alt="Hero background" />
      <div className="overlay"></div>
    </section>
  );
};
