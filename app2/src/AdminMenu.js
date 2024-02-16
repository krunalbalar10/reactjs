import { Link } from "react-router-dom";

export default function AdminMenu () {
    return(
        <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <Link className="sidebar-brand" to="/home">
                        <i className="fa-solid fa-store" />&nbsp;<span className="align-middle">Online Store</span>
                    </Link>
                    <ul className="sidebar-nav">
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/home">
                                <i className="fa-solid fa-house" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Home</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/category">
                                <i className="fa-solid fa-tags" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Category</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/products">
                                <i className="fa-solid fa-gifts" /> &nbsp;&nbsp;<span className="align-middle">Products</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/orders">
                                <i className="fa-solid fa-box" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Orders</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/users">
                                <i className="fa-solid fa-user" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Users</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/change-password">
                                <i className="fa-solid fa-gear" />&nbsp;&nbsp;&nbsp; <span className="align-middle">Change Password</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/#">
                                <i className="fa-solid fa-right-from-bracket" /> &nbsp;&nbsp;&nbsp;<span className="align-middle">Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}