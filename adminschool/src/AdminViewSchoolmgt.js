import { Link, useParams } from "react-router-dom"; 
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import { useEffect, useState } from "react";
import getUrl from "./Adminapi";
import showError, { NetworkError } from "./toast-message";
import axios from "axios";
export default function AdminViewSchoolmgt()
{
  let {viewschoolid} = useParams();
  console.log(viewschoolid);

  let [viewSchool , setViewSchool] = useState({});

  useEffect(() => {
    let apiAddress = getUrl() + 'read_school_school.php?id=' + viewschoolid;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response);
      console.log(response.data[2])
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
        setViewSchool(response.data[2]);
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
            <span className="fw-bolder px-4"><h4>school management</h4></span>
            <Link to="/schoolmgt" className="btn btn-primary ">back</Link>
          </div>
        </div>
        <div className="card-body">
          {/* <h5 class="card-title fw-semibold mb-4"></h5> */}
          <table className="table table-bordered"> 
            <tbody clss="top-text">
            <tr className="border border-3">
                <td width="25%">id</td>
                <td width="25%">{viewSchool.id}</td>
              </tr>
              <tr className="border border-3">
                <td width="25%">Password</td>
                <td width="25%">{viewSchool.password}</td>
              </tr>
              <tr className="border border-3">
                <td>email</td>
                <td width="25%">{viewSchool.email}</td>
                
              </tr>
              <tr className="border border-3">
                <td>schoolname</td>
                <td width="25%">{viewSchool.schoolname}</td>
                
              </tr>
              <tr className="border border-3">
                <td>mobile</td>
                <td width="25%">{viewSchool.mobile}</td>
                
              </tr>
              <tr className="border border-3">
                <td>contactno</td>
                <td width="25%">{viewSchool.contactno}</td>
                
              </tr>
              <tr className="border border-3">
                <td>address</td>
                <td width="25%">{viewSchool.address}</td>
                
              </tr>
              <tr className="border border-3">
                <td>cityid</td>
                <td width="25%">{viewSchool.cityid}</td>
                
              </tr>
              <tr className="border border-3">
                <td>status</td>
                <td width="25%">{viewSchool.status}</td>
                
              </tr>
              <tr className="border border-3">
                <td>categoryid</td>
                <td width="25%">{viewSchool.categoryid}</td>
                
              </tr>
              <tr className="border border-3">
                <td>carpetarea</td>
                <td width="25%">{viewSchool.carpetarea}</td>
                
              </tr>
              <tr className="border border-3">
                <td>noofbuildings</td>
                <td width="25%">{viewSchool.noofbuildings}</td>
                
              </tr>
              <tr className="border border-3">
                <td>establishmentyear</td>
                <td width="25%">{viewSchool.establishmentyear}</td>
                
              </tr>
              <tr className="border border-3">
                <td>parkingfacility</td>
                <td width="25%">{viewSchool.parkingfacility}</td>
                
              </tr>
              <tr className="border border-3">
                <td>playground</td>
                <td width="25%">{viewSchool.playground}</td>
                
              </tr>
              <tr className="border border-3">
                <td>library</td>
                <td width="25%">{viewSchool.library}</td>
                
              </tr>
              <tr className="border border-3">
                <td>canteen</td>
                <td width="25%">{viewSchool.canteen}</td>
                
              </tr>
              <tr className="border border-3">
                <td>hostel</td>
                <td width="25%">{viewSchool.hostel}</td>
                
              </tr>
              <tr className="border border-3">
                <td>busfacility</td>
                <td width="25%">{viewSchool.busfacility}</td>
                
              </tr>
              <tr className="border border-3">
                <td>auditorium</td>
                <td width="25%">{viewSchool.auditorium}</td>
                
              </tr>
              <tr className="border border-3">
                <td>restroom</td>
                <td width="25%">{viewSchool.restroom}</td>
                
              </tr>
              <tr className="border border-3">
                <td>stroage</td>
                <td width="25%">{viewSchool.stroage}</td>
                
              </tr>
              <tr className="border border-3">
                <td>actype</td>
                <td width="25%">{viewSchool.actype}</td>
                
              </tr>
              <tr className="border border-3">
                <td>multimedia</td>
                <td width="25%">{viewSchool.multimedia}</td>
                
              </tr>
              <tr className="border border-3">
                <td>awards</td>
                <td width="25%">{viewSchool.awards}</td>
                
              </tr>
              <tr className="border border-3">
                <td>isgranted</td>
                <td width="25%">{viewSchool.isgranted}</td>
                
              </tr>
              <tr className="border border-3">
                <td>trust</td>
                <td width="25%">{viewSchool.trust}</td>
                
              </tr>
              <tr className="border border-3">
                <td>website</td>
                <td width="25%">{viewSchool.website}</td>
                
              </tr>
              <tr className="border border-3">
                <td>coeducation</td>
                <td width="25%">{viewSchool.coeducation}</td>
                
              </tr>
              <tr className="border border-3">
                <td>scout</td>
                <td width="25%">{viewSchool.scout}</td>
                
              </tr>
              <tr className="border border-3">
                <td>PT</td>
                <td width="25%">{viewSchool.PT}</td>
                
              </tr>
              <tr className="border border-3">
                <td>uniform</td>
                <td width="25%">{viewSchool.uniform}</td>
                
              </tr>
              <tr className="border border-3">
                <td>parentmeeting</td>
                <td width="25%">{viewSchool.parentmeeting}</td>
                
              </tr>
              <tr className="border border-3">
                <td>minimumparenteducation</td>
                <td width="25%">{viewSchool.minimumparenteducation}</td>
                
              </tr>
              <tr className="border border-3">
                <td>music</td>
                <td width="25%">{viewSchool.music}</td>
                
              </tr>
              <tr className="border border-3">
                <td>dance</td>
                <td width="25%">{viewSchool.dance}</td>
                
              </tr>
              <tr className="border border-3">
                <td>gimnisum</td>
                <td width="25%">{viewSchool.gimnisum}</td>
                
              </tr>
              <tr className="border border-3">
                <td>computerlab</td>
                <td width="25%">{viewSchool.computerlab}</td>
                
              </tr>
              <tr className="border border-3">
                <td>firesafty</td>
                <td width="25%">{viewSchool.firesafty}</td>
                
              </tr>
              <tr className="border border-3">
                <td>profilecompletionstatus</td>
                <td width="25%">{viewSchool.profilecompletionstatus}</td>
                
              </tr>
              <tr className="border border-3">
                <td>acctype</td>
                <td width="25%">{viewSchool.acctype}</td>
                
              </tr>
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