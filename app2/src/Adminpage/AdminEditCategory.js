export default function AdminEditCategory() {
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
                    <div className="card shadow">
                        <div className="card-header d-flex justify-content-between text-bg-primary">
                            <h3 className="mb-1 text-white">Category</h3>
                            <a href="admin-category.html" className="btn btn-light">back</a>
                        </div>
                        <div className="card-body">
                            <h5 className="border-bottom pb-2">Edit Category</h5>
                            {/* vertical form */}
                            <form action>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Edit Title</label>
                                    <input type="text" id="title" name="title" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="photo" className="form-label">Change Photo</label>
                                    <input type="file" id="photo" name="photo" className="form-control" required accept="image/*" />
                                </div>
                                <div className="mb-3">
                                    <b>Is this category live?</b>
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="yes">Yes</label>
                                        <input type="radio" name="islive" id="yes" className="form-check-input" required defaultValue={1} />
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="no">No</label>
                                        <input type="radio" name="islive" id="no" className="form-check-input" defaultValue={0} required />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="submit" name="submit" className="btn btn-primary">Save changes</button>&nbsp;
                                    <button type="reset" name="reset" className="btn btn-dark">Clear all</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

);
}