import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ApiURL from "./Adminapi";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import showError, { NetworkError, showMessage } from "./toast-message";
import VerifyLogin from "./VerifyLogin";

export default function AdminAddNewCategory() {

    VerifyLogin();

    let [title, setTitle] = useState('');
    let [photo, setPhoto] = useState('');
    let [islive, setIsLive] = useState('');

    let navigator = useNavigate();//return object which is used to navigate user on other route
//inner function
    let insertCategory = function(e){
        e.preventDefault(); // stop the refreshing/reloading page when submit
        console.log(title , photo , islive);

        let apiAddress = ApiURL() + "insert_category.php";

        let form = new FormData();
        form.append("title" , title);
        form.append("photo" , photo);
        form.append("islive" , islive);

        axios({
            method: 'post',
            responseType: 'json',
            data: form,
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if(error !== 'no')
            {
                showError(error);
            }
            else
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'no')
                {
                    showError(message);
                }
                else
                {
                    showMessage(message);
                    setTimeout(() => {
                        navigator("/category");
                    }, 2000);
                }
            }   
        }).catch((error)=> {
            if(error.code === 'ERR_NETWORK')
            {
                NetworkError();
            }
        }) 
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
                            <h1 className="h3 p-3 text-white">Category</h1>
                            <Link to="/category" className="btn btn-light m-3">Back&nbsp;<i className="fa-solid fa-arrow-left" /></Link>
                        </div>
                        <form onSubmit={insertCategory} method="post" encType="multipart/form-data">
                            <div className="card">
                                <div className="card-header pt-4">
                                    <h4>Add New Category</h4><hr />
                                </div>
                                <div className="card-body pt-0">
                                    
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" onChange={(event) => setTitle(event.target.value)}       value={title} name="title" id="title" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" onChange={(event) => setPhoto(event.target.files[0])} accept="image/*" name="photo" id="photo" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <p>Is this category live?</p>
                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="yes">Yes</label>
                                                <input type="radio" onChange={(event) => setIsLive(event.target.value)} value={1} name="islive" id="yes" className="form-check-input" required/>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="no">No</label>
                                                <input type="radio" onChange={(event) => setIsLive(event.target.value)} value={0} name="islive" id="no" className="form-check-input" required/>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit" name="submit" className="btn btn-primary">Save Changes</button>
                                            <button type="reset" name="reset" className="btn btn-danger">Clear All</button>
                                        </div>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
                <AdminFooter />
            </div>
        </div>
    )
}