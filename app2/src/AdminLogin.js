import { Link } from "react-router-dom";

export default function AdminLogin() {
    return (
        <div className="wrapper">
            <div className="main">
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="rounded d-flex justify-content-center my-2">
                            <h1 className="h3 p-3 text-white">Online Store App</h1>
                        </div>
                        <div className="mt-4">
                            <h4 align="center">Admin</h4>
                        </div>
                        <div className="mx-5">
                            <div className="card mx-5">
                                <div className="card-body">
                                    <div className="col-12" align="center">
                                        <form action>
                                            <div className="mb-4 mt-4">
                                                <label htmlFor="inputemail" className="form-label">Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="email" id="inputemail" name="email" className="form-input" required />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="inputpassword" className="form-label">Password</label>
                                                <input type="password" id="inputpassword" name="password" className="form-input" required />
                                            </div>
                                            <div className="mb-4">
                                                <button type="submit" className="btn btn-primary">Login</button>
                                            </div>
                                            <div className="mb-4 text-end">
                                                <Link to="/forgot-password">Forget Password?</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row text-muted">
                            <div className="col-6 text-start">
                                <p className="mb-0">
                                    <i className="fa-solid fa-store" />&nbsp;<Link className="text-muted" to="/home" target="_blank"><strong>Online
                                        Store</strong></Link> ©
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}