import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import { useState } from "react";
import getUrl from "./Adminapi";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
export default function AdminEmailSchoolmgt()
{

  let [email , setEmail] = useState('');
  let [subject , setSubject] = useState('');
  let [message , setMessage] = useState('');

  let navigator = useNavigate();

  let sendMail = function(e) {
      e.preventDefault();
      let apiAddress = getUrl() + 'send_message.php';

      let form = new FormData();
      
      form.append('email' , email);
      form.append('subject' , subject);
      form.append('message' , message);
      console.log(form)

      axios({
        method: 'post',
        responseType: 'json',
        data: form,
        url: apiAddress
      }).then((response) => {
        console.log(response);
        let error = response[0]['error']
        if (error !== 'no') {
          showError(error);
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
              // navigator("/schoolmgt");
            }, 2000);
          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK') {
         NetworkError();
        }
      })
  
  
  }

    return(
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
           
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
  <AdminMenu />
  <ToastContainer/>
  {/*  Sidebar End */}
  {/*  Main wrapper */}
  <div className="body-wrapper">
    {/*  Header Start */}
   <AdminHeader/>
    {/*  Header End */}
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-between">
          <h4 className="fw-bold py-1 mb-1">school management</h4>
           <Link to="/schoolmgt" className="btn btn-primary">back</Link> 
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card shadow">
            <h5 className="card-header bg-light-primary">send email</h5>
            <div className="card-body">
              <form onSubmit={sendMail}>
                <div className="mb-3 ">
                  <div className="form-floating">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="recipient" placeholder="name@example.com" />
                    <label htmlFor="recipient">recipient email</label>
                  </div>
                </div>
                <div className="mb-3 ">
                  <div className="form-floating">
                    <input type="text" onChange={(e) => setSubject(e.target.value)} value={subject} className="form-control" id="subject" />
                    <label htmlFor="subject">subject</label>
                  </div>
                </div>
                <div className="mb-3 ">
                  <div className="form-floating">
                    <label htmlFor="message" className="form-label"></label>
                    <textarea className="form-control" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="message" id="message" style={{"height":"100px"}} />
                  </div>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary">send email</button>
                </div>
              </form></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
}