import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
export default function AdminEditProduct() {
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
                            <a href="admin-products.html" className="btn btn-light m-3">Back&nbsp;<i className="fa-solid fa-arrow-left" /></a>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    Edit Product
                                    <hr width="40%" />
                                </h4>
                            </div>
                            <div className="card-body">
                                <form action>
                                    <div className="row">
                                        {/* First Row */}
                                        <div className="col-md-3">
                                            <label htmlFor="categoryid" className="form-label mb-2">Change Category</label>
                                            <select className="form-select" name="categoryid" id="categoryid" required autofocus>
                                                <option value={1}>Category 1</option>
                                                <option value={2}>Category 2</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 mb-5">
                                            <label htmlFor="title" className="form-label mb-2">Edit Title</label>
                                            <input type="text" name="title" id="title" className="form-control" required />
                                        </div>
                                        <div className="col-md-3 mb-5">
                                            <label htmlFor="stock" className="form-label mb-2">Edit Stock</label>
                                            <input type="number" name="stock" id="stock" className="form-control" required />
                                        </div>
                                        <div className="col-md-3 mb-5">
                                            <label htmlFor="price" className="form-label mb-2">Edit Price</label>
                                            <input type="number" name="price" id="price" className="form-control" required />
                                        </div>
                                        {/* Second Row */}
                                        <div className="col-md-4 mb-5">
                                            <label htmlFor="weight" className="form-label mb-2">Edit Weight</label>
                                            <input type="text" className="form-control" id="weight" name="weight" required />
                                        </div>
                                        <div className="col-md-4 mb-5">
                                            <label htmlFor="size" className="form-label mb-2">Edit Size</label>
                                            <input type="text" className="form-control" id="size" name="size" required />
                                        </div>
                                        <div className="col-md-4 mb-5">
                                            <label htmlFor="photo" className="form-label mb-2">Change Photo</label>
                                            <input type="file" className="form-control" id="photo" name="photo" required />
                                        </div>
                                        {/* third row */}
                                        <div className="col-md-2">
                                            <label className="form-check-label d-block mb-2">Is Live</label>
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
                                            <label htmlFor="detail" className="form-label mb-2">Edit Detail</label>
                                            <textarea className="form-control" id="detail" name="detail" rows={3} required defaultValue={""} />
                                        </div>
                                        {/* Buttons */}
                                        <div className="col-md-3 mt-2">
                                            <button type="submit" className="btn btn-primary mt-4 w-100">Save Changes</button>
                                            <button type="reset" className="btn btn-danger w-100 mt-1">Clear All</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <AdminFooter />
            </div>
        </div>
    )
}