export default function AdminMenu () {
    return(
        <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
                        <i className="fa-solid fa-store" />&nbsp;<span className="align-middle">Online Store</span>
                    </a>
                    <ul className="sidebar-nav">
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="admin-home.html">
                                <i className="fa-solid fa-house" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Home</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="admin-category.html">
                                <i className="fa-solid fa-tags" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Category</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="admin-products.html">
                                <i className="fa-solid fa-gifts" /> &nbsp;&nbsp;<span className="align-middle">Products</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="admin-orders.html">
                                <i className="fa-solid fa-box" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Orders</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="admin-users.html">
                                <i className="fa-solid fa-user" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Users</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="admin-change-password.html">
                                <i className="fa-solid fa-gear" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Change Password</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <i className="fa-solid fa-right-from-bracket" /> &nbsp;&nbsp;&nbsp;<span className="align-middle">Log Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}