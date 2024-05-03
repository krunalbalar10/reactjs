import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import { useEffect, useState } from "react";
import getUrl from "./Adminapi";
import showError, { NetworkError, showMessage } from "./toast-message";
import axios from "axios";
export default function AdminFeesManage() {

  let deleteCity = function(id) {
    console.log(id);
    let apiAddress = getUrl() + 'delete_school_fee.php?id=' + id;

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
        showError('No Fees details found');
      }
      else {
        showMessage(response.data[2]['message']);
        let temp = feesManage.filter((item) => {
          if (item.id !== id)
            return item;
        })
        setFeesManage(temp);
      }
    })
  }

  let displayFeesManage = function (items) {
    return (
      <tr>
        <td>{items.id}</td>
        <td>{items.schoolname}</td>
        <td>{items.title}</td>
        <td>{items.amount}</td>
        <td>
          {/* <a href="admin-insert-city.html"><h4 class="text-primary d-inline"><i class="ti ti-arrow-autofit-content"></i></h4></a> */}
          <div className="d-flex">
            <Link to={"/edit-fees/" + items.id} title="edit-fees"><h4 className="text-primary d-inline"><i className="ti ti-pencil-plus" /></h4></Link>
            <Link to="#" onClick={(e) => { e.preventDefault(); deleteCity(items.id); }} title="delete"><h4 cassName="text-primary d-inline"><i className="ti ti-trash" /></h4></Link>
            <Link to={"/view-fees/" + items.id} title="view"><h4 className="text-primary d-inline"><i className="ti ti-eye" /></h4></Link>
          </div>
        </td>
      </tr>
    )
  }

  let [feesManage, setFeesManage] = useState([]);

  useEffect(() => {
    let apiAddress = getUrl() + 'read_school_fee.php';
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
        showError('No fees details found');
      }
      else {
        console.log(response.data);
        setFeesManage(response.data[2].data);
      }
    }).catch((error) => {
      NetworkError();
    })
  }, [])
  return (
    <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        {/* Sidebar Start */}
        <AdminMenu />
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
                  <span className="fw-bolder px-4"><h4>fees management</h4></span>
                  <Link to="/add-fees" className="btn btn-primary ">add fees management</Link>
                </div>
              </div>
              <div className="card-body">
                {/* <h5 class="card-title fw-semibold mb-4"></h5> */}
                <table className="table table-striped table-bordered border-3">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>school Id </th>
                      <th>Title</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody clss="top-text">
                      {feesManage.map((items) => displayFeesManage(items))}
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