import logo from "./images/logo.jpeg";

export default function ForgotPassword() {
    return(
        <div className="container">
  <div className="row">
    <div className="col-12">
      <div className="card shadow m-5">
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <img src={logo} width={70} height={70} alt />
            <h3 className="text-center mt-3">The Good School Guide</h3>
          </div>
          <p className="text-center fs-5 mb-4">Forgot Password</p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                  <input type="email" className="form-control" placeholder="Enter Your Email" id="exampleInputEmail" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Send Email</button>
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