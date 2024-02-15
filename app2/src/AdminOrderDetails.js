import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
export default function AdminOrderDetails() {
    return (
        <div className="wrapper">
            <AdminMenu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">

                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                            <h1 className="h3 p-3 text-white">Orderes</h1>
                            <span>
                                <a href="admin-orders.html" className="btn btn-light m-3">Back&nbsp;<i className="fa-solid fa-arrow-left" /></a>
                                <button type="button" className="btn btn-primary me-2" onclick="window.print()">Print</button>
                            </span>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-header">
                                    <h4>
                                        Order Details
                                        <hr width="40%" />
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-sm">
                                        <tbody><tr>
                                            <th>Bill No</th>
                                            <td>12345</td>
                                            <th>Customer ID</th>
                                            <td>7890</td>
                                        </tr>
                                            <tr>
                                                <th>Date</th>
                                                <td>12-02-2024</td>
                                                <th>Name</th>
                                                <td>Rahul Sharma</td>
                                            </tr>
                                            <tr>
                                                <th>Amount</th>
                                                <td>₹100.00</td> {/* Assuming Indian Rupees */}
                                                <th>Address</th>
                                                <td>42, MG Road, Pune</td>
                                            </tr>
                                            <tr>
                                                <th>Payment status</th>
                                                <td>Paid</td>
                                                <th>City</th>
                                                <td>Mumbai</td>
                                            </tr>
                                            <tr>
                                                <th>Order Status</th>
                                                <td>Dispatched
                                                    <select name="orderstatus" className="form-select">
                                                        <option value>change order status</option>
                                                        <option value={1}>Confirmed</option>
                                                        <option value={2}>Dispatched</option>
                                                        <option value={3}>Delivered</option>
                                                        <option value={4}>Return</option>
                                                    </select>
                                                </td>
                                                <th>Pincode</th>
                                                <td>411001</td>
                                            </tr>
                                            <tr>
                                                <th>Remarks</th>
                                                <td>None</td>
                                                <th>Mobile</th>
                                                <td>(555) 123-4567</td>
                                            </tr>
                                        </tbody></table>
                                    <table className="table table-bordered table-striped table-sm mt-3">
                                        <thead>
                                            <tr>
                                                <th>Product ID</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>001</td>
                                                <td>Product A</td>
                                                <td>₹50.00</td>
                                                <td>2</td>
                                                <td>₹100.00</td>
                                            </tr>
                                            <tr>
                                                <td>002</td>
                                                <td>Product B</td>
                                                <td>₹75.00</td>
                                                <td>3</td>
                                                <td>₹225.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4} />
                                                <th>₹325.00</th>
                                            </tr>
                                        </tbody>
                                    </table>
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