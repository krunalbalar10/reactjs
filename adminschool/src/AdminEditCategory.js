import { Link, useNavigate, useParams } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import { useEffect, useState } from "react";
import getUrl from "./Adminapi";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
export default function AdminEditCategory() {

  let { categoryid } = useParams();

  let [name, setName] = useState('');
  let [detail, setDetail] = useState('');

  let navigator = useNavigate();
  console.log(categoryid);

  let updateCategory = function (e) {
    e.preventDefault();
    let apiAddress = getUrl() + 'update_category.php';

    let form = new FormData();

    form.append('name', name)
    form.append('detail', detail)
    form.append('id', categoryid)

    axios({
      method: 'post',
      responseType: 'json',
      data: form,
      url: apiAddress
    }).then((response) => {
      console.log(response);
      console.log(response.data[2])
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
            navigator("/category");
          }, 2000);
        }
      }
    })
  }

  useEffect(() => {

    let apiAddress = getUrl() + 'read_category.php?id=' + categoryid;
    console.log(apiAddress);
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response.data[2]['data']);
      let error = response.data[0]['error'];
      if (error !== 'no') {
        showError(error);
      }
      else if (response.data[1]['total'] === 0) {
        showError("No Categories Found");
      }
      else {
        setName(response.data[2]['data']['name']);
        setDetail(response.data[2]['data']['detail']);
      }
    }).catch((error) => {
      if (error.data === 'ERR_NETWORK')
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
                  <h5 className="card-header bg-light-primary">edit category</h5>
                  <div className="card-body">
                    <form onSubmit={updateCategory}>
                      <div className="mb-3">
                        <label htmlFor="inputtitle" className="form-label">edit name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="inputtitle" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">edit detail</label>
                        <textarea className="form-control" onChange={(e) => setDetail(e.target.value)} value={detail} id="exampleFormControlTextarea1" rows={3} />
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
    </div>
  );
}