import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Carousel = ({ slides }) => {
    const [cur, setCur] = useState(0);
    const [slideDirection, setSlideDirection] = useState('slide-in-right');
    const [isAnimating, setIsAnimating] = useState(false);

    const len = slides.length;

    const leftHandle = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setSlideDirection('slide-out-left');
            setTimeout(() => {
                setCur(cur - 1 < 0 ? len - 1 : cur - 1);
                setSlideDirection('slide-in-right');
            }, 500);
        }
    };

    const rightHandle = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setSlideDirection('slide-out-left');
            setTimeout(() => {
                setCur(cur + 1 > len - 1 ? 0 : cur + 1);
                setSlideDirection('slide-in-right');
            }, 500);
        }
    }, [cur, len, isAnimating]);

    useEffect(() => {
        const interval = setTimeout(() => {
            rightHandle();
        }, 5000);
        return () => clearTimeout(interval);
    }, [rightHandle]);

    useEffect(() => {
        setIsAnimating(false); // Reset animation state when slide changes
    }, [cur]);

    return (
        <div className="carousel-wrapper">
            <div className={`carousel-inner ${slideDirection}`}>
                {slides.map((slide, index) => {
                    const isActive = cur === index;
                    return (
                        <div
                            key={index}
                            className={`slide-item ${isActive ? 'active' : ''}`}
                        >
                            {isActive && <SlideItem slide={slide} />}
                        </div>
                    );
                })}
            </div>
            <FaArrowLeft className="leftBtn" onClick={leftHandle} />
            <FaArrowRight className="rightBtn" onClick={rightHandle} />
        </div>
    );
};

const SlideItem = ({ slide }) => {
    return (
        <div>
            <div className="item-img">
                {slide.content}
            </div>
            <div className="item-quote">
                {slide.quote}
            </div>
        </div>
    )
};

export default Carousel;
