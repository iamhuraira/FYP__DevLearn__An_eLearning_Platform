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

import { useSelector } from 'react-redux'
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const CoursePage = () => {
    const useDatar = useSelector(state => state.user.userData)

    const [logedInUser, setLogedInUser] = useState(false)

    const panelStyle = {
        marginBottom: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        // eslint-disable-next-line no-undef
        background: 'rgba(35, 186, 177, 0.05)',
        borderRadius: 10,
        border: 'none',
        width: '60%',


    };
    // 7S_tz1z_5bA';

    const quiz = [
        {
            id: 1,
            question: 'What is the capital of France?',
            options: [
                'New York',
                'London',
                'Paris',
                'Dublin'
            ],
            answer: 'Paris'

        },
        {
            id: 2,
            question: 'Who is CEO of Tesla?',
            options: [
                'Jeff Bezos',
                'Elon Musk',
                'Bill Gates',
                'Tony Stark'
            ],
            answer: 'Elon Musk'
        }

    ]

    const [iFromeSrc, setiFromeSrc] = useState('')
    const chnageUrl = (url) => {
        const iFromeSrc = `https://www.youtube.com/embed/${url}`
        setiFromeSrc(iFromeSrc)
        setVideoPopup(true)

    }
    // const iFromeSrc = 'https://www.youtube.com/embed/


    const [videoPopup, setVideoPopup] = useState(false);
    const [quizPopup, setQuizPopup] = useState(false);

    useEffect(() => {
        if (videoPopup || quizPopup) {

            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = 'unset';
        }
    }, [videoPopup, quizPopup]);

    const [quizAnswer, setQuizAnswer] = useState([])

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
        setQuizPopup(true)

    }
    const [quizResult, setQuizResult] = useState('')

    const SubmitQuiz = () => {
        // setQuizPopup(false)
        const result = quiz.map((item, i) => {
            if (item.answer === quizAnswer[i]) {
                return true
            } else {
                return false
            }
        })
        console.log(result)
    }

    return (
        <>
            {(videoPopup || quizPopup) && <div className='overLay'></div>}
            {logedInUser ? <HeaderDashboard user={useDatar} /> : <Header />}


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
            <div className='basicDetail'>
                <div className="basicDetailbox">
                    <h2>42+</h2>
                    <hr />
                    <h3>
                        Solved Example
                    </h3>
                </div>
                <div className="basicDetailbox">
                    <h2>20+</h2>
                    <hr />
                    <h3>
                        Hours of video content
                    </h3>
                </div>
                <div className="basicDetailbox">
                    <h2>Easy</h2>
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
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                // style={{ background: '#f7f7f7' }}
                >
                    <Panel header="Programming for Everybody (Getting Started with Python)" key="1" style={panelStyle}>

                        <div className='SectionContent'>
                            <div className='left'>
                                <div className='VideoDetails'>
                                    <BiVideo />
                                    <p onClick={() => chnageUrl('cAMHx-m9oh8')}> HTML Introduction in Urdu.</p>
                                    {
                                        videoPopup && <div className='viderPopup'>
                                            <GrClose onClick={() => setVideoPopup(false)} />
                                            <iframe src={iFromeSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                        </div>
                                    }
                                </div>
                                <div className='VideoDetails'>
                                    <BiVideo />
                                    <a href="">HTML Introduction in Urdu.</a>
                                </div>
                            </div>
                            <div className='right'>
                                <button onClick={() => handleOpenQuiz(2)}>
                                    Quiz
                                </button>
                                {
                                    quizPopup && <div className='quizPopup'>
                                        <GrClose onClick={() => setQuizPopup(false)} />
                                        {
                                            quizResult === '' && (<>
                                                <div>
                                                    <h2>Quiz</h2>
                                                </div>
                                                <div className='question'>
                                                    <h3>1. What is HTML?</h3>
                                                    <div class="options">
                                                        <ul class="list">
                                                            <li class="list__item">
                                                                <input type="radio" class="radio-btn" name="choice" id="a-opt" />
                                                                <label for="a-opt" class="label">pick me!</label>
                                                            </li>

                                                            <li class="list__item">
                                                                <input type="radio" class="radio-btn" name="choice" id="b-opt" />
                                                                <label for="b-opt" class="label">pick me i'm better!</label>
                                                            </li>

                                                            <li class="list__item">
                                                                <input type="radio" class="radio-btn" name="choice" id="c-opt" />
                                                                <label for="c-opt" class="label">pick me i'm the best!</label>
                                                            </li>

                                                            <li class="list__item">
                                                                <input type="radio" class="radio-btn" name="choice" id="d-opt" />
                                                                <label for="d-opt" class="label">pick me i'm fabulous!</label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {
                                                    quiz.map((question, index) => (
                                                        <div className='question'>
                                                            <h3>{`${index + 1}. ${question.question}`}</h3>
                                                            <div class="options">
                                                                <ul class="list">
                                                                    <li class="list__item">
                                                                        <input type="radio" class="radio-btn" name={`choiceQ${index + 1}`} id={`a-opt${index + 1}`} onChange={() => handleQuizAnswer(index, question.options[0])} />
                                                                        <label for={`a-opt${index + 1}`} class="label">{question.options[0]}</label>
                                                                    </li>

                                                                    <li class="list__item">
                                                                        <input type="radio" class="radio-btn" name={`choiceQ${index + 1}`} id={`b-opt${index + 1}`} onChange={() => handleQuizAnswer(index, question.options[1])} />
                                                                        <label for={`b-opt${index + 1}`} class="label">{question.options[1]}</label>
                                                                    </li>

                                                                    <li class="list__item">
                                                                        <input type="radio" class="radio-btn" name={`choiceQ${index + 1}`} id={`c-opt${index + 1}`} onChange={() => handleQuizAnswer(index, question.options[2])} />
                                                                        <label for={`c-opt${index + 1}`} class="label">{question.options[2]}</label>
                                                                    </li>

                                                                    <li class="list__item">
                                                                        <input type="radio" class="radio-btn" name={`choiceQ${index + 1}`} id={`d-opt${index + 1}`} onChange={() => handleQuizAnswer(index, question.options[3])} />
                                                                        <label for={`d-opt${index + 1}`} class="label">{question.options[3]}</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                                <div className='quizButton'>
                                                    <button onClick={SubmitQuiz}>
                                                        Submit Quiz
                                                    </button>
                                                </div>
                                            </>
                                            )
                                        }
                                        {
                                            quizResult === 'true' && (<div className='passedQuiz'>
                                                <h2>Passed</h2>
                                                <TiTick />
                                                <button onClick={() => setQuizPopup(false)} >
                                                    Okay
                                                </button>
                                            </div>)
                                        }


                                        {
                                            quizResult === 'false' && (<div className='failedQuiz passedQuiz'>
                                                <h2>Failed</h2>
                                                <ImCross />
                                                <button onClick={() => setQuizPopup(false)} >
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

            </div>


            <Footer />
        </>
    )
}

export default CoursePage