import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
export default function AdminHome() {
    return (
        <div className="wrapper">
            <AdminMenu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">

                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        {/* first row */}
                        <div className="row">
                            <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between">
                                <h1 className="h3 p-3 text-white">Sales Summery</h1>
                            </div>
                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Today Sales</b></h4>
                                        <h5><span className="badge bg-primary">100</span>&nbsp;Orders</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Weekly Sales</b></h4>
                                        <h5><span className="badge bg-primary">100</span>&nbsp;Orders</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Monthly Sales</b></h4>
                                        <h5><span className="badge bg-primary">100</span>&nbsp;Orders</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Yearly Sales</b></h4>
                                        <h5><span className="badge bg-primary">100</span>&nbsp;Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* second row */}
                        <div className="row">
                            <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between">
                                <h1 className="h3 p-3 text-white">Shop Summery</h1>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Total Users</b></h4>
                                        <h5><span className="badge bg-primary">100</span>&nbsp;Users</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Total Product</b></h4>
                                        <h5><span className="badge bg-primary">100</span>&nbsp;Products</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h4 className="mb-4"><b>Total Categories</b></h4>
                                        <h5><span className="badge bg-primary">100</span>&nbsp;Categories</h5>
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