import { useParams } from "react-router-dom"
import logements from './../assets/data/logements.json'
import { LogementSlider } from "./logement/LogementSlider";
import { LogementInformations } from "./logement/LogementInformations";
import { LogementCollapse } from "./logement/LogementCollapse.jsx";

export const Logement = () =>{
    
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id);

    return(
        <div>
            <LogementSlider key={logement.id} pictures={logement.pictures} />
            <LogementInformations key={logement.id} logement={logement} />
            <LogementCollapse key={logement.id} logement={logement}/>
        </div>
    );
}