/* eslint-disable no-unused-vars */
import React from 'react'
import CourseCard from '../CourseCard/CourseCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import arrowslide from '../../assets/img/arrow.png'


const CourseSlider = ({ title ,data}) => {

    const [logedIn, setLogedIn] = React.useState(true)
  
    return (
        <>
            <div className='courseSliderSection'>


                <div className={`headingCourse ${logedIn && "JCS"} `} >
                    <h1>{title}</h1>

                </div>

                {
                    data?.length <= 4 && (
                        <div className='withoutSlider' style={{
                            width: `calc(100% / ${data?.length})`,
                        }}>
                            {data?.map((course) => (
                                <CourseCard course={course} />
                            )
                            )}
                        </div>
                    )
                }
                {
                    data?.length > 4 && (<Splide
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
                        {
                            data?.map((course) => (
                                <SplideSlide className="splide__slide">
                                    <CourseCard course={course} />
                                </SplideSlide>
                            ))
                        }


                    </Splide>)
                }
               
            </div>
        </>
    )
}

export default CourseSlider