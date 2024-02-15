import AdminMenu from "./AdminMenu"
import AdminFooter from "./AdminFooter"
export default function AdminViewProduct() {
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
                                    Sneakers
                                    <hr width="40%" />
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6 col-12">
                                        <img src="https://picsum.photos/325" className="img-fluid" />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <table className="table table-bordered">
                                            <tbody><tr>
                                                <td width="30%">Id</td>
                                                <td />
                                            </tr>
                                                <tr>
                                                    <td width="30%">Category</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td width="30%">Price</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td width="30%">Quantity</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td width="40%">Weight</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td width="30%">Size</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td width="30%">Is Live</td>
                                                    <td />
                                                </tr>
                                            </tbody></table>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <h4 className>Details</h4><hr width="40%" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni sunt dolores numquam recusandae placeat optio voluptatum fuga aliquam ullam quam rem a eius tenetur iste sed! Officiis, rem voluptatem!</p>
                                    </div>
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