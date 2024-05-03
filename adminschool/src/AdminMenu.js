import { Link } from "react-router-dom";
import logo from "./images/logo.jpeg";

export default function AdminMenu()
{
    return(
        <aside className="left-sidebar">
  {/* Sidebar scroll*/}
  <div>
    <div className="brand-logo d-flex align-items-center justify-content-between">
      <Link href="/index" className="text-nowrap logo-img">
        <img src={logo} width={60} /><span><b>The Good School Guide</b></span>
      </Link>
      <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
        <i className="ti ti-x fs-8" />
      </div>
    </div>
    {/* Sidebar navigation*/}
    {/* End Sidebar navigation */}
    <nav className="sidebar-nav scroll-sidebar" data-simplebar>
      <ul id="sidebarnav">
       
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/category" aria-expanded="false">
            <span>
              <i className="ti ti-category" />
            </span>
            <span className="hide-menu">Category</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/city" aria-expanded="false">
            <span>
              <i className="ti ti-building" />
            </span>
            <span className="hide-menu">City</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/schoolmgt" aria-expanded="false">
            <span>
              <i className="ti ti-school" />
            </span>
            <span className="hide-menu">school managment</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/add-school" aria-expanded="false">
            <span>
              <i className="ti ti-registered" />
            </span>
            <span className="hide-menu">School Registration</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/fees" aria-expanded="false">
            <span>
              <i className="ti ti-report-money" />
            </span>
            <span className="hide-menu">fees managment</span>
          </Link>
        </li>
        <li className="nav-small-cap">
          <i className="ti ti-dots nav-small-cap-icon fs-4" />
          <span className="hide-menu">AUTH</span>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/change-password" aria-expanded="false">
            <span>
              <i className="ti ti-settings" />
            </span>
            <span className="hide-menu">changepassword</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/" aria-expanded="false">
            <span>
              <i className="ti ti-power" />
            </span>
            <span className="hide-menu">logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  {/* End Sidebar scroll*/}
</aside>
    );
}
       