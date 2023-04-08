
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

          {/* Dashboard Routes */}

          {/* <Route path='/studentdashboard' element={<TeacherDashboard />} />
          <Route path='/admin' element={<TeacherDashboard />} /> */}


          {/* Teacher Routes */}
          <Route path='/teacherdashboard' element={<TeacherDashboard  user={user}  />} />
          <Route path='/teacherdashboard/createcourse' element={<CreateCourse />} />

          {/* Admin Routes */}
          <Route path='/admindashboard' element={<AdminDashboard />} />

          {/* Student Routes */}
          <Route path='/studentdashboard' element={<StudentDashboard />} />




          {/* Common Routes  Dynamic Route */}
          <Route path='/dashboard/updateprofile' element={<UpdateProfile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
