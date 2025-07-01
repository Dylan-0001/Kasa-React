import { NavLink } from "react-router-dom"

import Logo from './../assets/images/logo.png'

export const Header = () =>{
    return (
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>
                            Acceuil
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/about'>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}