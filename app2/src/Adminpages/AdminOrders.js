export default function AdminOrders() {
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
                            <h3 className="mb-1 text-white">Orders</h3>
                        </div>
                        <div className="card-body ">
                            <table className="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th className="text-bg-light-gray">id</th>
                                        <th className="text-bg-light-gray">BillDate</th>
                                        <th className="text-bg-light-gray">Amount</th>
                                        <th className="text-bg-light-gray">Status</th>
                                        <th className="text-bg-light-gray">Delivery Detail</th>
                                        <th className="text-bg-light-gray">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sat 10-feb-2024</td>
                                        <td>
                                            300000
                                        </td>
                                        <td>Confirmed</td>
                                        <td>Ankit Patel <br />
                                            Bhavnagar - 364001
                                        </td>
                                        <td width="15%">
                                            <a href="admin-order-detail.html">
                                                <i className="fa fa-eye fa-2x" />
                                            </a>&nbsp;
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