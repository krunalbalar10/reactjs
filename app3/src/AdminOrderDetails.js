import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import ApiURL from "./Adminapi";
import showError from "./toast-message";
import axios from "axios";
import VerifyLogin from "./VerifyLogin";

export default function AdminOrderDetails() {

    VerifyLogin();
//create variable to store orderid passed as query string
    let {orderid} = useParams();

    let [order , setOrder] = useState({});

    useEffect(() => {
        let apiAddress = ApiURL() + "orders.php?id=" + orderid;
        console.log(apiAddress);
        axios({
            method:"get",
            responseType:'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if(error !== 'no')
            {
                showError(error);
            }
            else if(response.data[1]['total'] === 0)
            {
                showError('no order details found');
            }
            else 
            {
                setOrder(response.data[2]);
            }
        })
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
                        <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                            <h1 className="h3 p-3 text-white">Orders</h1>
                            <span>
                                <Link to="/orders" className="btn btn-light m-3">Back&nbsp;<i className="fa-solid fa-arrow-left" /></Link>
                                <button type="button" className="btn btn-primary me-2" onClick={window.print}>Print</button>
                            </span>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-header">
                                    <h4>
                                        Order Details
                                        
                                        <hr width="40%" />
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-sm">
                                        <tbody><tr>
                                            <th>Bill No</th>
                                            <td>{order.id}</td>
                                            <th>Customer ID</th>
                                            <td>{order.id}</td>
                                        </tr>
                                            <tr>
                                                <th>Date</th>
                                                <td>{order.billdate}</td>
                                                <th>Name</th>
                                                <td>{order.fullname}</td>
                                            </tr>
                                            <tr>
                                                <th>Amount</th>
                                                <td>{order.amount}</td> {/* Assuming Indian Rupees */}
                                                <th>Address</th>
                                                <td>{order.address1} {order.address2}</td>
                                            </tr>
                                            <tr>
                                                <th>Payment status</th>
                                                <td>{order.id}</td>
                                                <th>City</th>
                                                <td>{order.city}</td>
                                            </tr>
                                            <tr>
                                                <th>Order Status</th>
                                                <td>{order.orderstatus}
                                                    <select name="orderstatus" className="form-select">
                                                        <option value>change order status</option>
                                                        <option value={1}>Confirmed</option>
                                                        <option value={2}>Dispatched</option>
                                                        <option value={3}>Delivered</option>
                                                        <option value={4}>Return</option>
                                                    </select>
                                                </td>
                                                <th>Pincode</th>
                                                <td>{order.pincode}</td>
                                            </tr>
                                            <tr>
                                                <th>Remarks</th>
                                                <td>Gift packing</td>
                                                <th>Mobile</th>
                                                <td>(555) 123-4567</td>
                                            </tr>
                                        </tbody></table>
                                    <table className="table table-bordered table-striped table-sm mt-3">
                                        <thead>
                                            <tr>
                                                <th>Product ID</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>001</td>
                                                <td>Product A</td>
                                                <td>₹50.00</td>
                                                <td>2</td>
                                                <td>₹100.00</td>
                                            </tr>
                                            <tr>
                                                <td>002</td>
                                                <td>Product B</td>
                                                <td>₹75.00</td>
                                                <td>3</td>
                                                <td>₹225.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4} />
                                                <th>₹325.00</th>
                                            </tr>
                                        </tbody>
                                    </table>
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