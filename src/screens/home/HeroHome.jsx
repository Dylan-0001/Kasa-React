import Background from './../../assets/images/home_background.png';

export const HeroHome = () => {
  return (
    <section className="home-hero">
      <img src={Background} alt="Hero background" />
      <div className="overlay"></div>
      <p>Chez vous, partout et ailleurs</p>
    </section>
  );
};
