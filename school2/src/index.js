import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import BoardingSchool from './BoardingSchool';
import ChangePassword from './ChangePassword';
import CompareSchool from './CompareSchool';
import ExploreSchool from './ExploreSchool';

let NoPageFound = () => <h1>No Such Page Exist , Please Try Again!</h1>

function MyRoute() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/changepassword' element={<ChangePassword/>} />
          <Route path='/boardingschool' element={<BoardingSchool/>} />
          <Route path='/compareschool' element={<CompareSchool/>} />
          <Route path='/exploreschool' element={<ExploreSchool/>} />
          
          <Route path='*' element={<NoPageFound/>} />
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRoute/>);


