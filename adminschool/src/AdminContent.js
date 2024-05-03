import { Link, useParams } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import { useEffect, useState } from "react";
import getUrl from "./Adminapi";
import axios from "axios";
import showError, { NetworkError } from "./toast-message";
export default function AdminContent()
{
  let {contentid} = useParams();
  console.log(contentid);

  let [viewContent , setViewContent] = useState({});

  useEffect(() => {
    let apiAddress = getUrl() + 'read_school_contents_by_school.php?schoolid=' + contentid;
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

        console.log(viewContent);
        setViewContent(response.data[2]['data'][0]);
        console.log('we are here');
        console.log(response.data[2]['data']);

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
  <aside className="left-sidebar">
    {/* Sidebar scroll*/}
    <AdminMenu />
    {/* End Sidebar scroll*/}
  </aside>
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
            <span className="fw-bolder px-4"><h4>content</h4></span>
            <Link to="/schoolmgt" className="btn btn-primary ">back</Link>
          </div>
        </div>
        <div className="card-body">
          {/* <h5 class="card-title fw-semibold mb-4"></h5> */}
          <table className="table table-bordered"> 
            <tbody clss="top-text">
              <tr className="border border-3">
                <td width="25%">id</td>
                <td>{viewContent.id}</td>
              </tr>
              <tr className="border border-3">
                <td width="25%">school id</td>
                <td>{viewContent.schoolid}</td>
              </tr>
              <tr className="border border-3">
                <td width="25%">title</td>
                <td>{viewContent.title}</td>
              </tr>
              <tr className="border border-3">
                <td width="25%">detail</td>
                <td>{viewContent.detail}</td>
              </tr>
              <tr className="border border-3">
                <td width="25%">content type</td>
                <td>{viewContent.contenttype}</td>
              </tr>
              <tr className="border border-3">
                <td width="25%">file name</td>
                <td>{viewContent.filename}</td>
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