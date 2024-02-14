import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Counsellor from './components/Counsellor';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import ContactUs from './components/ContactUs';
import FetchRegistrations from './components/FetchRegistrations';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/signup' element={<SignUp/>} exact/>
        <Route path='/signin' element={<SignIn/>} exact/>
        <Route path='/counsellor' element={<Counsellor/>} exact/>
        <Route path='/visitor' element={<Visitor/>} exact/>
        <Route path='/appointment' element={<Appointment/>} exact/>
        <Route path='/contactus' element={<ContactUs/>} exact/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
