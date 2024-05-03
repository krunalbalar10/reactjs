import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import logo from "./images/logo.jpeg";
export default function AdminChangePassword()
{
    return(
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <AdminMenu />
             
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xxl-3">
          <div className="card mb-0  shadow">
            <div className="card-body ">
              {/* <h3 class="text-center fw-bold">The Good School Guide</h3> */}
              <Link to="/index" className="text-nowrap logo-img text-center d-block py-3 w-100">
                <img src={logo} width={60} /><span><b>The Good School Guide</b></span>
              </Link>
              <p className="text-center"><b>Admin Login</b></p>
              <form>
                <div className="mb-3">
                  <label htmlFor="currentpassword" className="form-label">Current Password</label>
                  <input type="password" className="form-control" id="currentpassword" placeholder="Enter your current password" />
                </div>
                <div className="mb-4">
                  <label htmlFor="newps" className="form-label">New Password</label>
                  <input type="password" className="form-control" id="newps" placeholder="Enter new password" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="cps" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="cps" placeholder="Enter confirm password" required />
                </div>
                <Link to="/" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Change Password</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
}