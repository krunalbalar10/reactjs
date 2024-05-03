import { Link, useParams } from "react-router-dom"; 
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import getUrl from "./Adminapi";
import { useEffect, useState } from "react";
import axios from "axios";
import showError, { NetworkError } from "./toast-message";
export default function AdminViewFees()
{
  let {viewfeesid} = useParams();
  console.log(viewfeesid);

  let [viewFees , setViewFees] = useState({});

  useEffect(() => {
    let apiAddress = getUrl() + 'read_school_fee.php?id=' + viewfeesid;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response);
      console.log(response.data[2]['data'])
      let error = response.data[0]['error'];
      if(error !== 'no')
      {
        showError(error)
      }
      else if(response.data[1]['total'] === 0)
      {
        showError('No categories Found');
      }
      else
      {
        setViewFees(response.data[2]['data']);
      }
    }).catch((error) => {
      if(error === 'ERR_NETWORK'){
        NetworkError();
      }
    })
      
  } , [])
    return(
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
          
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
  <AdminMenu />
  {/*  Sidebar End */}
  {/*  Main wrapper */}
  <div className="body-wrapper">
    {/*  Header Start */}
    <AdminHeader/>
    {/*  Header End */}
    <div className="container-fluid">
      <div className="card shadow">
        <div className="card-header bg-light-primary">
          <div className="d-flex justify-content-between mt-3 ">
            <span className="fw-bolder px-4"><h4>fees management</h4></span>
            <Link to="/fees" className="btn btn-primary ">back</Link>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-bordered"> 
            <tbody clss="top-text">
              <tr className="border border-3">
                <td width="25%">id</td>
                <td>{viewFees.id}</td>
              </tr>
              <tr className="border border-3">
                <td width="25%">school id</td>
                <td>{viewFees.schoolname}</td>
              </tr>
              <tr className="border border-3">
                <td width="25%">title</td>
                <td>{viewFees.title}</td>
              </tr>
              <tr className="border border-3">
                <td width="25%">amount</td>
                <td>{viewFees.amount}</td>
              </tr>
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