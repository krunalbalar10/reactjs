import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import logo from "./images/logo.jpeg";

export default function AdminProfile()

{
    return(
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
          
             
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xxl-3">
          <div className="card my-5">
            <div className="card-body">
              <Link href="#" className="text-nowrap logo-img text-center d-block py-3 w-100">
                <img src={logo} width={60} /><span><b>The Good School Guide</b></span>
              </Link>
              <p className="text-center"><b>My Profile</b></p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Email Id</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your email id" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Enter City" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <input type="text" className="form-control" id="inputstate" placeholder="Enter State" />
                  </div>
                  <div className="col-12 mt-3 text-end">
                    <button type="submit" className="btn btn-primary">Save</button>
                  </div>
                </div>
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