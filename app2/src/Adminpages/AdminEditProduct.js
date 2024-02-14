export default function AdminEditProduct() {
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
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="card shadow">
                                <div className="card-header d-flex justify-content-between text-bg-primary">
                                    <h3 className="mb-1 text-white">Product</h3>
                                    <a href="admin-product.html" className="btn btn-light">back</a>
                                </div>
                                <div className="card-body ">
                                    <h5 className="border-bottom pb-2">Edit product</h5>
                                    <form>
                                        <div className="row g-3">
                                            {/* 1st row */}
                                            <div className="col-md-3">
                                                <label htmlFor="categoryid" className="form-label">Change Category</label>
                                                <select className="form-select" id="categoryid" name="categoryid" required autofocus>
                                                    {/* Add options as needed */}
                                                    <option value={1}>Category 1</option>
                                                    <option value={2}>Category 2</option>
                                                    {/* ... */}
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="title" className="form-label">Edit Title</label>
                                                <input type="text" className="form-control" id="title" name="title" required />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="price" className="form-label">Edit Price</label>
                                                <input type="number" className="form-control" id="price" name="price" required />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="stock" className="form-label">Edit Stock</label>
                                                <input type="number" className="form-control" id="stock" name="stock" required />
                                            </div>
                                            {/* 2nd row */}
                                            <div className="col-md-4">
                                                <label htmlFor="weight" className="form-label">Edit Weight</label>
                                                <input type="text" className="form-control" id="weight" name="weight" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="size" className="form-label">Edit Size</label>
                                                <input type="text" className="form-control" id="size" name="size" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="photo" className="form-label">Change Photo</label>
                                                <input type="file" className="form-control" id="photo" name="photo" required />
                                            </div>
                                            {/* 3rd row */}
                                            <div className="col-md-2">
                                                <label className="form-check-label d-block">Is Live</label>
                                                <div className="form-check form-check">
                                                    <input className="form-check-input" type="radio" name="islive" id="yes" defaultValue="yes" required />
                                                    <label className="form-check-label" htmlFor="yes">Yes</label>
                                                </div>
                                                <div className="form-check form-check">
                                                    <input className="form-check-input" type="radio" name="islive" id="no" defaultValue="no" required />
                                                    <label className="form-check-label" htmlFor="no">No</label>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <label htmlFor="detail" className="form-label">Change Detail</label>
                                                <textarea className="form-control" id="detail" name="detail" rows={3} required defaultValue={""} />
                                            </div>
                                            {/* Buttons */}
                                            <div className="col-md-3">
                                                <button type="submit" className="btn btn-primary mt-4 w-100">Save Changes</button>
                                                <button type="reset" className="btn btn-dark w-100 mt-1">Clear</button>
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

    );
}