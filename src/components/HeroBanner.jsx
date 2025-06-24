
export const HeroBanner =  ({img, title}) =>{

    return (
          <section className="hero-banner">
            <img src={img} alt={title} />
            <div className="overlay"></div>
            <p>{title}</p>
          </section>
    )
}