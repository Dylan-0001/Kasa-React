
export const LogementInformations = ( {logement} ) => {

    const rating_value = parseInt(logement.rating);

    return (
        <section className="logement-informations">
            <div className="infos">
                <h1 className="title">{logement.title}</h1>
                <p className="location">{logement.location}</p>

                <div className="tags">
                    {logement.tags.map((tag) => (
                        <div className="tag">{tag}</div>
                    ))}
                </div>
            </div>

            <div className="details">
                <div className="host-infos">
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt="host picture"/>
                </div>

                <div className="rating">
                    {[...Array(5)].map((_, i) => (
                        <i
                            key={i}
                            className={`fa-xs fa-solid fa-star ${i < rating_value ? "active" : ""}`}
                            aria-hidden="true"
                        ></i>
                    ))}
                </div>
            </div>
        </section>

    )
};
