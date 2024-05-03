import { Link } from "react-router-dom"; 
import AdminMenu from "./AdminMenu";
import logo from "./images/logo.jpeg";

export default function AdminSchoolReg()
{
    return(
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-12 col-lg-12 col-xxl-3">
          <div className="card ">
            <div className="card-body">
              <Link href="/index" className="text-nowrap logo-img text-center d-block py-3 w-100">
                <img src={logo} width={60} /><span><b>The Good School Guide</b></span>
              </Link>
              <p className="text-center"><b>school Registration</b></p>
              <form className="row">
                <div className="col-sm-6 col-12">
                  <label htmlFor="yourname" className="form-label">Your Name</label>
                  <input type="text" name="name" className="form-control" id="yourname" required />
                </div>
                <div className="invalid-feedback">please,enter your name</div>
                <div className="col-sm-6 col-12 mt-2">
                  <label htmlFor="youremail" className="form-label">your email</label>
                  <input type="email" name="email" className="form-control" id="youremail" required />
                  <div className="invalid-feedback">please enter a valid email address!</div>
                </div>
                <div className="col-sm-6 col-12 mt-2">
                  <label htmlFor="yourname" className="form-label">your mobile</label>
                  <input type="text" name="name" className="form-control" id="yourname" required />
                  <div className="invalid-feedback">please,enter your name!</div>
                </div>
                <div className="col-sm-6 col-12 mt-2">
                  <label htmlFor="youremail" className="form-label">your Registration No</label>
                  <input type="email" name="email" className="form-control" id="youremail" required />
                  <div className="invalid-feedback">please,enter a valid email address!</div>
                </div>
                <div className="col-sm-6 col-12 mt-2">
                  <label htmlFor="yourpassword" className="form-label">your password</label>
                  <input type="password" name="password" className="form-control" id="yourpassword" required />
                  <div className="invalid-feedback">please,enter your password!</div>
                </div>
                <div className="col-sm-6 col-12 mt-2">
                  <label htmlFor="yourpassword" className="form-label">confirm password</label>
                  <input type="password" name="password" className="form-control" id="yourpassword" required />
                  <div className="invalid-feedback">please,enter your password!</div>
                </div>
                <div className="col-12 px-3 pb-2 mt-2">
                  <button className="btn btn-primary w-100" type="submit">Registration</button>
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