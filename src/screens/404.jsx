import { NavLink } from "react-router-dom"

export const PageError = () =>{
    return (
        <section className="page-error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
                    
            <NavLink to='/'>
                <p>Retourner sur la page d'accueil</p>        
            </NavLink>           
        </section>
    )
}