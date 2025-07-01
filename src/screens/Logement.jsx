import { useParams } from "react-router-dom"
import logements from './../assets/data/logements.json'
import { LogementInformations } from "./logement/LogementInformations";
import { LogementCollapse } from "./logement/LogementCollapse.jsx";

import { Slider } from "../components/Slider.jsx";

export const Logement = () =>{
    
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id);

    return(
        <div>
            <Slider key={logement.id} pictures={logement.pictures} />
            <LogementInformations key={logement.id} logement={logement} />
            <LogementCollapse key={logement.id} logement={logement}/>
        </div>
    );
}