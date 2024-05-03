import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiURL, { getImageUrl } from "./Adminapi";
import axios from "axios";
import showError, { NetworkError , showMessage} from "./toast-message";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./VerifyLogin";

export default function AdminEditProduct() {

    // VerifyLogin();


    //create variable to store orderid passed as query string
    let { productid } = useParams();
    let navigate = useNavigate();

    let [categoryid, setCategoryid] = useState('');
    let [title, setTitle] = useState('');
    let [stock, setStock] = useState('');
    let [price, setPrice] = useState('');
    let [weight, setWeight] = useState('');
    let [size, setSize] = useState('');
    let [photo, setPhoto] = useState('');
    let [oldPhoto, setOldPhoto] = useState('');
    let [islive, setIslive] = useState('');
    let [detail, setDetail] = useState('');
    let [isFetched, setIsFetched] = useState(false);
    let [category, setCategory] = useState([]);


    let resetForm = function () {
        setCategoryid('');
        setTitle('');
        setPrice('');
        setSize('');
        setWeight('');
        setStock('');
        setDetail('');
        setIslive('');
        setPhoto('');
    }

    let fetchSingleProduct = function () {
        let apiAddress = ApiURL() + 'product/' + productid;
        console.log(apiAddress);
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else if (response.data[0]['total'] === 0) {
                showError('No categories Found');
            }
            else {
                setCategoryid(response.data[2]['categoryid']);
                setTitle(response.data[2]['title']);
                setStock(response.data[2]['stock']);
                setPrice(response.data[2]['price']);
                setSize(response.data[2]['size']);
                setOldPhoto(response.data[2]['photo']);
                setWeight(response.data[2]['weight']);
                setIslive(response.data[2]['islive']);
                setDetail(response.data[2]['detail']);
                setIsFetched(true);
            }
        })

    }

   
    // let fetchCategories = function () {
    //     let apiAddress = ApiURL() + 'category.php';
    //     console.log(apiAddress);
    //     axios({
    //         method: 'get',
    //         responseType: 'json',
    //         url: apiAddress
    //     }).then((response) => {
    //         console.log(response.data)
    //         let error = response.data[0]['error'];
    //         if (error !== 'no')
    //             showError(error)
    //         else if (response.data[1]['total'] === 0)
    //             showError('No categories found')
    //         else {
    //             response.data.splice(0, 2);
    //             setCategory(response.data);
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //         if (error.code === 'ERR_NETWORK')
    //             NetworkError();
    //     })
    // }

    let updateProduct = function (event) {
        event.preventDefault();

        let apiAddress = ApiURL() + 'update_product.php';
        let form = new FormData();
        form.append('categoryid', categoryid);
        form.append('productid' , productid);
        form.append('name', title);
        form.append('stock', stock);
        form.append('price', price);
        form.append('size', size);
        form.append('weight', weight);
        form.append('islive', islive);
        form.append('photo', photo);
        form.append('detail', detail);
        console.log(form);
        axios({
            method: 'post',
            responseType: 'json',
            data: form,
            url: apiAddress
        }).then((response) => {
            console.log(response)
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error)
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no') {
                    showError(message);
                }
                else {
                    showMessage(message);
                    setTimeout(() => {
                        navigate("/products");
                    }, 2000);
                }
            }
        }).catch((error) => {
            if (error.data === 'ERR_NETWORK')
                NetworkError();
        })
    }

    useEffect(() => {
        if (isFetched === false) {
            fetchSingleProduct();
            // fetchCategories();
        }
    });

    return (
        <div className="wrapper">
            <AdminMenu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">

                </nav>
                <ToastContainer/>
                <main className="content">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-12">


                                <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                                    <h1 className="h3 p-3 text-white">Products</h1>
                                    <Link to="/products" className="btn btn-light m-3">Back&nbsp;<i className="fa-solid fa-arrow-left" /></Link>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>
                                            Edit Product
                                            <hr width="40%" />
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-3">
                                                <b>Existing Photo</b> <br />
                                                {/* <img src={getImageUrl() + "product/" + oldPhoto} className="img-fluid" /> */}
                                                <img src={`http://127.0.0.1:5000/mysql/images/product/${oldPhoto}`} className="img-fluid" />
                                            </div>
                                            <div className="col-9">
                                                <form onSubmit={updateProduct}>
                                                    <div className="row">
                                                        {/* First Row */}
                                                        <div className="col-md-3">
                                                            <label htmlFor="categoryid" className="form-label mb-2">Edit Category</label>
                                                            <select className="form-select" name="categoryid" id="categoryid" required autofocus onChange={(event) => setCategoryid(event.target.value)}>
                                                                {/* {
                                                                    category.map((item) => {
                                                                        if (category.id === item.id)
                                                                            return <option selected value={item.id}>{item.title}</option>
                                                                        else
                                                                            return <option value={item.id}>{item.title}</option>
                                                                    })
                                                                } */}
                                                                <option value={1}>Book</option>
                                                                <option value={2}>Laptop</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3 mb-5">
                                                            <label htmlFor="title" className="form-label mb-2">Edit Title</label>
                                                            <input type="text" name="title" id="title" className="form-control" required
                                                                onChange={(event) => setTitle(event.target.value)} value={title} />
                                                        </div>
                                                        <div className="col-md-3 mb-5">
                                                            <label htmlFor="stock" className="form-label mb-2">Edit Stock</label>
                                                            <input type="number" name="stock" id="stock" className="form-control"
                                                                onChange={(event) => setStock(event.target.value)} value={stock} required />
                                                        </div>
                                                        <div className="col-md-3 mb-5">
                                                            <label htmlFor="price" className="form-label mb-2">Edit Price</label>
                                                            <input type="number" name="price" id="price" className="form-control"
                                                                onChange={(event) => setPrice(event.target.value)} value={price} required />
                                                        </div>
                                                        {/* Second Row */}
                                                        <div className="col-md-4 mb-5">
                                                            <label htmlFor="weight" className="form-label mb-2">Edit Weight</label>
                                                            <input type="text" className="form-control" id="weight" name="weight"
                                                                onChange={(event) => setWeight(event.target.value)} value={weight} required />
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <label htmlFor="size" className="form-label mb-2">Edit Size</label>
                                                            <input type="text" className="form-control" id="size" name="size"
                                                                onChange={(event) => setSize(event.target.value)} value={size} required />
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <label htmlFor="photo" className="form-label mb-2">Change Photo</label>
                                                            <input type="file" className="form-control" id="photo" name="photo"
                                                                onChange={(event) => setPhoto(event.target.files[0])} required />
                                                        </div>
                                                        {/* third row */}
                                                        <div className="col-md-2">
                                                            <label className="form-check-label d-block mb-2">Is Live</label>
                                                            <div className="form-check form-check">
                                                                <input className="form-check-input" type="radio" name="islive" id="yes"
                                                                    onChange={(event) => setIslive(event.target.value)} value={1} required />
                                                                <label className="form-check-label" htmlFor="yes">Yes</label>
                                                            </div>
                                                            <div className="form-check form-check">
                                                                <input className="form-check-input" type="radio" name="islive" id="no"
                                                                    onChange={(event) => setIslive(event.target.value)} value={0} required />
                                                                <label className="form-check-label" htmlFor="no">No</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7">
                                                            <label htmlFor="detail" className="form-label mb-2">Edit Detail</label>
                                                            <textarea className="form-control" id="detail" name="detail" rows={3}
                                                                onChange={(event) => setDetail(event.target.value)} required />
                                                        </div>
                                                        {/* Buttons */}
                                                        <div className="col-md-3 mt-2">
                                                            <button type="submit" className="btn btn-primary mt-4 w-100">Save Changes</button>
                                                            <button type="reset" className="btn btn-danger w-100 mt-1" onClick={() => resetForm()}>Clear All</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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