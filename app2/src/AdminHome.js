import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { NetworkError } from "./toast-message";
import ApiURL from "./Adminapi";
import axios from "axios";
import VerifyLogin from "./VerifyLogin";


export default function AdminHome() {

    VerifyLogin();

    let [dailySales , setDailySales] = useState('');
    let [weeklySales , setWeeklySales] = useState('');
    let [monthlySales , setMonthlySales] = useState('');
    let [yearlySales , setYearlySales] = useState('');
    let [users , setUsers] = useState('');
    let [products , setProducts] = useState('');
    let [categories , setCategories] = useState('');

    let [scroll , setScroll] = useState(false);

    useEffect(() => {
        if(scroll === false)
        {
            let apiAddress = ApiURL() + 'summery.php';
        console.log(apiAddress)
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            
            let error = response.data[0]['error']
            if(error !== 'no')
                showError(error);
            else
            {
                setDailySales(response.data[1]['daily']);
                setMonthlySales(response.data[1]['monthly']);
                setWeeklySales(response.data[1]['weekly']);
                setYearlySales(response.data[1]['yearly']);
                setUsers(response.data[1]['users']);
                setProducts(response.data[1]['products']);
                setCategories(response.data[1]['categories'])
                setScroll(true);
            }
        }).catch((error) => {
            NetworkError();
        })
        }
    })

    return (
        <div className="wrapper">
            <AdminMenu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">

                </nav>
                <ToastContainer/>
                <main className="content">
                    <div className="container-fluid p-0">
                        {/* first row */}
                        <div className="row">
                            <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between">
                                <h1 className="h3 p-3 text-white">Sales Summery</h1>
                            </div>
                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Today Sales</b></h4>
                                        <h5><span className="badge bg-primary">{dailySales}</span>&nbsp;Orders</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Weekly Sales</b></h4>
                                        <h5><span className="badge bg-primary">{weeklySales}</span>&nbsp;Orders</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Monthly Sales</b></h4>
                                        <h5><span className="badge bg-primary">{monthlySales}</span>&nbsp;Orders</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Yearly Sales</b></h4>
                                        <h5><span className="badge bg-primary">{yearlySales}</span>&nbsp;Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* second row */}
                        <div className="row">
                            <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between">
                                <h1 className="h3 p-3 text-white">Shop Summery</h1>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Total Users</b></h4>
                                        <h5><span className="badge bg-primary">{users}</span>&nbsp;Users</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Total Product</b></h4>
                                        <h5><span className="badge bg-primary">{products}</span>&nbsp;Products</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Total Categories</b></h4>
                                        <h5><span className="badge bg-primary">{categories}</span>&nbsp;Categories</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <AdminFooter />
            </div>
        </div>
    )
}