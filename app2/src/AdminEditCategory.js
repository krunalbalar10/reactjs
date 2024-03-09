import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiURL, { getImageUrl } from "./Adminapi";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./VerifyLogin";

export default function AdminEditCategory() {

    VerifyLogin();
    
    let { categoryid } = useParams();
    // create a state arry

    let [title, setTitle] = useState('');
    let [oldPhoto, setOldPhoto] = useState('');
    let [photo, setPhoto] = useState('');
    let [isLive, setIsLive] = useState('');
    let [isFetched, setIsFetched] = useState(false);

    let navigator = useNavigate();
    console.log(categoryid);

    let updateCategory = function (event) {
        event.preventDefault();
        let apiAddress = ApiURL() + "update_category.php";
        let form = new FormData();

        form.append("title", title);
        form.append("photo", photo);
        form.append("islive", isLive);
        form.append("id",categoryid);
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: form
        }).then((response) => {
            console.log(response);
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
                        navigator("/category");
                    }, 2000);
                }
            }
        }).catch((error) => {
            if (error.code === "ERR_NETWORK")
                NetworkError();
        })
    }

    useEffect(() => {
        if (isFetched === false) {
            let apiAddress = ApiURL() + 'category.php?id=' + categoryid;
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
                else if (response.data[1]['total'] === 0) {
                    showError("No Categories Found");
                }
                else {
                    setTitle(response.data[2]['title']);
                    setOldPhoto(response.data[2]['photo']);
                    setIsLive(response.data[2]['isLive']);
                    setIsFetched(true);
                }
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
                        <div className="row">
                            <div className="col-12">
                                <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                                    <h1 className="h3 p-3 text-white">Category</h1>
                                    <Link to="/category" className="btn btn-light m-3">Back&nbsp;<i className="fa-solid fa-arrow-left" /></Link>
                                </div>
                                <div className="card">
                                    <div className="card-header pt-4">
                                        <h4>Edit Category</h4><hr />
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="col-3">
                                            <p>Existing Photo</p>
                                            <img src={getImageUrl() + "category/" + oldPhoto} className="img-fluid" />
                                        </div>
                                        <div className="col-9">
                                            <form onSubmit={updateCategory} method="post">
                                                <div className="mb-3">
                                                    <label htmlFor="title" className="form-label">Edit Title</label>
                                                    <input type="text" name="title" id="title" className="form-control" required
                                                        onChange={(e) => setTitle(e.target.value)} value={title} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="photo" className="form-label">Change Photo</label>
                                                    <input type="file" accept="image/*" name="photo" id="photo" className="form-control" required
                                                        onChange={(e) => setPhoto(e.target.files[0])} />
                                                </div>
                                                <div className="mb-3">
                                                    <p>Is this category live?</p>
                                                    <div className="form-check">
                                                        <label className="form-check-label" htmlFor="yes">Yes</label>
                                                        <input type="radio" name="islive" id="yes" className="form-check-input" readOnly
                                                            onChange={(e) => setIsLive(e.target.value)} value={1}
                                                            checked={isLive === '1'} />
                                                    </div>
                                                    <div className="form-check">
                                                        <label className="form-check-label" htmlFor="no">No</label>
                                                        <input type="radio" name="islive" id="no" className="form-check-input" readOnly
                                                            onChange={(e) => setIsLive(e.target.value)} value={0}
                                                            checked={isLive === '0'} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="submit" name="submit" className="btn btn-primary">Save Changes</button>
                                                    <button type="reset" name="reset" className="btn btn-danger">Clear All</button>
                                                </div>
                                            </form>
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