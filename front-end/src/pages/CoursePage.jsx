/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment, useEffect } from 'react';
import Header from '../components/Header/Header';
import HeaderDashboard from '../DashboardComponents/HeaderDashboard';
import python from '../assets/img/CourseImages/python.png';
import Footer from '../components/Footer/Footer';
import { BiVideo } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

import { useDispatch, useSelector } from 'react-redux';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import {
  useGetCourseByIdQuery,
  useDeleteCourseMutation,
  useCourseApproveMutation,
  useEnrollCourseMutation,
  useStudentEnrolledCourseQuery,
  useGetQuizResultQuery,
  useSubmitQuizResultMutation,
  useRetakeQuizResultMutation,
} from '../Redux/api/courseSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { setCourseData } from '../Redux/slices/courseSlice';

import certificateTemplate from '../assets/img/certificateTemplate.jpg';
import { CircularProgress, TextField } from '@mui/material';
import { validateDate } from '@mui/x-date-pickers/internals';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const { Panel } = Collapse;

const CoursePage = () => {
  // const user = useSelector(state => state.user.userData)

  const [logedInUser, setLogedInUser] = useState(false);

  const param = useParams();
  // console.log(param.id)

  const {
    data = [],
    isLoading,
    isFetching,
    refetch,
  } = useGetCourseByIdQuery(param.id, { refetchOnMountOrArgChange: true });

  useEffect(() => {}, [data]);

  const course = data.data;
  const dispatch = useDispatch();
  dispatch(setCourseData(course));
  // console.log(data.data)
  // console.log(course?.status)

  // useEffect(() => {
  //     refetch()
  // }, [param.id])

  const panelStyle = {
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'rgba(35, 186, 177, 0.05)',
    borderRadius: 10,
    border: 'none',
    width: '60%',
  };
  // 7S_tz1z_5bA';

  // let quiz = [
  //     {
  //         id: 1,
  //         question: 'What is the capital of France?',
  //         options: [
  //             'New York',
  //             'London',
  //             'Paris',
  //             'Dublin'
  //         ],
  //         answer: 'Paris'

  //     },
  //     {
  //         id: 2,
  //         question: 'Who is CEO of Tesla?',
  //         options: [
  //             'Jeff Bezos',
  //             'Elon Musk',
  //             'Bill Gates',
  //             'Tony Stark'
  //         ],
  //         answer: 'Elon Musk'
  //     }

  // ]
  const [quiz, setQuiz] = useState([]);

  const [iFromeSrc, setiFromeSrc] = useState('');
  const chnageUrl = (url) => {
    const iFromeSrc = `https://www.youtube.com/embed/${url}?rel=0&autoplay=1`;
    setiFromeSrc(iFromeSrc);
    setVideoPopup(true);
  };
  // const iFromeSrc = 'https://www.youtube.com/embed/

  const [videoPopup, setVideoPopup] = useState(false);
  const [quizPopup, setQuizPopup] = useState(false);
  const [showDeletePopup, setshowDeletePopup] = useState(false);
  useEffect(() => {
    if (videoPopup || quizPopup || showDeletePopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [videoPopup, quizPopup, showDeletePopup]);

  const [quizAnswer, setQuizAnswer] = useState([]);
  // console.log(quizAnswer)
  // let myArray = new Array();
  const handleQuizAnswer = (i, ans) => {
    // console.log(i, ans)
    // myArray[i] = ans
    const newarray = [...quizAnswer];
    newarray[i] = ans;
    setQuizAnswer(newarray);

    //    console.log(myArray)
  };
  const handleOpenQuiz = (no) => {
    // console.log(no)
    // console.log(course?.sections[no]?.quiz)
    const quiz1 = course?.sections[no]?.quiz.map((item, i) => {
      return {
        id: `${i + 1}`,
        question: item.question,
        options: [item.option1, item.option2, item.option3, item.option4],
        answer: item.answer,
      };
    });
    console.log(quiz1);
    setQuiz(quiz1);

    setQuizPopup(true);
  };
  const [quizResult, setQuizResult] = useState('');

  const [
    submitQuizResult,
    { isSuccess: submitQuizIsSuccess, isError: submitQuizIsError },
  ] = useSubmitQuizResultMutation();
  const [RetakeQuizResult] = useRetakeQuizResultMutation();

  const SubmitQuiz = (SectionId) => {
    // setQuizPopup(false)
    let result = quiz.map((item, i) => {
      if (item.answer === quizAnswer[i]) {
        return true;
      } else {
        return false;
      }
    });

    let count = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === true) {
        count++;
      }
    }
    const percentage = (count / result.length) * 100;
    percentage >= 65 ? setQuizResult('Pass') : setQuizResult('Fail');

    // setQuizResult(count);
    // console.log(result);
    // console.log(
    //   `studentId: ${user._id}  courseId: ${
    //     param.id
    //   } sectionid: ${SectionId} result: ${percentage >= 65 ? 'pass' : 'fail'}`
    // );

    // console.log(percentage >= 65 ? 'pass' : 'fail');

    // console.log(quizResult);
    setQuizAnswer([]);
    result = [];
    submitQuizResult({
      studentId: user._id,
      courseId: param.id,
      sectionid: SectionId,
      result: `${percentage >= 65 ? 'pass' : 'fail'}`,
    });
  };

  const RetakeSubmitQuiz = (SectionId) => {
    // setQuizPopup(false)
    let result = quiz.map((item, i) => {
      if (item.answer === quizAnswer[i]) {
        return true;
      } else {
        return false;
      }
    });

    let count = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === true) {
        count++;
      }
    }
    const percentage = (count / result.length) * 100;
    percentage >= 65 ? setQuizResult('Pass') : setQuizResult('Fail');

    // setQuizResult(count);
    // console.log(result);
    setQuizAnswer([]);
    result = [];
    // console.log(quizAnswer);
    RetakeQuizResult({
      studentId: user._id,
      courseId: param.id,
      sectionid: SectionId,
      result: `${percentage >= 65 ? 'pass' : 'fail'}`,
    });
  };

  const handleCloseQuizPopup = () => {
    setQuizPopup(false);
    setQuizResult('');
    setQuizAnswer([]);
  };
  const auth = localStorage.getItem('token');
  const user = useSelector((state) => state.user.userData);
  const ImgUrl = `${process.env.REACT_APP_BASE_URL}/public/img/courses`;
  const UserImg = `${process.env.REACT_APP_BASE_URL}/public/img/users`;
  const DifficultyColor = {
    Beginner: '#00b300',
    Hard: '#febe00',
    Expert: '#ff0000',
  };
  const Dstyle = {
    color: DifficultyColor[course?.difficultylevel],
  };

  // const EnrollCheck = user?.courses?.includes(course?._id) ? true : false;
  // console.log(user?.courses);
  const {
    data: enrolledCourse = [],
    isLoading: EnrollCourseLoading,
    isFetching: EnrollCourseFetching,
  } = useStudentEnrolledCourseQuery({ refetchOnMountOrArgChange: true });
  const EnrollCheck = enrolledCourse?.data?.courses?.map((item) => {
    if (item._id === course?._id) {
      return true;
    } else {
      return false;
    }
  });
  // console.log([...EnrollCheck]);
  const cenrollresult = EnrollCheck?.includes(true);
  // console.log(cresult);
  // const EnrollCheck = () => {
  //   if (user?.courses?.includes(course?._id)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // console.log(EnrollCheck);

  // console.log(user.role)

  const navigate = useNavigate();

  const handleUpdateCourse = () => {
    navigate(`/teacherdashboard/updatecourse/${course._id}`);
  };

  const [deleteCourse, { isLoading: DeeteCourseIsloading} ] = useDeleteCourseMutation();

  const handleDeleteCourse = () => {
    deleteCourse(course._id);
    setshowDeletePopup(false);
    // console.log(response)
    navigate('/teacherdashboard/viewcourses');
  };

  const [courseAprove, { isSuccess, isLoading : CourseApproveIsLoading, isError, error }] =
    useCourseApproveMutation();
  useEffect(() => {
    if (isSuccess) {
      navigate('/admin/viewrequests');
    }
  }, [isSuccess]);

  const handleApproveCourse = (decision) => {
    console.log(decision, course._id);
    courseAprove({ decision, id: course._id });
  };

  const [enrollCourse, { isSuccess: enrollSuccess, isError: enrollError, isLoading: enrollCourseIsLoading }] =
    useEnrollCourseMutation();
  useEffect(() => {
    if (enrollSuccess) {
      navigate('/studentdashboard');
    }
  }, [enrollSuccess]);

  const HandleEnrollCurse = () => {
    if (auth) {
      enrollCourse({
        courseId: course._id,
        studentId: user._id,
      });
    } else {
      navigate('/login');
    }
  };

  const {
    data: quizResultList = [],
    isLoading: guizresultLoading,
    isFetching: guizresultFetching,
    isError: guizresultError,
  } = useGetQuizResultQuery(param.id, { refetchOnMountOrArgChange: true });

  // let quizResultData = quizResultList?.document?.map((item) => {

  //   return {
  //     sectionID: item.sectionid,
  //     result: item.result,
  //   };

  // })
  // console.log(quizResultData);

  useEffect(() => {
    console.log(quizResultList.document);
  }, [guizresultError]);

  const map = new Map();
  quizResultList.document?.map((item) => {
    map.set(item.sectionid, item.result);
  });

  const quizPassed = quizResultList.document?.filter((item) => {
    return item.result === 'pass';
  });

  // console.log(quizPassed);
  const [certificateDownloadLoading, setCertificateDownloadLoading] = useState(false);
  const DownloadCertificate = () => {
    setCertificateDownloadLoading(true)
    const capture = document.getElementById('courseCertificate');
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('landscape');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
          setCertificateDownloadLoading(false);
      doc.save(`${user.name}_certificate.pdf`);
    });
  };

  const [review, setReview] = useState('');

  const handleAddReview = () => {};

  const date = new Date(course?.createdAt);
  const date1 = new Date();
  // console.log(date1.getDate());

  const month = [
    'Januray',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octomber',
    'November',
    'December',
  ];

  return (
    <>
      {(videoPopup || quizPopup || showDeletePopup) && (
        <div className="overLay"></div>
      )}
      {auth ? <HeaderDashboard user={user} /> : <Header />}
      {showDeletePopup && (
        <div className="deletePopup">
          <h2>Are you sure you want to delete?</h2>
          <div className="confermButton">
            <button
              onClick={() => {
                setshowDeletePopup(false);
              }}
            >
              No
            </button>
            <button onClick={handleDeleteCourse}>Yes</button>
          </div>
        </div>
      )}

      {(course?.status === 'pending' || course?.status === 'rejected') &&
        user?.role === 'teacher' && (
          <div className="adminControl teacherControl">
            <button onClick={handleUpdateCourse}> Update</button>
            <button onClick={() => setshowDeletePopup(true)}>
              {DeeteCourseIsloading ? (
                <CircularProgress disableShrink />
              ) : (
                'Delete'
              )}
            </button>
          </div>
        )}

      <div className="backgroundCourse">
        <div className="courseHeader">
          <div className="courseHeader__left">
            <h2>{course?.courseName}</h2>
            <p>{course?.shortDescription}.</p>
            <span>
              Last updated {`${date.getMonth() + 1}/${date.getFullYear()}`}
            </span>
            {user.role !== 'admin' &&
              user.role !== 'teacher' &&
              !cenrollresult && (
                <button onClick={HandleEnrollCurse}>
                  {enrollCourseIsLoading ? (
                    <CircularProgress disableShrink />
                  ) : (
                    ' Enroll Now!'
                  )}
                </button>
              )}
            {cenrollresult && <button>Enrolled</button>}
            {/* <button>Enroll Now!</button> */}
          </div>
          <div className="courseHeader__right">
            <div className="imgBox">
              <img src={`${ImgUrl}/${course?.selectImage}`} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div className="basicDetail">
        <div className="basicDetailbox">
          <h2>{course?.solvedExample}+</h2>
          <hr />
          <h3>Solved Example</h3>
        </div>
        <div className="basicDetailbox">
          <h2>{course?.courseDuration}+</h2>
          <hr />
          <h3>Hours of video content</h3>
        </div>
        <div className="basicDetailbox">
          <h2 style={Dstyle}>{course?.difficultylevel}</h2>
          <hr />
          <h3>Difficulty level</h3>
        </div>
      </div>

      <div className="courseContent">
        <h2>Course Content</h2>
        {course?.sections?.map((section, i) => (
          <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            // style={{ background: '#f7f7f7' }}
            key={i}
          >
            <Panel header={section.sectionName} key={i} style={panelStyle}>
              <div className="SectionContent">
                <div className="left">
                  {section?.videoData?.map((video, vi) => (
                    <div className="VideoDetails" key={vi}>
                      <BiVideo />
                      <p onClick={() => chnageUrl(video.videoLink)}>
                        {video.videoName}{' '}
                      </p>
                      {videoPopup && (
                        <div className="viderPopup">
                          <GrClose onClick={() => setVideoPopup(false)} />
                          <iframe
                            src={iFromeSrc}
                            title="YouTube video player"
                            frameborder="0"
                            allowfullscreen="true"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="right">
                  {cenrollresult && user.role === 'student' && (
                    <>
                      {!map.has(i) ? (
                        <button onClick={() => handleOpenQuiz(i)}>Quiz</button>
                      ) : map?.get(i) === 'fail' ? (
                        <button
                          onClick={() => handleOpenQuiz(i)}
                          className="red"
                        >
                          Retake
                        </button>
                      ) : (
                        <div className="passed">Passed</div>
                      )}
                      {/* <button
                        onClick={() => handleOpenQuiz(i)}
                        className={map.get(i) === "fail" ? "red" : ""}
                      >
                        {map.get(i) === "fail" ? "Retake " : "Quiz"}
                      </button> */}
                    </>
                  )}

                  {/* <button onClick={() => handleOpenQuiz(i)}>Retake</button> */}
                  {quizPopup && (
                    <div className="quizPopup">
                      <GrClose onClick={handleCloseQuizPopup} />
                      {quizResult === '' && (
                        <>
                          <div>
                            <h2>Quiz</h2>
                          </div>
                          {quiz?.map((question, index) => (
                            <div className="question" key={index}>
                              <h3>{`${index + 1}. ${question.question}`}</h3>
                              <div class="options">
                                <ul class="list">
                                  <li class="list__item">
                                    <input
                                      type="radio"
                                      class="radio-btn"
                                      name={`choiceQ${index + 1}`}
                                      id={`a-opt${index + 1}`}
                                      onChange={() =>
                                        handleQuizAnswer(
                                          index,
                                          question.options[0]
                                        )
                                      }
                                      checked={
                                        quizAnswer[index] ===
                                        question.options[0]
                                          ? true
                                          : false
                                      }
                                    />
                                    <label
                                      for={`a-opt${index + 1}`}
                                      class="label"
                                    >
                                      {question.options[0]}
                                    </label>
                                  </li>

                                  <li class="list__item">
                                    <input
                                      type="radio"
                                      class="radio-btn"
                                      name={`choiceQ${index + 1}`}
                                      id={`b-opt${index + 1}`}
                                      onChange={() =>
                                        handleQuizAnswer(
                                          index,
                                          question.options[1]
                                        )
                                      }
                                      checked={
                                        quizAnswer[index] ===
                                        question.options[1]
                                          ? true
                                          : false
                                      }
                                    />
                                    <label
                                      for={`b-opt${index + 1}`}
                                      class="label"
                                    >
                                      {question.options[1]}
                                    </label>
                                  </li>

                                  <li class="list__item">
                                    <input
                                      type="radio"
                                      class="radio-btn"
                                      name={`choiceQ${index + 1}`}
                                      id={`c-opt${index + 1}`}
                                      onChange={() =>
                                        handleQuizAnswer(
                                          index,
                                          question.options[2]
                                        )
                                      }
                                      checked={
                                        quizAnswer[index] ===
                                        question.options[2]
                                          ? true
                                          : false
                                      }
                                    />
                                    <label
                                      for={`c-opt${index + 1}`}
                                      class="label"
                                    >
                                      {question.options[2]}
                                    </label>
                                  </li>

                                  <li class="list__item">
                                    <input
                                      type="radio"
                                      class="radio-btn"
                                      name={`choiceQ${index + 1}`}
                                      id={`d-opt${index + 1}`}
                                      onChange={() =>
                                        handleQuizAnswer(
                                          index,
                                          question.options[3]
                                        )
                                      }
                                      checked={
                                        quizAnswer[index] ===
                                        question.options[3]
                                          ? true
                                          : false
                                      }
                                    />
                                    <label
                                      for={`d-opt${index + 1}`}
                                      class="label"
                                    >
                                      {question.options[3]}
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          ))}

                          {user.role !== 'admin' && user.role !== 'teacher' && (
                            <div className="quizButton">
                              {map?.get(i) === 'fail' ? (
                                <button
                                  onClick={() => RetakeSubmitQuiz(i)}
                                  className="red"
                                >
                                  Retake Quiz
                                </button>
                              ) : (
                                <button onClick={() => SubmitQuiz(i)}>
                                  Submit Quiz
                                </button>
                              )}

                              {/* <button onClick={SubmitQuiz}>Submit Quiz</button>   */}
                            </div>
                          )}
                        </>
                      )}
                      {quizResult === 'Pass' && (
                        <div className="passedQuiz">
                          <h2>Passed</h2>
                          <TiTick />
                          <button onClick={handleCloseQuizPopup}>Okay</button>
                        </div>
                      )}

                      {quizResult === 'Fail' && (
                        <div className="failedQuiz passedQuiz">
                          <h2>Failed (Less then 65%)</h2>
                          <ImCross />
                          <button onClick={handleCloseQuizPopup}>Okay</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Panel>
          </Collapse>
        ))}
      </div>

      <div className="teacherCard">
        <h1>Instructor</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div className="teacherImg">
            <img
              src={`${UserImg}/${course?.teacher?.profilePic}`}
              alt=""
              srcset=""
            />
          </div>
          <div className="teacherInfo">
            <h2>{`${course?.teacher?.name}, ${course?.teacher?.country}`}</h2>
            <h3>{course?.teacher?.email}</h3>
            <p>{course?.teacher?.userdescription}</p>
          </div>
        </div>
      </div>

      {quizPassed?.length === course?.sections?.length &&
        cenrollresult &&
        user.role === 'student' && (
          <div className="CertificateSection">
            <h2 className="SectionTitle">Course Certificate</h2>
            <h3 className="CourseName"> {course?.courseName}</h3>
            <div className="courseCertificateSection">
              <div className="studentInfo">
                <div className="certificateInfo">
                  <div className="left">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/public/img/users/${user.profilePic}`}
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <h2>
                      Completed by <span>{user?.name}</span>
                    </h2>
                    <h3>{`${
                      month[date1.getMonth()]
                    } ${date1.getDate()}, ${date1.getFullYear()}`}</h3>
                    <p>DevLearn certifies their successfll completion of </p>
                    <h4>{course?.courseName}</h4>
                    <h5>Congratulations !!</h5>
                  </div>
                </div>
                <div className="certificateDownloadBtn">
                  <button onClick={DownloadCertificate}>
                    {certificateDownloadLoading ? (
                      <CircularProgress disableShrink />
                    ) : (
                      ' Download Certificate'
                    )}
                  </button>
                </div>
              </div>
              <div className="courseCertificate" id="courseCertificate">
                <img src={certificateTemplate} alt="" />
                <h2>{user?.name}</h2>
                <h3>{course?.courseName}</h3>
                <h4>{`${
                  month[date1.getMonth()]
                } ${date1.getDate()}, ${date1.getFullYear()}`}</h4>
              </div>
            </div>
            <h4 className="TagLine">High Your Skills With DevLearn !</h4>
          </div>
        )}
      {/* 
      {cenrollresult && user.role === 'student' && (
        <div className="reviewFormSection">
          <h2 className="reviewSectionTitle">Add Review</h2>
          <form onSubmit={handleAddReview}>
            <TextField
              id="outlined-basic"
              label="Review"
              name="courseDuration"
              variant="outlined"
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
            <button type="submit">Add Review</button>
          </form>
        </div>
      )}

      <div className="reviewShowSection">
        <h2 className="reviewShowSectionTitle">All Reviews</h2>
        <div
          class=""
          style={{
            width: '70%',
            margin: '40px auto',
          }}
        >
          <div class="reviewContainer">
            <div class=" col-sm-11 col-md-9 col-lg-8 col-xl-7">
              <div class="card">
                <div class=" userInfoReview row d-flex justify-content-center">
                  <img
                    class="profile-pic fit-image"
                    src="https://i.imgur.com/RCwPA3O.jpg"
                  />

                  <p class="profile-name">Anne Snow</p>
                </div>
                <p class="post">
                  <span>
                    <img
                      class="quote-img"
                      src="https://i.imgur.com/i06xx2I.png"
                    />
                  </span>
                  <span class="post-txt">
                    I upgraded my Dribble account to the Pro version. Absolutely
                    loving the super clean look of the Playbook feature{' '}
                  </span>
                </p>
              </div>
              <div class="arrow-down"></div>
            </div>
            <div class=" col-sm-11 col-md-9 col-lg-8 col-xl-7">
              <div class="card">
                <div class=" userInfoReview row d-flex justify-content-center">
                  <img
                    class="profile-pic fit-image"
                    src="https://i.imgur.com/RCwPA3O.jpg"
                  />

                  <p class="profile-name">Anne Snow</p>
                </div>
                <p class="post">
                  <span>
                    <img
                      class="quote-img"
                      src="https://i.imgur.com/i06xx2I.png"
                    />
                  </span>
                  <span class="post-txt">
                    I upgraded my Dribble account to the Pro version. Absolutely
                    loving the super clean look of the Playbook feature{' '}
                  </span>
                </p>
              </div>
              <div class="arrow-down"></div>
            </div>
          </div>
        </div>
      </div> */}

      {course?.status === 'pending' && user?.role === 'admin' && (
        <div className="adminControl">
          <button
            onClick={() => {
              handleApproveCourse('approved');
            }}
          >
            {CourseApproveIsLoading ? (
              <CircularProgress disableShrink />
            ) : (
              'Approve'
            )}
          </button>
          <button
            onClick={() => {
              handleApproveCourse('rejected');
            }}
          >
            {CourseApproveIsLoading ? (
              <CircularProgress disableShrink />
            ) : (
              'Reject'
            )}
          </button>
        </div>
      )}

      {/* {course?.status === 'approved' && user?.role === 'student' && (
        <div className="StudentControl">
          <button onClick={handleGenerateCourseCertificate}>Generate Certificate</button>
        </div>
      )} */}

      <Footer />
    </>
  );
};

export default CoursePage;
