import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import showError, { NetworkError, showMessage } from "./toast-message";
import getUrl from "./Adminapi";
import axios from "axios";

export default function AdminCity() {

  let deleteCity = function (id) {
    console.log(id);
    let apiAddress = getUrl() + 'delete_category.php?id=' + id;

    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response);
      let error = response.data[0]['error']
      if (error !== 'no') {
        showError(error);
      }
      else if (response.data[1]['total'] === 0) {
        showError('No order details found');
      }
      else {
        showMessage(response.data[2]['message']);
        let temp = city.filter((item) => {
          if (item.id !== id)
            return item;
        })
        setCity(temp);
      }
    })
  }

  let displayCity = function (items) {
    return (
      <tr>
        <td>{items.id}</td>
        <td>{items.name}</td>
        <td>{items.pincode}.</td>
        <td>

          <Link to={"/edit-city/" + items.id} title="edit"><h4 className="text-primary d-inline"><i className="ti ti-pencil-plus" /></h4></Link>
          <Link to="#" onClick={(e) => { e.preventDefault(); deleteCity(items.id); }} title="delete"><h4 className="text-primary d-inline"><i className="ti ti-trash" /></h4></Link>
          <Link to={"/view-city/" + items.id} title="view"><h4 className="text-primary d-inline"><i className="ti ti-eye" /></h4></Link>
        </td>
      </tr>
    )
  }

  let [city, setCity] = useState([]);

  useEffect(() => {
    let apiAddress = getUrl() + 'read_school_city.php';
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response)
      let error = response.data[0]['error']
      if (error !== 'no') {
        showError(error);
      }
      else if (response.data[1]['total'] === 0) {
        showError('No City found');
      }
      else {
        console.log(response.data[2]['data']);
        setCity(response.data[2]['data']);
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK') {
        NetworkError();
       }
    })
  }, [])

  return (
    <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        {/* Sidebar Start */}
        <AdminMenu />
        <ToastContainer />
        {/*  Sidebar End */}
        {/*  Main wrapper */}
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
                        <Link to="/" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {/*  Header End */}
          <div className="container-fluid">
            <div className="card shadow">
              <div className="card-header bg-light-primary">
                <div className="d-flex justify-content-between mt-3 ">
                  <span className="fw-bolder px-4"><h4>City</h4></span>
                  <Link to="/add-city" className="btn btn-primary ">add City</Link>
                </div>
              </div>
              <div className="card-body">
                {/* <h5 class="card-title fw-semibold mb-4"></h5> */}
                <table className="table table-striped table-bordered border-3">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>pincode</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody clss="top-text">
                    {city.map((items) => displayCity(items))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}