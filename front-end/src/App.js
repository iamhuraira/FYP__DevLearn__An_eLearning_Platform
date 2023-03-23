
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Terms from './pages/Terms';
import TeacherDashboard from './pages/Dashboard/Teacher/TeacherDashboard';
import CreateCourse from './pages/Dashboard/Teacher/CreateCourse';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Terms' element={<Terms />} />

          {/* Dashboard Routes */}
        
          {/* <Route path='/studentdashboard' element={<TeacherDashboard />} />
          <Route path='/admin' element={<TeacherDashboard />} /> */}

          
          {/* Teacher Routes */}
          <Route path='/teacherdashboard' element={<TeacherDashboard />} />
          <Route path='/teacherdashboard/createcourse' element={<CreateCourse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
