import React from 'react'
import courseimg from '../../assets/img/CourseImages/python.png'
import py from '../../assets/img/CourseImages/py.png'
const CourseCard = () => {
    return (
        <div className='fun'>
            <div className="backgroundCard">
                <img src={courseimg} alt="" />
                <div className='courseLogo'>
                    <img src={py} alt="" srcset="" />
                </div>
                <h2>Programming for Everybody (Getting Started with Python)</h2>
                <h3>
                    Abu Huraira
                </h3>

                <p>
                    <span>Beginner </span>
                    <span>·</span>
                    <span> 3 Weeks </span>
                   
                </p>
                <p>
                    <span> 200+ Solved Examples </span>
                </p>

            </div>
        
           
        </div>
    )
}

export default CourseCard