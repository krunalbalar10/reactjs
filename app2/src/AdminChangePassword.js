import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import VerifyLogin from "./VerifyLogin"
export default function AdminChangePassword() {

    VerifyLogin();

    return (
        <div className="wrapper">
            <AdminMenu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">

                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                            <h1 className="h3 p-3 text-white">Change Password</h1>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body ">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                                <input type="password" className="form-control" id="currentPassword" name="currentPassword" placeholder="type Existing password" required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                                <input type="password" className="form-control" id="newPassword" name="newPassword" placeholder="type a new password" required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="type again a new password here" required />
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button type="submit" className="btn btn-primary">Save Changes</button>&nbsp;
                                                <button type="reset" className="btn btn-danger">Clear All</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <AdminFooter />
            </div>
        </div>
    )
}