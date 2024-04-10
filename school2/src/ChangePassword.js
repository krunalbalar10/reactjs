export default function ChangePassword(){
    return(
        <div className="container">
  <div className="row">
    <div className="col-12">
      <div className="card shadow m-5">
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <img src="images/logo.jpeg" width={70} height={70} alt />
            <h3 className="text-center mt-3">The Good School Guide</h3>
          </div>
          <p className="text-center fs-5 mb-4">Change Password</p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputCurrentPassword" className="form-label">Current Password</label>
                  <input type="password" placeholder="Enter Current Password" className="form-control" id="exampleInputCurrentPassword" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputNewPassword" className="form-label">New Password</label>
                  <input type="password" className="form-control" placeholder="Enter New Password" id="exampleInputNewPassword" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputConfirmNewPassword" className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" placeholder="Enter Again New Password" id="exampleInputConfirmNewPassword" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Change Password</button>
                </div>
              </form>
              <div>
                <p className="mt-3 text-end">Go back to <a className="btn btn-primary" href="login.html">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}