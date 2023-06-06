/* eslint-disable no-unused-vars */
import React from 'react'
import CourseCard from '../CourseCard/CourseCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import arrowslide from '../../assets/img/arrow.png'


const CourseSlider = ({ title, data }) => {

    const [logedIn, setLogedIn] = React.useState(true)
    const widthsize = {
        1: "25%",
        2: "50%",
        3: "75%",
        4: "100%",
    }

    const courseCount = data?.length > 10 ? '10+' : data?.length

    return (
        <>
            <div className='courseSliderSection'>


                <div className={`headingCourse ${logedIn && "JCS"} `} >
                    <h1>{title} ( <span style={{ color: "#1abbb1" }}>{courseCount}</span> )</h1>

                </div>

                {
                    data?.length <= 4 && (
                        <div className='withoutSlider' style={{
                            // width: `${widthsize[data?.length]}`,
                        }}>
                            {data?.map((course) => (
                                <div className='withoutSliderDiv' >

                                <CourseCard course={course} />
                                </div>
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