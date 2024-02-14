export default function AdminProductDetail() {
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
                            <a href="admin-product.html" className="btn btn-light">back</a>
                        </div>
                        <div className="card-body ">
                            <h5 className="border-bottom pb-2">IPhone - 15</h5>
                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <img src="https://picsum.photos/300" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <table className="table table-striped">
                                        <tbody><tr>
                                            <td width="40%">ID</td>
                                            <td />
                                        </tr>
                                            <tr>
                                                <td width="40%">Category</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">Price</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">Stock</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">Weight</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">Size</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td width="40%">is Live</td>
                                                <td />
                                            </tr>
                                        </tbody></table>
                                </div>
                                <div className="col-12">
                                    <h5 className="border-bottom pb-2">Detail</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatem deserunt, maiores soluta repellat neque alias autem est ducimus, voluptatum modi id veniam, fuga possimus molestias praesentium tempore repudiandae tenetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}