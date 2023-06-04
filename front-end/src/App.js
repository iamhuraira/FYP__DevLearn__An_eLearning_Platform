
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './assets/scss/main.scss'
// import { useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Terms from './pages/Terms';
import TeacherDashboard from './pages/Dashboard/Teacher/TeacherDashboard';
import CreateCourse from './pages/Dashboard/Teacher/CreateCourse';
import UpdateProfile from './pages/Dashboard/UpdateProfile';
import ChangePassword from './pages/Dashboard/ChangePassword';
import CoursePage from './pages/CoursePage';
import AdminSignUp from './pages/AdminSignUp';
import AdminDashboard from './pages/Dashboard/Admin/AdminDashboard';
import StudentDashboard from './pages/Dashboard/Student/StudentDashboard';
import Price from './pages/Price';
import Courses from './pages/Courses';
import ViewCourseT from './pages/Dashboard/Teacher/ViewCourseT';
import ViewRequests from './pages/Dashboard/Admin/ViewRequests';
import PageNotFound404 from './pages/PageNotFound404';
import EmailVerification from './pages/EmailVerification';




// import { useEffect, useState } from 'react';
function App() {




  return (


    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/adminSignUp' element={<AdminSignUp />} />
          <Route path='/Terms' element={<Terms />} />
          <Route path='/price' element={<Price />} />

          {/* Dashboard Routes */}

          {/* <Route path='/studentdashboard' element={<TeacherDashboard />} />
          <Route path='/admin' element={<TeacherDashboard />} /> */}


          {/* Teacher Routes */}
          <Route path='/teacherdashboard' element={<TeacherDashboard />} />
          <Route path='/teacherdashboard/createcourse' element={<CreateCourse />} />
          <Route path='/teacherdashboard/viewcourses' element={<ViewCourseT />} />

          {/* Admin Routes */}
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/admin/viewrequests' element={<ViewRequests />} />


          {/* Student Routes */}
          <Route path='/studentdashboard' element={<StudentDashboard />} />




          {/* Common Routes  Dynamic Route */}
          <Route path='/dashboard/updateprofile' element={<UpdateProfile />} />
          <Route path='/dashboard/changepassword' element={<ChangePassword />} />
          <Route path='/coursedetails/:id' element={<CoursePage />} />
          <Route path='/courses' element={<Courses />} />

          <Route path='*' element={<PageNotFound404 />} />
          
          <Route path='/api/v1/users/verifyemail/:token' element={<EmailVerification />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
