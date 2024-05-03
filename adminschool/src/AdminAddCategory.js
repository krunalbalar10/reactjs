import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import { useState } from "react";
import getUrl from "./Adminapi";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";

export default function AdminAddCategory() {

  let [name, setName] = useState('');
  let [detail, setDetail] = useState('');

  let navigator = useNavigate();//return object which is used to navigate user on other route

  let insertCategory = function (e) {
    e.preventDefault(); // stop the refreshing/reloading page when submit
    console.log(name, detail);

    let apiAddress = getUrl() + "create_category.php";
    console.log(apiAddress);
    let form = new FormData();
    form.append("name", name);
    form.append("detail", detail);

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
            navigator("/category");
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
      <ToastContainer />
      <div className="body-wrapper">
        {/*  Header Start */}
        <header className="app-header shadow">
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav">
              <li className="nav-item d-block d-xl-none">
                <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                  <i className="ti ti-menu-2" />
                </a>
              </li>
            </ul>
            <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <li className="nav-item dropdown">
                  <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../assets/images/profile/user-1.jpg" alt width={35} height={35} className="rounded-circle" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                    <div className="message-body">
                      <Link href="/" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/*  Header End */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row mb-3">
            <div className="col-12 d-flex justify-content-between">
              <h4 className="fw-bold py-1 mb-1">category</h4>
              <Link to="/category" className="btn btn-primary">back</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <h5 className="card-header bg-light-primary">add new category</h5>
                <div className="card-body">
                  <form onSubmit={insertCategory}>
                    <div className="mb-3">
                      <label htmlFor="inputtitle" className="form-label">name</label>
                      <input type="text" onChange={(event) => setName(event.target.value)}
                        className="form-control" value={name} id="inputtitle" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">detail</label>
                      <textarea className="form-control" onChange={(event) => setDetail(event.target.value)}
                        value={detail} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">save change</button>
                      <button type="reset" className="btn btn-light-primary">clear all</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
