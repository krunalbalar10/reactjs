import { Link, useParams } from "react-router-dom"; 
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import { ToastContainer } from "react-toastify";
import showError, { NetworkError } from "./toast-message";
import { useEffect, useState } from "react";
import getUrl from "./Adminapi";
import axios from "axios";
export default function AdminViewCity()
{
  let {viewcityid} = useParams();
  console.log(viewcityid);

  let [viewCity , setViewCity] = useState({});

  useEffect(() => {
    let apiAddress = getUrl() + 'read_school_city.php?id=' + viewcityid;
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
        setViewCity(response.data[2]['data']);
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
  <ToastContainer/>
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
            <span className="fw-bolder px-4"><h4>City</h4></span>
            <Link to="/city" className="btn btn-primary">back</Link>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-bordered"> 
            <tbody clss="top-text">
              <tr className="border border-3">
                <td width="25%">id</td>
                <td width="25%">{viewCity.id}</td>
                
              </tr>
              <tr className="border border-3">
                <td width="25%">name</td>
                <td width="25%">{viewCity.name}</td>
                
              </tr>
              <tr className="border border-3">
                <td width="25%">pincode</td>
                <td width="25%">{viewCity.pincode}</td>
                
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