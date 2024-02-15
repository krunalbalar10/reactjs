import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
export default function AdminAddNewCategory() {
    return (
        <div className="wrapper">
            <AdminMenu/>
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    
                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <div style={{ "background-color": "#2e3f51" }} className="d-flex justify-content-between my-2">
                            <h1 className="h3 p-3 text-white">Category</h1>
                            <a href="admin-category.html" className="btn btn-light m-3">Back&nbsp;<i className="fa-solid fa-arrow-left" /></a>
                        </div>
                        <div className="card">
                            <div className="card-header pt-4">
                                <h4>Add New Category</h4><hr />
                            </div>
                            <div className="card-body pt-0">
                                <form action>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" name="title" id="title" className="form-control" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="photo" className="form-label">Photo</label>
                                        <input type="file" accept="image/*" name="photo" id="photo" className="form-control" required />
                                    </div>
                                    <div className="mb-3">
                                        <p>Is this category live?</p>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="yes">Yes</label>
                                            <input type="radio" name="islive" id="yes" className="form-check-input" readOnly defaultValue={0} />
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="no">No</label>
                                            <input type="radio" name="islive" id="no" className="form-check-input" readOnly defaultValue={1} />
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" name="submit" className="btn btn-primary">Save Changes</button>
                                        <button type="reset" name="reset" className="btn btn-danger">Clear All</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <AdminFooter/>
            </div>
        </div>
    )
}