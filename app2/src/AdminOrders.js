import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
export default function AdminOrders() {
    return (
        <div className="wrapper">
            <AdminMenu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">

                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                            <h1 className="h3 p-3 text-white">Orders</h1>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Bill Date</th>
                                            <th>Price
                                            </th><th>Status
                                            </th><th>Delivery Details</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Sun 11-Feb-2024</td>
                                            <td>1500 Rs.</td>
                                            <td>Confirmed</td>
                                            <td>Krunal Balar <br />
                                                Bhavnagar-364001</td>
                                            <td width="15%">
                                                <a href="admin-order-detail.html">
                                                    <i className="fa fa-eye fa-2x" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                <AdminFooter />
            </div>
        </div>
    )
}