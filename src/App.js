import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinments from './Pages/Appoinments/Appoinments';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequiredAuth from './Pages/Login/RequiredAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequiredAdmin from './Pages/Login/RequiredAdmin';

function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={
          <RequiredAuth>
            <Appoinments></Appoinments>
          </RequiredAuth>
        }></Route>
        <Route path='/dashboard' element={<RequiredAuth><Dashboard></Dashboard> </RequiredAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview> </MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequiredAdmin><Users></Users></RequiredAdmin>}></Route>
        </Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
