import { Link } from "react-router-dom";
import logo from "./images/logo.jpeg"

export default function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card shadow m-5">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <img src={logo} width={70} height={70} alt />
                <h3 className="text-center mt-3">The Good School Guide</h3>
              </div>
              <p className="text-center fs-5 mb-4">Admin Login</p>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" placeholder="Enter Email Address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" placeholder="Enter Password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                      <Link to="/forgot-password" className="float-end">Forgot Password?</Link>
                    </div>
                    <br/>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}