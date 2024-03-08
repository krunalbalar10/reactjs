import { Link, useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";
import { useState } from "react";
import ApiURL, { COOKIENAME } from "./Adminapi";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";

export default function AdminLogin() {

    let navigate = useNavigate();
    // cerate state variable
    let [email , setEmail] = useState();
    let [password , setPassword] = useState();

     //create cookie object and its methods 
    let [cookies , setCookies , removeCookies] = useCookies(COOKIENAME);

    let loginPage = function(event) {
        event.preventDefault();
        console.log(email , password)

        let apiAddress = ApiURL() + 'login.php';
        let form = new FormData();
        form.append('email' , email);    
        form.append('password' , password);
        
        axios({
            method: 'post',
            responseType: 'json',
            url:  apiAddress,
            data: form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !== 'no')
                showError(error);
            else
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'no')
                    showError(message);
                else
                    showMessage(message);
                //create cookies variable
                setCookies('id' , response.data[3]['id'], {path:'/'});

                setTimeout(() => {
                    navigate("/home");
                } , 2000)
            }
        }).catch((error) => {
            if(error.code === 'ERR_NETWORK')
              NetworkError();
        })
    }
    
    return (
        <div className="wrapper">
            <div className="main">
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="rounded d-flex justify-content-center my-2">
                            <h1 className="h3 p-3 text-white">Online Store App</h1>
                        </div>
                        <ToastContainer/>
                        <div className="mt-4">
                            <h4 align="center">Admin</h4>
                        </div>
                        <div className="mx-5">
                            <div className="card mx-5">
                                <div className="card-body">
                                    <div className="col-12" align="center">
                                        <form onSubmit={loginPage}>
                                            <div className="mb-4 mt-4">
                                                <label htmlFor="inputemail" className="form-label">Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="email" id="inputemail" name="email" className="form-input" required onChange={(e) => setEmail(e.target.value)} value={email}/>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="inputpassword" className="form-label">Password:</label>&nbsp;&nbsp;
                                                <input type="password" id="inputpassword" name="password" className="form-input" required 
                                                onChange={(e) => setPassword(e.target.value)} value={password}/>
                                            </div>
                                            <div className="mb-4">
                                                <button type="submit" className="btn btn-primary">Login</button>
                                            </div>
                                            <div className="mb-4 text-end">
                                                <Link to="/forgot-password">Forget Password?</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row text-muted">
                            <div className="col-6 text-start">
                                <p className="mb-0">
                                    <i className="fa-solid fa-store" />&nbsp;<Link className="text-muted" to="/home" target="_blank"><strong>Online
                                        Store</strong></Link> ©
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}