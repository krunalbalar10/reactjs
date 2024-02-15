import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
export default function AdminCategory() {
    return (
        <div className="wrapper">
            <AdminMenu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">

                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                            <h1 className="h3 p-3 text-white">Category</h1>
                            <a href="admin-addnew-category.html" className="btn btn-light m-3">Add New Category&nbsp;<i className="fa-solid fa-plus" /></a>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Photo
                                            </th><th>Is Live</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Shoes</td>
                                            <td>
                                                <img src="https:/picsum.photos/150" className="img-fluid" alt />
                                            </td>
                                            <td>Yes</td>
                                            <td width="15%">
                                                <a href="admin-edit-category.html">
                                                    <i className="fa fa-pencil fa-2x" />
                                                </a>&nbsp;&nbsp;
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
                </main>
                <AdminFooter />
            </div>
        </div>
    )
}