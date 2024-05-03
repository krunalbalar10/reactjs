import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import { useState } from "react";
import getUrl from "./Adminapi";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import AdminHeader from "./adminHeader";

export default function AdminAddCity() {

  let [name, setName] = useState('');
  let [pincode, setPinCode] = useState('');

  let navigator = useNavigate();

  let insertCity = function (e) {
    e.preventDefault(); // stop the refreshing/reloading page when submit
    console.log(name, pincode);

    let apiAddress = getUrl() + 'create_school_city.php';
    let form = new FormData();

    form.append('name', name)
    form.append('pincode', pincode)
    
    axios({
      method: 'post',
      url: apiAddress,
      data: form,
      responseType: 'json'
    }).then((response) => {
      console.log(response);
      let error = response.data[0]['error']
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
            navigator("/city");
          }, 2000);
        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK') {
        NetworkError();
      }
    })
  }
  return (
    <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <AdminMenu />
      <ToastContainer/>
      <div className="body-wrapper">
        <AdminHeader/>
        {/*  Header End */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row mb-3">
            <div className="col-12 d-flex justify-content-between">
              <h4 className="fw-bold py-1 mb-1">city</h4>
              <Link to="/city" className="btn btn-primary">back</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <h5 className="card-header bg-light-primary">add new city</h5>
                <div className="card-body">
                  <form onSubmit={insertCity}>
                    <div className="mb-3">
                      <label htmlFor="inputtitle" className="form-label">name</label>
                      <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="inputtitle" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="number" className="form-label">pincode</label>
                      <input type="text" onChange={(e) => setPinCode(e.target.value)} value={pincode} className="form-control" id="number" required />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">save change</button>
                      <button type="reset" className="btn btn-light-primary">clear all</button>
                    </div>
                  </form></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}