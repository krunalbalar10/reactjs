import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './index.css';
import AdminAddCategory from './AdminAddCategory';
import AdminAddCity from './AdminAddCity';
import AdminAddFeesManage from './AdminAddFeesManage';
import AdminAddSchoolmgt from './AdminAddSchoolmgt';
import AdminCategory from './AdminCategory';
import AdminChangePassword from './AdminChangePassword';
import AdminCity from './AdminCity';
import AdminContent from './AdminContent';
import AdminEditCategory from './AdminEditCategory';
import AdminEditCity from './AdminEditCity';
import AdminEditFeesmgt from './AdminEditFeesmgt';
import AdminEmailSchoolmgt from './AdminEmailSchoolmgt';
import AdminFeesManage from './AdminFeesManage';
import AdminFeesSchoolmgt from './AdminFeesSchoolmgt';
import AdminForgotLogin from './AdminForgotLogin';
import AdminIndex from './AdminIndex';
import AdminLogin from './AdminLogin';
import AdminProfile from './AdminProfile';
import AdminSchoolReg from './AdminSchoolReg';
import AdminSchoolmgt from './AdminSchoolmgt';
import AdminViewCategory from './AdminViewCategory';
import AdminViewCity from './AdminViewCity';
import AdminViewFees from './AdminViewFees';
import AdminViewSchoolmgt from './AdminViewSchoolmgt';
const root = ReactDOM.createRoot(document.getElementById('root'));
function NoPage() {
  return (
    <h1>Oops..Page not exist..</h1>
  )
}
function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/add-category" element={<AdminAddCategory />} />
        <Route path="/add-city" element={<AdminAddCity />} />
        <Route path="/add-fees" element={<AdminAddFeesManage />} />
        <Route path="/add-school" element={<AdminAddSchoolmgt />} />
        <Route path="/category" element={<AdminCategory />} />
        <Route path="/index" element={<AdminCategory />} />
        <Route path="/change-password" element={<AdminChangePassword />} />
        <Route path="/city" element={<AdminCity />} />
        <Route path="/content/:contentid" element={<AdminContent />} />
        <Route path="/edit-category/:categoryid" element={<AdminEditCategory />} />
        <Route path="/edit-city/:cityid" element={<AdminEditCity />} />
        <Route path="/edit-fees/:feesid" element={<AdminEditFeesmgt />} />
        <Route path="/email" element={<AdminEmailSchoolmgt />} />
        <Route path="/fees" element={<AdminFeesManage />} />
        <Route path="/fees-school" element={<AdminFeesSchoolmgt />} />
        <Route path="/forgot-login" element={<AdminForgotLogin />} />
        {/* <Route path="/profile" element={<AdminProfile />} /> */}
        <Route path="/schoolmgt" element={<AdminSchoolmgt />} />
        <Route path="/add-school" element={<AdminAddSchoolmgt />} />
        <Route path="/view-category/:viewcategoryid" element={<AdminViewCategory />} />
        <Route path="/view-city/:viewcityid" element={<AdminViewCity />} />
        <Route path="/view-fees/:viewfeesid" element={<AdminViewFees />} />
        <Route path="/view-schoolmgt/:viewschoolid" element={<AdminViewSchoolmgt />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<MyRoute />);











