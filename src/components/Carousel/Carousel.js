import React, { Children, cloneElement, useState }  from 'react';
import style from './Carousel.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const CarouselItem = ({ children }) => {
    return (
        <div className={style.carousel__item}>
            <div className={style.wrapper}>
                <LazyLoadImage effect='blur' src={children} alt='img' className={style.carousel__image}/>
            </div>
        </div>
    );
};


const Carousel = ({ children, screenshots }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = Children.count(children) - 1;
        } else if (newIndex >= Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex)
    }

    return (
        <div className={style.carousel}>
            <div className={style.carousel__inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {Children.map(children, (child) => {
                    return cloneElement(child);
                })}
            </div>
            {screenshots.length &&
                <div className={style.carousel__indicators}>
                    <FaAngleLeft
                        className={style.leftArrow}
                        onClick={() => {
                            updateIndex(activeIndex - 1)
                        }}
                    >
                    </FaAngleLeft>
                    {screenshots.map((item, index) => {
                        return (
                            <img
                                key={item.image}
                                src={item.image}
                                className={`${index === activeIndex ? style.img__active : style.img }`}
                                onClick={() => {
                                    updateIndex(index)
                                }}
                                alt='img'
                            />
    
                        );
                    })}
                    <FaAngleRight
                        className={style.rightArrow}
                        onClick={() => {
                            updateIndex(activeIndex + 1)
                        }}
                    >
                    </FaAngleRight>
                </div>
            }
        </div>
    );
};

export default Carousel;