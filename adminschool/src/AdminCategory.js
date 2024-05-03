import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import { ToastContainer } from "react-toastify";
import showError, { NetworkError, showMessage } from "./toast-message";
import getUrl from "./Adminapi";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminCategory() {

  let deleteCategory = function(id){
    console.log(id);
    let apiAddress = getUrl() + 'delete_school_city.php?id=' + id;
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
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.detail}</td>
        <td>
          <Link to={"/edit-category/" + item.id} title="edit"><h4 className="text-primary d-inline"><i className="ti ti-pencil-plus" /></h4></Link>
          <Link to="#" title="delete" onClick={(e) => {e.preventDefault(); deleteCategory(item.id);}}><h4 className="text-primary d-inline"><i className="ti ti-trash" /></h4></Link>
          <Link to={"/view-category/" + item.id} title="view"><h4 className="text-primary d-inline"><i className="ti ti-eye" /></h4></Link>
        </td>
      </tr>
    )
  }

  let [category, setCategory] = useState([]);

  useEffect(() => {
    //call api
    let apiAddress = getUrl() + 'read_category.php';
    //using fetch() for getting data from URL
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
        showError('No order details found');
      }
      else {
        console.log(response.data[2].data);
        setCategory(response.data[2].data);
      }
    }) .catch((error) => {
        NetworkError();
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
                        <Link href="/" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</Link>
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
                  <span className="fw-bolder px-4"><h4>Category</h4></span>
                  <Link to="/add-category" className="btn btn-primary ">add Category</Link>
                </div>
              </div>
              <div className="card-body">
                {/* <h5 class="card-title fw-semibold mb-4"></h5> */}
                <table className="table table-striped table-bordered border-3">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Detail</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody clss="top-text">
                    {category.map((item) => DisplayCategory(item))}
                    </tbody>
                </table>
              </div>
              {/* <div class="table-responsive text-nowrap"> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}