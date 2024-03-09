import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiURL, { getImageUrl } from "./Adminapi";
import { ToastContainer } from "react-toastify";
import showError, { NetworkError } from "./toast-message";
import VerifyLogin from "./VerifyLogin";


export default function AdminViewProduct() {

    VerifyLogin();

    let { productid } = useParams(); //store query string named as productid into variable
    console.log(productid);

    let [product, setProduct] = useState({});

    useEffect(() => {

        if(product.id === undefined)
        {
            let apiAddress = ApiURL() + 'product.php?productid=' + productid;
            fetch(apiAddress)

                .then((response) => response.json())

                .then((data) => {
                    console.log(data);

                    let error = data[0]['error']

                    if (error !== 'no')
                        showError(error);

                    else if (data[1]['total'] === 0)
                        showError('No Product Details Found');

                    else {
                        data.splice(0, 2);
                        setProduct(data[0]);
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
                            <Link to="/products" className="btn btn-light m-3">Back&nbsp;<i className="fa-solid fa-arrow-left" /></Link>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    {product.title}
                                    <hr width="40%" />
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6 col-12">
                                        <img src={getImageUrl() + "product/" + product.photo} className="img-fluid" />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <table className="table table-bordered">
                                            <tbody><tr>
                                                <td width="30%">ID</td>
                                                <td>{product.id}</td>
                                            </tr>
                                                <tr>
                                                    <td width="30%">Category</td>
                                                    <td>{product.categoryid}</td>
                                                </tr>
                                                <tr>
                                                    <td width="30%">price</td>
                                                    <td>{product.price}</td>
                                                </tr>
                                                <tr>
                                                    <td width="30%">stock</td>
                                                    <td>{product.stock}</td>
                                                </tr>
                                                <tr>
                                                    <td width="40%">weight</td>
                                                    <td>{product.weight}</td>
                                                </tr>
                                                <tr>
                                                    <td width="30%">size</td>
                                                    <td>{product.size}</td>
                                                </tr>
                                                <tr>
                                                    <td width="30%">is Live</td>
                                                    <td>{product.islive}</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <h4 className>Details</h4><hr width="40%" />
                                        <p>{product.detail}</p>
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