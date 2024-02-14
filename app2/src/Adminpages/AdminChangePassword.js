export default function AdminChangePassword() {
return(
  <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu />
    {/*  Sidebar End */}
  {/* Main wrapper */}
  <div className="body-wrapper">
    {/* Header Start */}
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
            <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
              <i className="ti ti-menu-2" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    {/* Header End */}
    <div className="container-fluid">
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between text-bg-primary">
          <h3 className="mb-1 text-white">Change Password</h3>
          {/* <a href="" class="btn btn-light"></a> */}
        </div>
        <div className="card-body ">
          <form>
            <div className="mb-3">
              <label htmlFor="currentPassword" className="form-label">Current Password</label>
              <input type="password" className="form-control" id="currentPassword" name="currentPassword" required />
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input type="password" className="form-control" id="newPassword" name="newPassword" required />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
              <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">Save changes</button>&nbsp;
              <button type="reset" className="btn btn-dark">Clear all</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
);
}