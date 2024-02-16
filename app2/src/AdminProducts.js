import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
import { Link } from "react-router-dom";

export default function AdminProducts() {
    return (
        <div className="wrapper">
            <AdminMenu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">

                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                            <h1 className="h3 p-3 text-white">Products</h1>
                            <Link to="/add-new-product" className="btn btn-light m-3">Add New Product&nbsp;<i className="fa-solid fa-plus" /></Link>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Photo
                                            </th><th>Price
                                            </th><th>Stock
                                            </th><th>Is Live</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Shoes <br />
                                                <span>(Formal)</span>
                                            </td>
                                            <td>
                                                <img src="https:/picsum.photos/150" className="img-fluid" alt />
                                            </td>
                                            <td>1500 Rs.</td>
                                            <td>20 Qty.</td>
                                            <td>Yes</td>
                                            <td width="15%">
                                                <Link to="/view-product">
                                                    <i className="fa fa-eye fa-2x" />
                                                </Link>&nbsp;
                                                <Link to="/edit-product">
                                                    <i className="fa fa-pencil fa-2x" />
                                                </Link>&nbsp;
                                                <Link to="#">
                                                    <i className="fa fa-trash fa-2x" />
                                                </Link>
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