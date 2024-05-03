import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import logo from "./images/logo.jpeg";
import {useCookies} from "react-cookie";
import getUrl, { COOKIENAME } from "./Adminapi";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
import { useState } from "react";

export default function AdminLogin()
{
  let navigate = useNavigate();

  //create cookie object and its methods 
  let [cookies , setCookies , removeCookies] = useCookies(COOKIENAME);

  // cerate state variable
  let [email , setEmail] = useState();
  let [password , setPassword] = useState();

  let loginPage = function(event) {
      event.preventDefault();
      console.log(email , password)

      let apiAddress = getUrl() + 'admin_login.php';
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
                  {showMessage(message);
              //create cookies variable
              setCookies('id' , response.data[3]['id'], {path:'/'});

              setTimeout(() => {
                  navigate("/index");
              } , 2000)}
          }
      }).catch((error) => {
          if(error.code === 'ERR_NETWORK')
            NetworkError();
      })
  }
    return(
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
           
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xxl-3">
          <div className="card mb-0 shadow">
            <div className="card-body">
              {/* <h3 class="text-center fw-bold">The Good School Guide</h3> */}
              <Link to="/" className="text-nowrap logo-img text-center d-block py-3 w-100">
                <img src={logo} width={60} /><span><b>The Good School Guide</b></span>
              </Link>
              <p className="text-center"><b>Admin Login</b></p>
              <form onSubmit={loginPage}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter E-mail address" />
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
                </div>
                <div className="d-flex align-items-center justify-content-end mb-4">
                  <Link className="text-primary fw-bold" to="/forgot-login">Forgot Password ?</Link>
                </div>
                <button type="submit" to="/" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">login</button>
              </form>
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