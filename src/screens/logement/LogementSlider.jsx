import { useState } from 'react';
import ArrowLeft from './../../assets/images/arrow_left.png';
import ArrowRight from './../../assets/images/arrow_right.png';

export const LogementSlider = ( {pictures} ) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () =>{
        setCurrentSlide((prev) => (prev + 1) % pictures.length);
    }

    const handlePrev = () =>{
        setCurrentSlide((prev) => (prev - 1 + pictures.length) % pictures.length);
    }

    return (
        <section className="logement-slider">
            <img src={pictures[currentSlide]} className="slider-image" alt="Slider images"/>
            
            <img src={ArrowLeft} onClick={handlePrev} className="arrow arrow_left" alt="Flèche gauche"/>
		    <img src={ArrowRight} onClick={handleNext} className="arrow arrow_right" alt="Flèche droite"/>

            <p className="slider-infos"> {currentSlide + 1}/{pictures.length} </p>
        </section>
    )
};
