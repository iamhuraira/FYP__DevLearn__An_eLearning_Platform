import React, { useEffect, useState } from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { BsFillSendFill } from 'react-icons/bs';
import Image from './Image';
import { Alert, FormControl, InputLabel, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
// import DynamicForm from './DynamicForm';
// import { display } from '@mui/system';
const CreateCourse = () => {

    const [course, setCourse] = React.useState({
        name: '',
        shortDescription: '',
        solvedExample: '',
        courseDuration: '',
        deficulty: '',

    })

    const [courseLogo, setCourseLogo] = React.useState(null)
    const [courseImage, setCourseImage] = React.useState(null)
    const courseLogoRef = React.useRef(null)
    const courseImageRef = React.useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const getdata = (e) => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        })
    }


    //  Dynamic Course Data Handle

    const videoTempalte = { videoName: '', videoLink: '' }
    const questionTemplate = { question: '', option1: '', option2: '', option3: '', option4: '', answer: '' }

    const sectionTemplate = { sectionName: '', videoData: [videoTempalte], quiz: [questionTemplate] }





    const [sectionData, setsectionData] = React.useState([])
    // const [videoData, setvideoData] = React.useState([videoTempalte])

    const handleData = (si, e) => {
        // console.log(si)
        // console.log(e.target.name)
        // console.log(e.target.value)
        const updatedSection = sectionData.map((section, index) =>
            index === si ? Object.assign(section, { [e.target.name]: e.target.value }) : section
        )
        // console.log(updatedSection)
        setsectionData(updatedSection);
        // console.log(sectionData)
    }

    const handleVideoData = (si, vi, e) => {
        const updatedSection = sectionData.map((section, index) =>
            index === si ? Object.assign(section, {
                videoData: section.videoData.map((video, vindex) =>
                    vindex === vi ? Object.assign(video, { [e.target.name]: e.target.value }) : video
                )
            }) : section
        )
        // console.log(updatedSection)
        setsectionData(updatedSection);
    }

    const handleQuestionData = (si, qi, e) => {
        const updatedSection = sectionData.map((section, index) =>
            index === si ? Object.assign(section, {
                quiz: section.quiz.map((question, qindex) =>
                    qindex === qi ? Object.assign(question, { [e.target.name]: e.target.value }) : question
                )

            }) : section
        )

        setsectionData(updatedSection);
    }


    const addSection = () => {
        setsectionData([...sectionData, sectionTemplate])
    }
    const addVideoData = (index) => {
        console.log(index)

        const newSectionData = [...sectionData]
        newSectionData[index].videoData.push(videoTempalte)
        setsectionData(newSectionData)

    }
    const addQuestionData = (index) => {
        const newSectionData = [...sectionData]
        newSectionData[index].quiz.push(questionTemplate)
        setsectionData(newSectionData)
    }
    const removeSection = (index) => {
        // console.log(index)
        const newSectionData = [...sectionData]
        newSectionData.splice(index, 1)
        setsectionData(newSectionData)
    }

    const handleRemoveVideoData = (sectionIndex, videoIndex) => {
        const newSectionData = [...sectionData]
        newSectionData[sectionIndex].videoData.splice(videoIndex, 1)

        setsectionData(newSectionData)
    }

    const handleRemoveQuestionData = (sectionIndex, questionIndex) => {
        const newSectionData = [...sectionData]
        newSectionData[sectionIndex].quiz.splice(questionIndex, 1)
        setsectionData(newSectionData)
    }


    const [msg, setMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const validateData = () => {

        if (course.name === '' || course.shortDescription === '' || course.solvedExample === '' || course.courseDuration === '' || course.deficulty === '' || courseLogo === null || courseImage === null) { 

            if (course.name === '') { 
                setMsg('Please fill course name');
                setShowAlert(true);
                return false;
            }
            if (course.shortDescription === '') { 
                setMsg('Please fill short description');
                setShowAlert(true);
                return false;
            }
            if (course.solvedExample === '') { 
                setMsg('Please fill solved example');
                setShowAlert(true);
                return false;
            }
            if (course.courseDuration === '') { 
                setMsg('Please fill course duration');
                setShowAlert(true);
                return false;
            }
            if (course.deficulty === '') { 
                setMsg('Please fill deficulty');
                setShowAlert(true);
                return false;

            }
            if (courseLogo === null) { 
                const parent = document.getElementById('courseLogo').parentNode;
                parent.classList.add('error');
                setMsg('Please upload course logo');
                setShowAlert(true);
                return false;

            }
            if (courseImage === null) { 
                const parent = document.getElementById('courseImage').parentNode;
                parent.classList.add('error');
                setMsg('Please upload course image');
                setShowAlert(true);
                return false;
            }
            return false;
        }


        for (let i = 0; sectionData.length > i; i++) {
            if (sectionData[i].sectionName === '') {
                setMsg('Please fill all section name');
                setShowAlert(true);
                return false;
            }
            for (let j = 0; sectionData[i].videoData.length > j; j++) {
                if (sectionData[i].videoData[j].videoName === '' || sectionData[i].videoData[j].videoLink === '') {
                    setMsg('Please fill all video name and video link');
                    setShowAlert(true);

                    return false;
                }
            }
            for (let k = 0; sectionData[i].quiz.length > k; k++) {
                if (sectionData[i].quiz[k].Question === '' || sectionData[i].quiz[k].option1 === '' || sectionData[i].quiz[k].option2 === '' || sectionData[i].quiz[k].option3 === '' || sectionData[i].quiz[k].option4 === '' || sectionData[i].quiz[k].answer === '') {
                    setMsg('Please fill all question and options');
                    setShowAlert(true);
                   
                    return false;
                }
            }
        }

        setShowAlert(false);
       
        handleCourseSubmit();
    }

    let completeCourseData = {
        name: course.name,
        shortDescription: course.shortDescription,
        solvedExample: course.solvedExample,
        courseDuration: course.courseDuration,
        deficulty: course.deficulty,
        courseLogo: courseLogo,
        courseImage: courseImage,
        sectionData: sectionData
    }
    const handleCourseSubmit = () => {
        // console.log(sectionData)
        console.log(completeCourseData)
        // alert('Course Created Successfully')
        
        

    }
   
    useEffect(() => { 
        setTimeout(() => { 
            setShowAlert(false);
        }, 5000)
    }, [showAlert])


    const useDatar = useSelector(state => state.user.userData)
  


    return (
        <>
            <HeaderDashboard user={useDatar} />
            {/* <DynamicForm /> */}
            <div className="course-div" >



                <form action="" onSubmit={handleSubmit}>
                    <div className="course-info">
                        <h2>Create Course</h2>
                       
                        {showAlert && <div className='Error' style={{ margin: "20px auto", position:"fixed", zIndex:"99", bottom:"-15rem", left:"-14rem"}}> <Alert variant="filled" severity="error">{msg}</Alert></div>}
                        <div className="course-basic-info">
                            <TextField id="outlined-basic" label="Name" name='name' variant="outlined" onChange={getdata}  error={course.name===''}/>
                            <TextField id="outlined-basic" label="Short Description" name='shortDescription' variant="outlined" onChange={getdata} error={course.shortDescription === ''} />
                        </div>
                        <div className="course-image">
                            <div className='courselogo'>
                                <input ref={courseLogoRef} type="file" hidden onChange={(e) => { setCourseLogo(e.target.files[0]) }} id='courseLogo' />
                                <button onClick={() => { courseLogoRef.current.click() }}>Select Logo</button>
                                <div className='imgcourse'>
                                    {courseLogo && <Image file={courseLogo} height={80} width={80} />}
                                </div>
                            </div>
                            <div className='courselogo'>
                                <input ref={courseImageRef} type="file" hidden onChange={(e) => { setCourseImage(e.target.files[0]) }} id='courseImage' />
                                <button onClick={() => { courseImageRef.current.click() }}>Select Image</button>
                                <div className='imgcourse'>
                                    {courseImage && <Image file={courseImage} height={67.5} width={120} />}
                                </div>
                            </div>
                        </div>

                        <div className="course-content-info">
                            <TextField id="outlined-basic" label="Solved Example " name='solvedExample' variant="outlined" onChange={getdata} error={course.solvedExample === ''} />
                            <TextField id="outlined-basic" label="Course Duration Hours" name='courseDuration' variant="outlined" onChange={getdata} error={course.courseDuration === ''} />
                            <FormControl className='difficultylevel'>
                                <InputLabel id="demo-simple-select-label" error={course.deficulty === ''}>Difficulty Level</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='deficulty'
                                    value={course.deficulty}
                                    label="Difficulty Level"
                                    onChange={getdata}
                                    error={course.deficulty === ''}
                                >
                                    <MenuItem value={'Beginner'} style={{ fontSize: '1.9rem' }}  >Beginner</MenuItem>
                                    <MenuItem value={'Hard'} style={{ fontSize: '1.9rem' }} >Hard</MenuItem>
                                    <MenuItem value={'Expert'} style={{ fontSize: '1.9rem' }} >Expert</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    {/* Course Section  */}
                    <div className="secttionBackground">
                        <h2>Course Section Details</h2>


                        {
                            sectionData.map((section, index) => (
                                <div className="courseSection" key={index}>
                                    <TextField id="outlined-basic" label="Section Title" name='sectionName' variant="outlined"
                                        onChange={(e) => handleData(index, e)}
                                        error={sectionData[index].sectionName === ''}
                                    />

                                    {/* Section Videos And Hedings */}

                                    <div className="VideoSection">


                                        {sectionData[index].videoData.map((video, i) => (
                                            <div className="sectionVideo" key={i}>
                                                <TextField id="outlined-basic" label="Video Title" name='videoName' variant="outlined" onChange={(e) => handleVideoData(index, i, e)} error={sectionData[index].videoData[i].videoName === ''}/>
                                                <TextField id="outlined-basic" label="Video Link" name='videoLink' variant="outlined" onChange={(e) => handleVideoData(index, i, e)} error={sectionData[index].videoData[i].videoLink === ''} />
                                                <div className='del'>

                                                    {(i !== sectionData[index].videoData.length - 1 || i === 0) ? '' : <MdDeleteForever onClick={() => handleRemoveVideoData(index, i)} />}
                                                    {/* <MdDeleteForever  /> */}
                                                </div>

                                            </div>
                                        ))}

                                        <div className='course-btns'>
                                            <button onClick={() => addVideoData(index)}> <IoMdAdd />Add Video</button>
                                            {index !== sectionData.length - 1 ? '' : <div className='delete' ><MdDeleteForever onClick={() => removeSection(index)} /> </div>}

                                            {/* {index == 0 ? '' : <MdDeleteForever onClick={removeSection} />} */}
                                        </div>
                                    </div>
                                    <div className="QuizSection">
                                        <h2>Quiz </h2>



                                        {sectionData[index].quiz.map((question, i) => (
                                            <div className="quizSection" key={i}>
                                                <h2>{`Question ${i + 1}`}</h2>
                                                <div className="question">
                                                    <TextField id="outlined-basic" label="Question" name='question' variant="outlined" onChange={(e) => handleQuestionData(index, i, e)} error={sectionData[index].quiz[i].question === ''} />
                                                    <div className='del'>
                                                        {(i !== sectionData[index].quiz.length - 1 || i === 0) ? '' : <MdDeleteForever onClick={() => handleRemoveQuestionData(index, i)} />}
                                                        {/* {(i == 0) ? '' : <MdDeleteForever onClick={() => handleRemoveQuestionData(index, i)} />} */}
                                                    </div>
                                                </div>
                                                <div className="options">
                                                    <TextField id="outlined-basic" label="Option 1" variant="outlined" name="option1" onChange={(e) => handleQuestionData(index, i, e)}  error={sectionData[index].quiz[i].option1 === ''}  />
                                                    <TextField id="outlined-basic" label="Option 2" variant="outlined" name="option2" onChange={(e) => handleQuestionData(index, i, e)}   error={sectionData[index].quiz[i].option2 === ''} />
                                                    <TextField id="outlined-basic" label="Option 3" variant="outlined" name="option3" onChange={(e) => handleQuestionData(index, i, e)}   error={sectionData[index].quiz[i].option3 === ''} />
                                                    <TextField id="outlined-basic" label="Option 4" variant="outlined" name="option4" onChange={(e) => handleQuestionData(index, i, e)}   error={sectionData[index].quiz[i].option4 === ''} />
                                                </div>
                                                <div className="answer">
                                                    <TextField id="outlined-basic" label="Answer" name='answer' variant="outlined" onChange={(e) => handleQuestionData(index, i, e)} error={sectionData[index].quiz[i].answer === ''} />
                                                </div>



                                            </div>

                                        ))}
                                        <div className='course-btns'>
                                            <button onClick={() => addQuestionData(index)}> <IoMdAdd />Add Question</button>
                                        </div>
                                    </div>


                                </div>
                            ))
                        }


                        <button onClick={addSection} style={{ width: "300px", margin: "30px auto" }}> <IoMdAdd />Add Section</button>
                    </div>
            </div>

            <div>
                <button type='submit' onClick={validateData} className='submitButton'>Submit Course <BsFillSendFill /> </button>
            </div>


        </form >
            </div >

        </>
    )
}

export default CreateCourse