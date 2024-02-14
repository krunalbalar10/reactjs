export default function AdminProduct() {
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
                            <h3 className="mb-1 text-white">Product</h3>
                            <a href="admin-add-product.html" className="btn btn-light">Add new product <i className="fa-solid fa-floppy-disk" /></a>
                        </div>
                        <div className="card-body ">
                            <table className="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th className="text-bg-light-gray">id</th>
                                        <th className="text-bg-light-gray">Title</th>
                                        <th className="text-bg-light-gray">Photo</th>
                                        <th className="text-bg-light-gray">Price</th>
                                        <th className="text-bg-light-gray">Stock</th>
                                        <th className="text-bg-light-gray">Is Live</th>
                                        <th className="text-bg-light-gray">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>I Phone 15<br />
                                            <span className="text-danger">(Mobile)</span>
                                        </td>
                                        <td>
                                            <img src="https://picsum.photos/150" className="img-fluid" />
                                        </td>
                                        <td>125000</td>
                                        <td>10</td>
                                        <td>Yes</td>
                                        <td width="15%">
                                            <a href="admin-product-detail.html">
                                                <i className="fa fa-eye fa-2x" />
                                            </a>
                                            <a href="admin-edit-product.html">
                                                <i className="fa fa-pencil fa-2x" />
                                            </a>&nbsp;
                                            <a href="#">
                                                <i className="fa fa-trash fa-2x" />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}