import React from "react";
import courseimg from "../../assets/img/CourseImages/python.png";
import py from "../../assets/img/CourseImages/py.png";
import { useNavigate } from "react-router-dom/dist";
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const handleOpenPage = (id) => {
    navigate(`/coursedetails/${id}`);
  };

  console.log(course);
  const ImgUrl = `${process.env.REACT_APP_BASE_URL}/public/img/courses`;

  return (
    <div className="fun" onClick={() => handleOpenPage(1)}>
      <div className="backgroundCard">
        <img src={`${ImgUrl}/${course.selectImage}`} alt="" />
        <div className="courseLogo">
          <img src={`${ImgUrl}/${course.selectLogo}`} alt="" srcset="" />
        </div>
        {/* <h2>Programming for Everybody (Getting Started with Python)</h2> */}
        <h2>{course.courseName}</h2>
        <h3>Abu Huraira</h3>

        <p>
          <span>{course.difficultylevel} </span>
          <span>·</span>
          <span> {course.courseDuration} Hours </span>
        </p>
        <p>
          <span> {course.solvedExample}+ Solved Examples </span>
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
