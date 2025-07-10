import { CollapseAbout } from "./about/CollapseAbout"
import { HeroBanner } from "../components/HeroBanner"
import Background from './../assets/images/about_background.png';

export const About = () =>{
    return (
        <>
            <HeroBanner key="home" img={Background} title={""}/>
            <CollapseAbout/>
        </>
    )
}