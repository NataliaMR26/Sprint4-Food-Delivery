import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { advanceSlide } from '../../redux/actions/slideActions';
import { Link } from 'react-router-dom';
import './Slide.scss';
import slide1 from '../../images/Slide1.png';
import slide2 from '../../images/Slide2.png';
import slide3 from '../../images/Slide3.png';

const images = [slide1, slide2, slide3];


const Slide = () => {
    const currentSlide = useSelector(state => state.slide.currentSlide);
    const dispatch = useDispatch();

  
    return (
        <div className="slide-container">
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <div className="dots">
                {images.map((_, index) => (
                    <div 
                        key={index} 
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                    />
                ))}
            </div>
            {currentSlide === images.length - 1 ? (
                <Link to="/validation">
                    <button>Ir a validation</button>
                </Link>
            ) : (
                <button onClick={() => dispatch(advanceSlide())}>Siguiente slide</button>
            )}
        </div>
    );
};

export default Slide;
