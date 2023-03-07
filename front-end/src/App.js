
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Terms from './pages/Terms';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Terms' element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
