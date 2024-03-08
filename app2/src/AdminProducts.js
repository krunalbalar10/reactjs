import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import showError, { NetworkError, showMessage } from "./toast-message";
import { Link } from "react-router-dom";
import ApiURL from "./Adminapi";
import axios from "axios";

export default function AdminProducts() {

    let deleteProduct = function(id){
        console.log(id);
        let apiAddress = ApiURL() + 'delete_product.php?id=' + id;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if(error !== 'no')
                showError(error)  
            else
            {
                showMessage(response.data[1]['message']);
                let temp = product.filter((item) => {
                    if(item.id !== id){
                        return item;
                    }
                });
                setProduct(temp);
            }
        })
    }

    let displayProducts = function (item) {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.title} <br />
                    <span>{item.categorytitle}</span>
                </td>
                <td>
                    {/* we can use getimageurl function repeat code as we have used in admin view product */}
                    <img src={"https://theeasylearnacademy.com/shop/images/product/" + item.photo} className="img-fluid" alt />
                </td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{(item.islive === 1)?'Yes':'No'}</td>
                <td width="20%">
                    {/* dynamic route because it has input (query string) */}
                    <Link to={"/view-product/" + item.id}>
                        <i className="fa fa-eye fa-2x" />
                    </Link>&nbsp;
                    <Link to={"/edit-product/" + item.id}>
                        <i className="fa fa-pencil fa-2x" />
                    </Link>&nbsp;
                    <Link to="#" onClick={(e) => {e.preventDefault(); deleteProduct(item.id);}}>
                        <i className="fa fa-trash fa-2x" />
                    </Link>
                </td>
            </tr>
        )
    }

    let [product, setProduct] = useState([]);

    useEffect(() => {

        if (product.length === 0) {
            let apiAddress = ApiURL() + 'product.php';
            fetch(apiAddress)

                .then((response) => response.json())

                .then((data) => {
                    console.log(data);

                    let error = data[0]['error']

                    if (error !== 'no')
                        showError(error);

                    else if (data[1]['total'] === 0)
                        showError('No product found');

                    else {
                        data.splice(0, 2);
                        setProduct(data);
                    }

                })

                .catch((error) => {
                    console.log(error);
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
                <ToastContainer />
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                            <h1 className="h3 p-3 text-white">Products</h1>
                            <Link to="/add-new-product" className="btn btn-light m-3">Add New Product&nbsp;<i className="fa-solid fa-plus" /></Link>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th width='20%'>Photo
                                            </th><th>Price
                                            </th><th>Stock
                                            </th><th>Is Live</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.map((item) => displayProducts(item))}
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