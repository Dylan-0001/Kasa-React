import { CollapseItem } from "../../components/CollapseItem";


export const LogementCollapse = ( {logement} ) => {

    return (
        <section className="logement_others">
            <CollapseItem key={logement.id + "-description"} question="Description" response={logement.description}/>
            <CollapseItem
                key={logement.id + "-equipements"}
                question="Équipements"
                response={
                    <ul>
                        {logement.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                }
            />
        </section>
    )
};
