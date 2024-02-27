import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiURL from "./Adminapi";
import { ToastContainer } from "react-toastify";
import showError from "./toast-message";
import axios from "axios";

export default function AdminUsers() {

    let diplayUsers = function (item) {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                    <Link to="/orders">
                        <i className="fa fa-gift fa-2x" />
                    </Link>
                </td>
            </tr>
        )
    }

    let [users, setUsers] = useState([]);

    useEffect(() => {
        let apiAddress = ApiURL() + "users.php";
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else if (response.data[1]['total'] === 0)
                showError('No Users Found');
            else {
                response.data.splice(0, 2);
                setUsers(response.data);
            }
        }).catch((error) => {
            console.log(error);
            if (error.code === 'ERR_NETWORK')
                showError("Either internet is switch off or api is not available");
        })
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
                            <h1 className="h3 p-3 text-white">Users</h1>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Email</th>
                                            <th>Mobile
                                            </th><th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((item) => diplayUsers(item))}
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