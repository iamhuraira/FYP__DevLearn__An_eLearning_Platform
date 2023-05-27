import React from 'react'
import CourseCard from '../CourseCard/CourseCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import arrowslide from '../../assets/img/arrow.png'


const CourseSlider = ({ title }) => {

    const [logedIn, setLogedIn] = React.useState(true)
  
    return (
        <>
            <div className='courseSliderSection'>


                <div className={`headingCourse ${logedIn && "JCS"} `} >
                    <h1>{title}</h1>

                </div>
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 4,
                        perMove: 1,
                        pagination: false,
                        // isNavigation: true,
                        breakpoints: {
                            1024: {
                                perPage: 3,
                            },
                            780: {
                                perPage: 2,
                            },
                            650: {
                                pagination: true,
                                arrows: false
                            },
                            500: {
                                perPage: 1,
                            }
                        }
                    }}
                    renderControls={() => (
                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev">
                                <img src={arrowslide} alt="" />
                            </button>
                            <button className="splide__arrow splide__arrow--next">
                                <img src={arrowslide} alt="" style={{ transform: 'rotate(-180deg' }} />
                            </button>
                        </div>
                    )}
                >
                    <SplideSlide className="splide__slide">
                        <CourseCard />
                    </SplideSlide>
                    <SplideSlide className="splide__slide">
                        <CourseCard />
                    </SplideSlide>
                    <SplideSlide className="splide__slide">
                        <CourseCard />
                    </SplideSlide>
                    <SplideSlide className="splide__slide">
                        <CourseCard />
                    </SplideSlide>
                    <SplideSlide className="splide__slide">
                        <CourseCard />
                    </SplideSlide>
                    <SplideSlide className="splide__slide">
                        <CourseCard />
                    </SplideSlide>
                    <SplideSlide className="splide__slide">
                        <CourseCard />
                    </SplideSlide>
                    <SplideSlide className="splide__slide">
                        <CourseCard />
                    </SplideSlide>

                </Splide>
            </div>
        </>
    )
}

export default CourseSlider