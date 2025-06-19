import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavLink } from "react-router-dom"

export const PageError = () =>{
    return (
        <div>
            <Header />
                <section className="page-error">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas</h2>
                    
                    <NavLink to='/'>
                        <p>Retourner sur la page d'accueil</p>        
                    </NavLink>           
                </section>
            <Footer />
        </div>
    )
}