import { NavLink } from "react-router-dom"

import Logo from './../assets/images/logo.png'

export const Header = () =>{
    return (
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <NavLink to='/'>
                        <li>Accueil</li>
                    </NavLink>

                    <NavLink to='/about'>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}