import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import TextField from '@mui/material/TextField';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import Image from './Image';
// import DynamicForm from './DynamicForm';
// import { display } from '@mui/system';
const CreateCourse = () => {

    const [course, setCourse] = React.useState({
        name: '',
        shortDescription: '',
        solvedExample: '',
        courseDuration: '',
        practiceQuestions: '',

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
    const sectionTemplate = { sectionName: '', videoData: [videoTempalte] }





    const [sectionData, setsectionData] = React.useState([])
    // const [videoData, setvideoData] = React.useState([videoTempalte])



    const addSection = () => {
        setsectionData([...sectionData, sectionTemplate])
    }
    const addVideoData = (index) => {
        console.log(index)

        const newSectionData = [...sectionData]
        newSectionData[index].videoData.push(videoTempalte)
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




    return (
        <>
            <HeaderDashboard />
            {/* <DynamicForm /> */}
            <div className="course-div" >



                <form action="" onSubmit={handleSubmit}>
                    <div className="course-info">
                        <h2>Create Course</h2>
                        <div className="course-basic-info">
                            <TextField id="outlined-basic" label="Name" name='name' variant="outlined" onChange={getdata} />
                            <TextField id="outlined-basic" label="Short Description" name='shortDescription' variant="outlined" onChange={getdata} />
                        </div>
                        <div className="course-image">
                            <div className='courselogo'>
                                <input ref={courseLogoRef} type="file" hidden onChange={(e) => { setCourseLogo(e.target.files[0]) }} />
                                <button onClick={() => { courseLogoRef.current.click() }}>Select Logo</button>
                                <div className='imgcourse'>
                                    {courseLogo && <Image file={courseLogo} height={80} width={80} />}
                                </div>
                            </div>
                            <div className='courselogo'>
                                <input ref={courseImageRef} type="file" hidden onChange={(e) => { setCourseImage(e.target.files[0]) }} />
                                <button onClick={() => { courseImageRef.current.click() }}>Select Image</button>
                                <div className='imgcourse'>
                                    {courseImage && <Image file={courseImage} height={67.5} width={120} />}
                                </div>
                            </div>
                        </div>

                        <div className="course-content-info">
                            <TextField id="outlined-basic" label="Solved Example " name='solvedExample' variant="outlined" onChange={getdata} />
                            <TextField id="outlined-basic" label="Course Duration" name='courseDuration' variant="outlined" onChange={getdata} />
                            <TextField id="outlined-basic" label="Practice Questions" name='practiceQuestions' variant="outlined" onChange={getdata} />
                        </div>

                        {/* Course Section  */}
                        <div className="secttionBackground">
                            <h2>Course Section Details</h2>


                            {
                                sectionData.map((section, index) => (
                                    <div className="courseSection" key={index}>
                                        <TextField id="outlined-basic" label="Section Title" variant="outlined" />

                                        {/* Section Videos And Hedings */}
                                        {sectionData[index].videoData.map((video, i) => (
                                            <div className="sectionVideo" key={i}>
                                                <TextField id="outlined-basic" label="Video Title" variant="outlined" />
                                                <TextField id="outlined-basic" label="Video Link" variant="outlined" />
                                                <div className='del'>
                                                    {i == 0 ? '' : <MdDeleteForever onClick={() => handleRemoveVideoData(index, i)} />}
                                                    {/* <MdDeleteForever  /> */}
                                                </div>

                                            </div>
                                        ))}

                                        {/* <div className="sectionVideo" >
                                            <TextField id="outlined-basic" label="Video Heading"  variant="outlined" />
                                            <TextField id="outlined-basic" label="Video Link"  variant="outlined" />
                                             <div className='del'>
                                                      <MdDeleteForever />
                                                 </div> 

                                        </div> */}








                                        <div className='course-btns'>
                                            <button onClick={() => addVideoData(index)}> <IoMdAdd />Add Video</button>
                                            <MdDeleteForever onClick={() => removeSection(index)} />
                                            {/* {index == 0 ? '' : <MdDeleteForever onClick={removeSection} />} */}
                                        </div>

                                    </div>
                                ))
                            }

                            {/* <div className="courseSection">
                                <TextField id="outlined-basic" label="Section Heading" placeholder='Enter The Name of Section' name='solvedExample' variant="outlined" />

                                 Section Videos And Hedings 

                                <div className="sectionVideo">
                                    <TextField id="outlined-basic" label="Video Heading" placeholder='Enter The Name of Section' name='solvedExample' variant="outlined" />
                                    <TextField id="outlined-basic" label="Video Link" placeholder='Enter The Name of Section' name='solvedExample' variant="outlined" />
                                    <div className='del'>
                                        <MdDeleteForever />
                                    </div>

                                </div>

                                <div className='course-btns'>
                                    <button> <IoMdAdd />Add Video</button>
                                    <button> <MdDeleteForever />Delete Section</button>
                               </div>

                            </div> */}

                            <button onClick={addSection}> <IoMdAdd />Add Section</button>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}

export default CreateCourse