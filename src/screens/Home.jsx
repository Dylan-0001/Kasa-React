import { LogementGallery } from "./home/LogementsGallery"
import { HeroBanner } from "../components/HeroBanner"
import Background from './../assets/images/home_background.png';

export const Home = () =>{
    return (
        <div>
            <HeroBanner key="home" img={Background} title={"Chez vous, partout et ailleurs"}/>
            <LogementGallery/>
        </div>
    )
}