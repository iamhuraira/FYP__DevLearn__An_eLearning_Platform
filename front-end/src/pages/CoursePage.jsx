/* eslint-disable no-unused-vars */
import React, { useState, Fragment, useEffect } from 'react'
import Header from '../components/Header/Header'
import HeaderDashboard from '../DashboardComponents/HeaderDashboard'
import python from '../assets/img/CourseImages/python.png'
import Footer from '../components/Footer/Footer'
import { BiVideo } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

import { useDispatch, useSelector } from 'react-redux'
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { useGetCourseByIdQuery, useGetCourseDeleteIdMutation, useGetCourseDeleteIdQuery } from '../Redux/api/courseSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { setCourseData } from '../Redux/slices/courseSlice'

const { Panel } = Collapse;




const CoursePage = () => {
    // const user = useSelector(state => state.user.userData)

    const [logedInUser, setLogedInUser] = useState(false)

    const param = useParams()
    // console.log(param.id)

    const { data = [], isLoading, isFetching, refetch } = useGetCourseByIdQuery(param.id, { refetchOnMountOrArgChange: true })

    useEffect(() => { 

    }, [data])


    const course = data.data
    const dispatch = useDispatch()
    dispatch(setCourseData(course))
    console.log(data.data)
    console.log(course?.status)


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
    const [quiz, setQuiz] = useState([])

    const [iFromeSrc, setiFromeSrc] = useState('')
    const chnageUrl = (url) => {
        const iFromeSrc = `https://www.youtube.com/embed/${url}?rel=0&autoplay=1`
        setiFromeSrc(iFromeSrc)
        setVideoPopup(true)

    }
    // const iFromeSrc = 'https://www.youtube.com/embed/


    const [videoPopup, setVideoPopup] = useState(false);
    const [quizPopup, setQuizPopup] = useState(false);
    const [showDeletePopup, setshowDeletePopup] = useState(false)
    useEffect(() => {
        if (videoPopup || quizPopup || showDeletePopup) {

            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = 'unset';
        }
    }, [videoPopup, quizPopup, showDeletePopup]);

    const [quizAnswer, setQuizAnswer] = useState([])
    // console.log(quizAnswer)
    // let myArray = new Array(); 
    const handleQuizAnswer = (i, ans) => {
        console.log(i, ans)
        // myArray[i] = ans
        const newarray = [...quizAnswer]
        newarray[i] = ans
        setQuizAnswer(newarray)

        //    console.log(myArray)

    }
    const handleOpenQuiz = (no) => {
        console.log(no)
        // console.log(course?.sections[no]?.quiz)
        const quiz1 = course?.sections[no]?.quiz.map((item, i) => {
            return {
                id: `${i + 1}`,
                question: item.question,
                options: [
                    item.option1,
                    item.option2,
                    item.option3,
                    item.option4
                ],
                answer: item.answer

            }
        })
        console.log(quiz1)
        setQuiz(quiz1)

        setQuizPopup(true)

    }
    const [quizResult, setQuizResult] = useState('')

    const SubmitQuiz = () => {
        // setQuizPopup(false)
        let result = quiz.map((item, i) => {
            if (item.answer === quizAnswer[i]) {
                return true
            } else {
                return false
            }
        })

        let count = 0;
        for (let i = 0; i < result.length; i++) {
            if (result[i] === true) {
                count++
            }
        }
        const percentage = (count / result.length) * 100
        percentage >= 65 ? setQuizResult('Pass') : setQuizResult('Fail')

        // setQuizResult(count);
        console.log(result)
        setQuizAnswer([]);
        result = [];
        console.log(quizAnswer)
    }
    const handleCloseQuizPopup = () => {
        setQuizPopup(false)
        setQuizResult('')
        setQuizAnswer([]);

    }
    const auth = localStorage.getItem('token')
    const user = useSelector(state => state.user.userData)
    const ImgUrl = `${process.env.REACT_APP_BASE_URL}/public/img/courses`;
    const UserImg = `${process.env.REACT_APP_BASE_URL}/public/img/users`;
    const DifficultyColor = {
        Beginner: "#00b300",
        Hard: "#febe00",
        Expert: "#ff0000",
    }
    const Dstyle = {
        color: DifficultyColor[course?.difficultylevel]
    }

    console.log(user.role)

    const navigate = useNavigate()

    const handleUpdateCourse = () => { 
        navigate(`/teacherdashboard/updatecourse/${course._id}`)
    }
    
    const [deleteCourse, response] = useGetCourseDeleteIdMutation()
   
    const handleDeleteCourse = () => { 
        deleteCourse(course._id)
        setshowDeletePopup(false)
        console.log(response)
        // navigate('/teacherdashboard')
     
    }
    return (
        <>
            {(videoPopup || quizPopup || showDeletePopup ) && <div className='overLay'></div>}
            {auth ? <HeaderDashboard user={user} /> : <Header />}
            {
                showDeletePopup && <div className="deletePopup">
                    <h2>
                        Are you sure you want to delete?
                    </h2>
                    <div className="confermButton">
                        <button onClick={() => { setshowDeletePopup(false) }}>No</button>
                        <button onClick={handleDeleteCourse}>Yes</button>
                    </div>
                </div>
            }

            {

                (course?.status === 'pending' || course?.status === 'rejected') && user?.role === 'teacher' && <div className='adminControl teacherControl'>
                    <button onClick={handleUpdateCourse}> Update</button>
                    <button onClick={() => setshowDeletePopup(true)}>Delete</button>
                </div>
            }

            <div className="backgroundCourse">
                <div className="courseHeader">
                    <div className="courseHeader__left">
                        <h2>{course?.courseName}</h2>
                        <p>{course?.shortDescription}.</p>
                        {
                            user.role !== 'admin' && user.role !== 'teacher' && <button >Enroll Now!</button>
                        }
                        {/* <button>Enroll Now!</button> */}
                    </div>
                    <div className="courseHeader__right">
                        <div className="imgBox">
                            <img src={`${ImgUrl}/${course?.selectImage}`} alt="" srcset="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='basicDetail'>
                <div className="basicDetailbox">
                    <h2>{course?.solvedExample}+</h2>
                    <hr />
                    <h3>
                        Solved Example
                    </h3>
                </div>
                <div className="basicDetailbox">
                    <h2>{course?.courseDuration}+</h2>
                    <hr />
                    <h3>
                        Hours of video content
                    </h3>
                </div>
                <div className="basicDetailbox">
                    <h2 style={Dstyle}>{course?.difficultylevel}</h2>
                    <hr />
                    <h3>
                        Difficulty level
                    </h3>
                </div>
            </div>

            <div className="courseContent">

                <h2>
                    Course Content
                </h2>
                {
                    course?.sections?.map((section, i) => (
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            // style={{ background: '#f7f7f7' }}
                            key={i}
                        >
                            <Panel header={section.sectionName} key="1" style={panelStyle}>

                                <div className='SectionContent'>
                                    <div className='left'>
                                        {
                                            section?.videoData?.map((video, vi) => (
                                                <div className='VideoDetails' key={vi} >
                                                    <BiVideo />
                                                    <p onClick={() => chnageUrl(video.videoLink)}>{video.videoName} </p>
                                                    {
                                                        videoPopup && <div className='viderPopup'>
                                                            <GrClose onClick={() => setVideoPopup(false)} />
                                                            <iframe src={iFromeSrc} title="YouTube video player" frameborder="0" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                                        </div>
                                                    }
                                                </div>
                                            ))
                                        }

                                    </div>
                                    <div className='right'>
                                        <button onClick={() => handleOpenQuiz(i)}>
                                            Quiz
                                        </button>
                                        {
                                            quizPopup && <div className='quizPopup'>
                                                <GrClose onClick={handleCloseQuizPopup} />
                                                {
                                                    quizResult === '' && (<>
                                                        <div>
                                                            <h2>Quiz</h2>
                                                        </div>
                                                        {
                                                            quiz?.map((question, index) => (
                                                                <div className='question' key={index}>
                                                                    <h3>{`${index + 1}. ${question.question}`}</h3>
                                                                    <div class="options">
                                                                        <ul class="list">
                                                                            <li class="list__item">
                                                                                <input type="radio" class="radio-btn" name={`choiceQ${index + 1}`} id={`a-opt${index + 1}`} onChange={() => handleQuizAnswer(index, question.options[0])}
                                                                                    checked={quizAnswer[index] === question.options[0] ? true : false}
                                                                                />
                                                                                <label for={`a-opt${index + 1}`} class="label">{question.options[0]}</label>
                                                                            </li>

                                                                            <li class="list__item">
                                                                                <input type="radio" class="radio-btn" name={`choiceQ${index + 1}`} id={`b-opt${index + 1}`} onChange={() => handleQuizAnswer(index, question.options[1])}
                                                                                    checked={quizAnswer[index] === question.options[1] ? true : false}
                                                                                />
                                                                                <label for={`b-opt${index + 1}`} class="label">{question.options[1]}</label>
                                                                            </li>

                                                                            <li class="list__item">
                                                                                <input type="radio" class="radio-btn" name={`choiceQ${index + 1}`} id={`c-opt${index + 1}`} onChange={() => handleQuizAnswer(index, question.options[2])}
                                                                                    checked={quizAnswer[index] === question.options[2] ? true : false}
                                                                                />
                                                                                <label for={`c-opt${index + 1}`} class="label">{question.options[2]}</label>
                                                                            </li>

                                                                            <li class="list__item">
                                                                                <input type="radio" class="radio-btn" name={`choiceQ${index + 1}`} id={`d-opt${index + 1}`} onChange={() => handleQuizAnswer(index, question.options[3])}
                                                                                    checked={quizAnswer[index] === question.options[3] ? true : false}
                                                                                />
                                                                                <label for={`d-opt${index + 1}`} class="label">{question.options[3]}</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }

                                                        {
                                                            user.role !== 'admin' && user.role !== 'teacher' && <div className='quizButton'>
                                                                <button onClick={SubmitQuiz}>
                                                                    Submit Quiz
                                                                </button>
                                                            </div>
                                                        }


                                                    </>
                                                    )
                                                }
                                                {
                                                    quizResult === 'Pass' && (<div className='passedQuiz'>
                                                        <h2>Passed</h2>
                                                        <TiTick />
                                                        <button onClick={handleCloseQuizPopup} >
                                                            Okay
                                                        </button>
                                                    </div>)
                                                }


                                                {
                                                    quizResult === 'Fail' && (<div className='failedQuiz passedQuiz'>
                                                        <h2>Failed (Less then 65%)</h2>
                                                        <ImCross />
                                                        <button onClick={handleCloseQuizPopup} >
                                                            Okay
                                                        </button>
                                                    </div>)
                                                }


                                            </div>

                                        }
                                    </div>
                                </div>
                            </Panel>


                        </Collapse>

                    ))
                }

            </div>

            <div className="teacherCard">
                <h1>Instructor</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>

                    <div className="teacherImg">
                        <img src={`${UserImg}/${course?.teacher?.profilePic}`} alt="" srcset="" />
                    </div>
                    <div className="teacherInfo">

                        <h2>{`${course?.teacher?.name}, ${course?.teacher?.country}`}</h2>
                        <h3>{course?.teacher?.email}</h3>
                        <p>{course?.teacher?.userdescription}</p>
                    </div>
                </div>
            </div>

            {
                course?.status === 'pending' && user?.role === 'admin' && <div className='adminControl'>
                    <button> Approve</button>
                    <button>Reject</button>
                </div>
            }




            <Footer />
        </>
    )
}

export default CoursePage