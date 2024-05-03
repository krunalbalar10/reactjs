import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { NetworkError, showMessage } from "./toast-message";
import ApiURL from "./Adminapi";
import axios from "axios";
import VerifyLogin from "./VerifyLogin";

export default function AdminCategory() {

    VerifyLogin();

    let deleteCategory = function(id){
        console.log(id);
        let apiAddress = ApiURL() + 'delete_category.php?id=' + id;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error']
            if(error !== 'no')
             showError(error);
            else
            {
                showMessage(response.data[1]['message']);
                let temp = category.filter((item) => {
                    if(item.id !== id)
                       return item;
                })
                setCategory(temp);
            }
        })
    }

    let DisplayCategory = function (item) {
        return (<tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td width='30%'>
                <img src={"http://dholerasmartcities.in/shop/images/category/" + item.photo} className="img-fluid" alt />
            </td>
            <td>{(item.isLive === 1) ? 'Yes' : 'No'}</td>
            <td width="15%">
                <Link to={"/edit-category/" + item.id}>
                    <i className="fa fa-pencil fa-2x" />
                </Link>&nbsp;&nbsp;
                <a href="#" onClick={(e) => { e.preventDefault(); deleteCategory(item.id);}}>
                    <i className="fa fa-trash fa-2x" /> 
                </a>
            </td>
        </tr>
        )
    }

    //create state array
    let [category, setCategory] = useState([]);

    //use hook useEffect()
    useEffect(() => {

        if (category.length === 0) {
            //call api
            let apiAddress = ApiURL() + 'category.php';
            //using fetch() for getting data from URL
            fetch(apiAddress)
                //.then() is used for after getting data to convert into json() format
                .then((response) => response.json())

                .then((data) => {
                    console.log(data)
                    //get error info
                    let error = data[0]['error'];

                    if (error !== 'no') //there is error
                        showError(error);

                    else if (data[1]['total'] === 0)
                        showError('No category Found');
                    else {
                        // if there is no any error and atleast one category found 
                        data.splice(0, 2); //remove 2 object  fron 0th position
                        // console.log(data);
                        setCategory(data);
                    }

                })

                .catch((error) => {
                    console.log(error);
                    // alert("oops something went wrong, please try after sometime.");
                    // toast("");
                    NetworkError('oops something went wrong, please try after sometime.');
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
                            <h1 className="h3 p-3 text-white">Category</h1>
                            <Link to="/add-new-category" className="btn btn-light m-3">Add New Category&nbsp;<i className="fa-solid fa-plus" /></Link>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Photo</th>
                                            <th>Is Live</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {category.map((item) => DisplayCategory(item))}
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