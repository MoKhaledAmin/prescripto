import React from 'react';

// React Router
import { Route, Routes } from 'react-router-dom';

// Components
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';

const App = () => {
    return (
        <React.Fragment>
            <div className='mx-4 sm:mx-[10%]'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/doctors' element={<Doctors />} />
                    <Route path='/doctors/:speciality' element={<Doctors />} />
                    <Route path='/my-appointments' element={<MyAppointments />} />
                    <Route path='/appointment/:docId' element={<Appointment />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}

export default App;