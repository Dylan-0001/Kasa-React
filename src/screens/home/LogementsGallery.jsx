import logements from './../../assets/data/logements.json'

import { LogementCard } from '../../components/LogementCard'

export const LogementGallery = () =>{
    return (
        <section className="logements-gallery">
            <div className="gallery">
              
                {logements.map((logement) =>(

                    <LogementCard key={logement.id} id={logement.id} image={logement.cover} title={logement.title} />   

                ))}

            </div>
        </section>
    )
}