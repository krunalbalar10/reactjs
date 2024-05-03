import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
export default function AdminFeesSchoolmgt()

///view-fees
{
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
            <span className="fw-bolder px-4"><h4>view fees</h4></span>
            <Link to="/fees" className="btn btn-primary ">back</Link>
          </div>
        </div>
        <div className="card-body">
          {/* <h5 class="card-title fw-semibold mb-4"></h5> */}
          <table className="table table-bordered"> 
            <tbody clss="top-text">
              <tr className="border border-3">
                <td width="25%">id</td>
                <td />
              </tr>
              <tr className="border border-3">
                <td width="25%">school id</td>
                <td />
              </tr>
              <tr className="border border-3">
                <td width="25%">title</td>
                <td />
              </tr>
              <tr className="border border-3">
                <td width="25%">amount</td>
                <td />
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