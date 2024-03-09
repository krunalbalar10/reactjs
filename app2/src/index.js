import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import AdminAddNewCategory from './AdminAddNewCategory';
import AdminAddNewProduct from './AdminAddNewProduct';
import AdminCategory from './AdminCategory';
import AdminChangePassword from './AdminChangePassword';
import AdminEditCategory from './AdminEditCategory';
import AdminEditProduct from './AdminEditProduct';
import AdminHome from './AdminHome';
import AdminOrderDetails from './AdminOrderDetails';
import AdminOrders from './AdminOrders';
import AdminProducts from './AdminProducts';
import AdminUsers from './AdminUsers';
import AdminViewProduct from './AdminViewProduct';
import AdminLogout from './AdminLogout';
let NoPageFound = () => <h1>No Such Page Exist , Please Try Again!</h1>

function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<AdminLogin />} />
                <Route path='/forgot-password' element={<AdminForgotPassword/>}/>
                <Route path='/add-new-category' element={<AdminAddNewCategory />} />
                <Route path='/add-new-product' element={<AdminAddNewProduct />} />
                <Route path='/category' element={<AdminCategory />} />
                <Route path='/change-password' element={<AdminChangePassword />} />
                <Route path='/edit-category/:categoryid' element={<AdminEditCategory />} />
                <Route path='/edit-product/:productid' element={<AdminEditProduct />} />
                <Route path='/home' element={<AdminHome />} />
                <Route path='/order-details/:orderid' element={<AdminOrderDetails />} />
                <Route path='/orders' element={<AdminOrders />} />
                <Route path='/products' element={<AdminProducts />} />
                <Route path='/users' element={<AdminUsers />} />
                <Route path='/logout' element={<AdminLogout />} />
                {/* we can give any name after : like here :productid */}
                <Route path='/view-product/:productid' element={<AdminViewProduct />} />
                <Route path='*' element={<NoPageFound />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);


