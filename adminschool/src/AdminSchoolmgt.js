import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import getUrl from "./Adminapi";
import axios from "axios";
import showError, { NetworkError } from "./toast-message";
export default function AdminSchoolmgt() {
  let [school, setSchool] = useState([]);

  let displaySchool = function (items) {
    return (
      <tr>
        <td>{items.id}</td>
        <td>{items.email}</td>
        <td>{items.schoolname}</td>
        <td>{items.mobile}</td>
        <td>{items.address}</td>
        <td>
          <Link to={"/view-schoolmgt/" + items.id} title="view"><h4 className="text-primary d-inline"><i className="ti ti-eye" /></h4></Link>
          <Link to={"/content/" + items.id} title="content"><h4 className="text-primary d-inline"><i className="ti ti-list-details" /></h4></Link>
          <Link to="/email/" title="send email"><h4 className="text-primary d-inline"><i className="ti ti-send smsEmail" /></h4></Link>
        </td>
      </tr>
    )
  }

 

  useState(() => {
    let apiAddress = getUrl() + 'read_school_school.php';
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
        console.log(response.data[2]);
        setSchool(response.data[2]);
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
          <AdminHeader />
          {/*  Header End */}
          <div className="container-fluid">
            <div className="card shadow">
              <div className="card-header bg-light-primary">
                <div className="d-flex justify-content-between mt-3 ">
                  <span className="fw-bolder px-4"><h4>school managment</h4></span>
                  <Link to="/add-school" className="btn btn-primary ">add school </Link>
                </div>
              </div>
              <div className="card-body">
                {/* <div class="table-responsive text-nowrap"> */}
                <table className="table table-striped table-bordered border-3">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>email</th>
                      <th>schoolname</th>
                      <th>mobileno</th>
                      <th>address</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody clss="top-text">
                    {school.map((items) => displaySchool(items))}
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