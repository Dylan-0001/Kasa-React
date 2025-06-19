import { useParams } from "react-router-dom"
import logements from './../assets/data/logements.json'

export const Logement = () =>{
    
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id);

    return (
        <div>
            <h1>Article: {logement.title} </h1>
        </div>
    )
}