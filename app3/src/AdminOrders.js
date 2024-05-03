import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiURL from "./Adminapi";
import { ToastContainer } from "react-toastify";
import showError from "./toast-message";
import axios from "axios";
import VerifyLogin from "./VerifyLogin";

export default function AdminOrders() {

    VerifyLogin();

    let displayOrders = function (item) {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.billdate}</td>
                <td>{item.amount}</td>
                <td>{item.orderstatus}</td>
                <td>{item.fulllname} <br />
                    {item.city}-{item.pincode}</td>
                <td width="15%">
                    <Link to={"/order-details/" + item.id}>
                        <i className="fa fa-eye fa-2x" />
                    </Link>
                </td>
            </tr>
        )
    }

    let [orders, setOrders] = useState([]);

    useEffect(() => {
        let apiAddress = ApiURL() + "orders.php";

        if (orders.length === 0) {
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                console.log(response);
                let error = response.data[0]['error'];
                if (error !== 'no')
                    showError(error)
                else if (response.data[1]['total'] === 0)
                    showError('No orders Found')
                else {
                    response.data.splice(0, 2);
                    setOrders(response.data)
                }
            }).catch((error) => {
                console.log(error.code);
                if (error.code === 'ERR_NETWORK')
                    showError("Either internet is switch off or api is not available");
            })
        }

    })
    return (
        <div className="wrapper">
            <AdminMenu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">

                </nav>
                <ToastContainer />
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                            <h1 className="h3 p-3 text-white">Orders</h1>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Bill Date</th>
                                            <th>Price
                                            </th><th>Status
                                            </th><th>Delivery Details</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {orders.map((item) => displayOrders(item))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                <AdminFooter />
            </div>
        </div>
    )
}