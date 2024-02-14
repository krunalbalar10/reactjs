export default function AdminHome() {
    return (
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            {/* Sidebar Start */}
            <AdminMenu />
            {/*  Sidebar End */}
            {/*  Main wrapper */}
            <div className="body-wrapper">
                {/*  Header Start */}
                <header className="app-header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item d-block d-xl-none">
                                <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                                    <i className="ti ti-menu-2" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*  Header End */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-3">Sales Summary</h2>
                        </div>
                        <div className="col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Today Sales</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Weekly Sales</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Monthly Sales</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Yearly Sales</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <h2 className="mb-3">Shop Summary</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Users</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Users</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Product</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Products</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Categories</h4>
                                    <div className="col-12">
                                        <h5 className="fw-semibold mb-3"><span className="badge bg-primary p-2">100</span> Category</h5>
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