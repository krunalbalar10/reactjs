import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import getBase, { getImageBase } from "./api";
import axios from "axios";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

export default function AdminEditProduct() {
    let { productid } = useParams();

    let [categoryid, setCategoryId] = useState('');
    let [title, setTitle] = useState('');
    let [price, setPrice] = useState('');
    let [size, setSize] = useState('');
    let [weight, setWeight] = useState('');
    let [stock, setStock] = useState('');
    let [detail, setDetail] = useState('');
    let [islive, setIsLive] = useState('');
    let [photo, setPhoto] = useState('');
    let [oldPhoto, setOldPhoto] = useState('');
    let [isFetched, setIsFetched] = useState(false);
    let [category,setCategory] = useState([]); //create state array
    let resetForm = function () {
        setCategoryId('');
        setTitle('');
        setPrice('');
        setSize('');
        setWeight('');
        setStock('');
        setDetail('');
        setIsLive('');
        setPhoto('');
    };

    let fetchSingleProduct = function () {
        let apiAddress = getBase() + "product.php?productid=" + productid;
        console.log(apiAddress);
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error != 'no')
                showError(error);
            else if (response.data[1]['total'] == 0) {
                showError('no product found');
            }
            else {
                // [{},{},{}]
                setTitle(response.data[2]['title']);
                setPrice(response.data[2]['price']);
                setWeight(response.data[2]['weight']);
                setStock(response.data[2]['stock']);
                setCategoryId(response.data[2]['categoryid']);
                setOldPhoto(response.data[2]['photo']);
                setSize(response.data[2]['size']);
                setDetail(response.data[2]['detail']);
                setIsLive(response.data[2]['islive']);
                setIsFetched(true);
            }

        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showError('OOPS something went wrong, it seems you are offline or server is offline');
        });
    }
    let fetchCategories = function () {
        let apiAddress = getBase() + "category.php";
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else if (response.data[1]['total'] === 0) {
                showError('no category found');
            }
            else {
                response.data.splice(0, 2);
                setCategory(response.data);
            }
        }).catch((error) => {
            console.log(error);
            if (error.code === 'ERR_NETWORK')
                showError('you are offline or server is offline');

        });
    }
let updateProduct = function (event) {
    event.preventDefault();
    let apiAddress = getBase() + "update_product.php";
    let form = new FormData();
    //        input : name,photo,price,stock,detail,productid,categoryid (required) 
    form.append("categoryid", categoryid);
    form.append("productid", productid);
    form.append('name', title);
    form.append('price', price);
    form.append('stock', stock);
    form.append('weight', weight);
    form.append('islive', islive);
    form.append('photo', photo);
    form.append('size', size);
    form.append('detail', detail);
    console.log(form);
    axios({
        method: 'post',
        responseType: 'json',
        url: apiAddress,
        data: form
    }).then((response) => {
        console.log(response.data);
    }).catch((error)=>{
        console.log(error);
        if(error.code === 'ERR_NETWORK')
            showError('either you are or server is offline');
    });
}

useEffect(() => {
    if (isFetched === false) {
        fetchSingleProduct();
        fetchCategories();
    }
});
return (
    <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        {/* Sidebar Start */}
        <AdminMenu />
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
            {/*  Header Start */}
            <ToastContainer />
            <header className="app-header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item d-block d-xl-none">
                            <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                                <i className="ti ti-menu-2" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            {/*  Header End */}
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="card shadow">
                            <div className="card-header d-flex justify-content-between text-bg-primary">
                                <h3 className="mb-1 text-white">Product</h3>
                                <Link to="/product" className="btn btn-light">back</Link>
                            </div>
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-3">
                                        <b>Existing Photo</b> <br />
                                        <img src={getImageBase() + "product/" + oldPhoto} className="img-fluid" />

                                    </div>
                                    <div className="col-9">
                                        <h5 className="border-bottom pb-2">Edit product</h5>
                                        <form onSubmit={updateProduct}>
                                            <div className="row g-3">
                                                {/* 1st row */}
                                                <div className="col-md-3">
                                                    <label htmlFor="categoryid" className="form-label">Change Category</label>
                                                    <select className="form-select" id="categoryid" name="categoryid" required autofocus onChange={(e) => setCategoryId(e.target.value)} >
                                                        <option value=''>Select</option>
                                                    {category.map((item) => {
                                                        if(categoryid === item.id)
                                                            return <option selected value={item.id}>{item.title}</option>
                                                        else 
                                                            return <option value={item.id}>{item.title}</option>
                                                    })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="title" className="form-label">Edit Title</label>
                                                    <input type="text" className="form-control" id="title" name="title" required
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)} />
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="price" className="form-label">Edit Price</label>
                                                    <input type="number" className="form-control"
                                                        value={price}
                                                        onChange={(e) => setPrice(e.target.value)} id="price" name="price" required />
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="stock" className="form-label">Edit Stock</label>
                                                    <input type="number" className="form-control"
                                                        value={stock}
                                                        onChange={(e) => setStock(e.target.value)}
                                                        id="stock" name="stock" required />
                                                </div>
                                                {/* 2nd row */}
                                                <div className="col-md-4">
                                                    <label htmlFor="weight" className="form-label">Edit Weight</label>
                                                    <input type="text" className="form-control"
                                                        value={weight}
                                                        onChange={(e) => setWeight(e.target.value)} id="weight" name="weight" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="size" className="form-label">Edit Size</label>
                                                    <input type="text" className="form-control"
                                                        value={size}
                                                        onChange={(e) => setSize(e.target.value)}
                                                        id="size" name="size" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="photo" className="form-label">Change Photo</label>
                                                    <input type="file" className="form-control"
                                                        onChange={(e) => setPhoto(e.target.files[0])}
                                                        id="photo" name="photo" required />
                                                </div>
                                                {/* 3rd row */}
                                                <div className="col-md-2">
                                                    <label className="form-check-label d-block">Is Live</label>
                                                    <div className="form-check form-check">
                                                        <input className="form-check-input" type="radio" name="islive" id="yes" value="1" required checked={islive === '1'}
                                                            onChange={(e) => setIsLive('1')} />
                                                        <label className="form-check-label" htmlFor="yes">Yes</label>
                                                    </div>
                                                    <div className="form-check form-check">
                                                        <input className="form-check-input" type="radio" name="islive" id="no" value="0" required checked={islive === '0'}
                                                            onChange={(e) => setIsLive('0')} />
                                                        <label className="form-check-label" htmlFor="no">No</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <label htmlFor="detail" className="form-label">Change Detail</label>
                                                    <textarea className="form-control" id="detail" name="detail" rows={3} required
                                                        value={detail}
                                                        onChange={(e) => setDetail(e.target.value)} />
                                                </div>
                                                {/* Buttons */}
                                                <div className="col-md-3">
                                                    <button type="submit" className="btn btn-primary mt-4 w-100">Save Changes</button>
                                                    <button type="reset" className="btn btn-dark w-100 mt-1"
                                                    onClick={() => resetForm()}>Clear</button>
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
        </div>
    </div>

);
}