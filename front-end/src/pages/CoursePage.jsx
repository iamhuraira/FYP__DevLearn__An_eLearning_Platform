import React, { useState } from 'react'
import Header from '../components/Header/Header'
import HeaderDashboard from '../DashboardComponents/HeaderDashboard'
import python from '../assets/img/CourseImages/python.png'
import Footer from '../components/Footer/Footer'

const CoursePage = () => {

    const [logedInUser, setLogedInUser] = useState(false)
    return (
        <>
            {logedInUser ? <HeaderDashboard /> : <Header />}

            <div className="backgroundCourse">
                <div className="courseHeader">
                    <div className="courseHeader__left">
                        <h2>Programming for Everybody (Getting Started with Python)</h2>
                        <p>Learn programming, data structures & algorithms, and prepare for the interview - all in one place.</p>
                        <button>Enroll Now!</button>
                    </div>
                    <div className="courseHeader__right">
                        <div className="imgBox">
                            <img src={python} alt="" srcset="" />
                        </div>
                    </div>

                </div>
            </div>


            <Footer/>



        </>
    )
}

export default CoursePage