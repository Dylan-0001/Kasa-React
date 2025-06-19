import { CollapseItem } from "../../components/CollapseItem";
import { collapseData } from "../../assets/data/collapseData";

export const CollapseAbout = () => {
  return (
    <section className="collapse">

      {collapseData.map((item, index) =>(
      
        <CollapseItem key={index} question={item.question} response={item.response}/>
      
      ))}

    </section>
  );
};
