import AdminMenu from "./AdminMenu";
export default function AdminCategory()
{
    return(
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <AdminMenu />
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
  <aside className="left-sidebar">
    {/* Sidebar scroll*/}
    <div>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <a href="./index.html" className="text-nowrap logo-img">
          <img src="../assets/images/logos/sG logo.(2).png " width={60} /><span><b>The Good School Guide</b></span>
        </a>
        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i className="ti ti-x fs-8" />
        </div>
      </div>
      <nav className="sidebar-nav scroll-sidebar" data-simplebar>
        <ul id="sidebarnav">
          <li className="sidebar-item">
            <a className="sidebar-link" href="./admin-index.html" aria-expanded="false">
              <span>
                <i className="ti ti-home" />
              </span>
              <span className="hide-menu">home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./admin-category.html" aria-expanded="false">
              <span>
                <i className="ti ti-category" />
              </span>
              <span className="hide-menu">Category</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./admin-city.html" aria-expanded="false">
              <span>
                <i className="ti ti-building" />
              </span>
              <span className="hide-menu">City</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./admin-schoolmgt.html" aria-expanded="false">
              <span>
                <i className="ti ti-school" />
              </span>
              <span className="hide-menu">school managment</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./admin-school-registration.html" aria-expanded="false">
              <span>
                <i className="ti ti-registered" />
              </span>
              <span className="hide-menu">School Registration</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./admin-fees-management.html" aria-expanded="false">
              <span>
                <i className="ti ti-report-money" />
              </span>
              <span className="hide-menu">fees managment</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./admin-my profile.html" aria-expanded="false">
              <span>
                <i className="ti ti-user" />
              </span>
              <span className="hide-menu">my profile</span>
            </a>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">AUTH</span>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./admin-changeps.html" aria-expanded="false">
              <span>
                <i className="ti ti-settings" />
              </span>
              <span className="hide-menu">changepassword</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="./admin-logout.html" aria-expanded="false">
              <span>
                <i className="ti ti-power" />
              </span>
              <span className="hide-menu">logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    {/* End Sidebar scroll*/}
  </aside>
  {/*  Sidebar End */}
  {/*  Main wrapper */}
  <div className="body-wrapper">
    {/*  Header Start */}
    <header className="app-header shadow">
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
            <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
              <i className="ti ti-menu-2" />
            </a>
          </li>
        </ul>
        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            <li className="nav-item dropdown">
              <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/images/profile/user-1.jpg" alt width={35} height={35} className="rounded-circle" />
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                <div className="message-body">
                  <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    {/*  Header End */}
    <div className="container-fluid">
      <div className="card shadow">
        <div className="card-header bg-light-primary">
          <div className="d-flex justify-content-between mt-3 ">
            <span className="fw-bolder px-4"><h4>Category</h4></span>
            <a href="admin-add-category.html" className="btn btn-primary ">add Category</a>
          </div>
        </div>
        <div className="card-body">
          {/* <h5 class="card-title fw-semibold mb-4"></h5> */}
          <table className="table table-striped table-bordered border-3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Detail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody clss="top-text">
              <tr>
                <td>1</td>
                <td>bhavnagar</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                  {/* <a href="admin-insert-city.html"><h4 class="text-primary d-inline"><i class="ti ti-arrow-autofit-content"></i></h4></a> */}
                  <a href="admin-edit-category.html" title="edit"><h4 className="text-primary d-inline"><i className="ti ti-pencil-plus" /></h4></a>
                  <a href="admin-delete-category.html" title="delete"><h4 className="text-primary d-inline"><i className="ti ti-trash" /></h4></a>
                  <a href="admin-view-category.html" title="view"><h4 className="text-primary d-inline"><i className="ti ti-eye" /></h4></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div class="table-responsive text-nowrap"> */}
        {/* </div> */}
      </div>
    </div>
  </div>
</div>
</div>
    );
}