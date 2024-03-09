import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiURL from "./Adminapi";
import axios from "axios";
import showError, {showMessage , NetworkError} from "./toast-message";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./VerifyLogin";

export default function AdminAddNewProduct() {

    VerifyLogin();

    //cerate state varible for input tag
    let [categoryid, setCategoryid] = useState('');
    let [title, setTitle] = useState('');
    let [stock, setStock] = useState('');
    let [price, setPrice] = useState('');
    let [weight, setWeight] = useState('');
    let [size, setSize] = useState('');
    let [photo, setPhoto] = useState('');
    let [islive, setIslive] = useState('');
    let [detail, setDetail] = useState('');
    
    // create state arry variable for fetching data and store 
    let [category , setCategory] = useState([]);
    let navigator = useNavigate();

    useEffect(() => {
        let apiAddress = ApiURL() + "category.php";

       if(category.length === 0){
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if(error !== 'no')
             showError(error)
            else if(response.data[1]['total'] === 0)
             showError('No category found');
            else
            {
                response.data.splice(0 , 2)
                setCategory(response.data);
            }
        }).catch((error) => {
            console.log(error);
            if(error.code === 'ERR_NETWORK') {
                NetworkError();
            }
        })
       }
    })

    let insertCategory = function(event) {
        event.preventDefault();
        console.log(categoryid , title , stock , price , weight , size , photo , islive , detail);

        let apiAddress = ApiURL() + "insert_product.php";

        let form = new FormData();

        form.append("categoryid" , categoryid);
        form.append("name" , title);
        form.append("stock" , stock);
        form.append("price" , price);
        form.append("weight" , weight);
        form.append("size" , size);
        form.append("photo" , photo);
        form.append("islive" , islive);
        form.append("detail" , detail);

        console.log(form);

        axios({
            method: 'post',
            responseType: 'json',
            data: form,
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no')
              showError(error);
            else {
              let success = response.data[1]['success'];
              let message = response.data[2]['message'];
              if (success === 'no')
                showError(message);
              else {
                showMessage(message);
                setTimeout(() => {
                  navigator("/product");
                }, 2000);
              }
            }
          }).catch((error) => {
            if(error.code === 'ERR_NETWORK')
                NetworkError();
        });
        
    }
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
                                <h1 className="h3 p-3 text-white">Products</h1>
                                <Link to="/products" className="btn btn-light m-3">Back&nbsp;<i className="fa-solid fa-arrow-left" /></Link>
                            </div>
                            <div className="card shadow">
                                <div className="card-header">
                                    <h4>
                                        Add New Product
                                        <hr width="40%" />
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={insertCategory} method="post" encType="multipart/form-data">
                                        <div className="row">
                                            {/* First Row */}
                                            <div className="col-md-3">
                                                <label htmlFor="categoryid" className="form-label mb-2">Category ID</label>
                                                <select className="form-select" name="categoryid" id="categoryid" required autofocus onChange={(event) => setCategoryid(event.target.value)}>
                                                {category.map((item) => {
                                                    return (<option value={item.id}> {item.title}</option>)
                                                })}
                                                    {/* <option value={1}>Category 1</option> */}
                                                    {/* <option value={2}>Category 2</option> */}
                                                </select>
                                            </div>
                                            <div className="col-md-3 mb-5">
                                                <label htmlFor="title" className="form-label mb-2">Title</label>
                                                <input type="text" name="title" id="title" className="form-control" required onChange={(event) => setTitle(event.target.value)} value={title}/>
                                            </div>
                                            <div className="col-md-3 mb-5">
                                                <label htmlFor="stock" className="form-label mb-2">Stock</label>
                                                <input type="number" name="stock" id="stock" className="form-control" required onChange={(event) => setStock(event.target.value)} value={stock}/>
                                            </div>
                                            <div className="col-md-3 mb-5">
                                                <label htmlFor="price" className="form-label mb-2">Price</label>
                                                <input type="number" name="price" id="price" className="form-control" required onChange={(event) => setPrice(event.target.value)} value={price}/>
                                            </div>
                                            {/* Second Row */}
                                            <div className="col-md-4 mb-5">
                                                <label htmlFor="weight" className="form-label mb-2">Weight</label>
                                                <input type="text" className="form-control" id="weight" name="weight" required onChange={(event) => setWeight(event.target.value)} value={weight}/>
                                            </div>
                                            <div className="col-md-4 mb-5">
                                                <label htmlFor="size" className="form-label mb-2">Size</label>
                                                <input type="text" className="form-control" id="size" name="size" required onChange={(event) => setSize(event.target.value)} value={size}/>
                                            </div>
                                            <div className="col-md-4 mb-5">
                                                <label htmlFor="photo" className="form-label mb-2">Photo</label>
                                                <input type="file" className="form-control" id="photo" name="photo" required onChange={(event) => setPhoto(event.target.files[0])}/>
                                            </div>
                                            {/* third row */}
                                            <div className="col-md-2">
                                                <label className="form-check-label d-block mb-2">Is Live</label>
                                                <div className="form-check form-check">
                                                    <input className="form-check-input" type="radio" name="islive" id="yes" Value={0} required 
                                                    onChange={(event) => setIslive(event.target.value)}/>
                                                    <label className="form-check-label" htmlFor="yes">Yes</label>
                                                </div>
                                                <div className="form-check form-check">
                                                    <input className="form-check-input" type="radio" name="islive" id="no" Value={1} required 
                                                    onChange={(event) => setIslive(event.target.value)}/>
                                                    <label className="form-check-label" htmlFor="no">No</label>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <label htmlFor="detail" className="form-label mb-2">Detail</label>
                                                <textarea className="form-control" id="detail" name="detail" rows={3} required onChange={(event) => setDetail(event.target.value)} value={detail} />
                                            </div>
                                            {/* Buttons */}
                                            <div className="col-md-3 mt-2">
                                                <button type="submit" className="btn btn-primary mt-4 w-100">Save Changes</button>
                                                <button type="reset" className="btn btn-danger w-100 mt-1">Clear All</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                

                <AdminFooter />
            </div>
        </div>
    )
}