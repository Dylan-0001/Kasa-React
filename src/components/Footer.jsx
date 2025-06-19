import Logo from './../assets/images/logo.png'

export const Footer = () =>{
    return (
        <footer>
           <div className="container">
                <img src={Logo} alt="Logo Kasa" />
                <div className="legal">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
           </div>
        </footer>
    )
}