import { NavLink } from "react-router-dom"

export const LogementCard =  ({ id, image, title }) =>{
    return (
        <NavLink to={`/logement/${id}`}>

            <div className="item" key={id}>
                <img src={image} alt="Image X" />
                <div className="infos">
                    <p>{title}</p>
                </div>
            </div>

        </NavLink>
    )
}