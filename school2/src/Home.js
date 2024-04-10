import Header from "./Header";

export default function Home() {
    return(
        <div className="container-fluid">
  <div className="row">
    <div className="col-12">
      {/* navbar heading */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Header/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle border-bottom" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="material-symbols-outlined">
                  location_on
                </span>Select City
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Bhavnagar</a></li>
                <li><a className="dropdown-item" href="#">Ahemedabad</a></li>
                <li><a className="dropdown-item" href="#">Vadodara</a></li>
                <li><a className="dropdown-item" href="#">Rajkot</a></li>
                <li><a className="dropdown-item" href="#">Junagath</a></li>
                <li><a className="dropdown-item" href="#">Kutch</a></li>
              </ul>
            </li>
            <li className="nav-item ms-2 border-bottom">
              <a className="nav-link" href="#">Explore Schools</a>
            </li>
            <li className="nav-item ms-2 border-bottom">
              <a className="nav-link" href="#">Boarding Schools</a>
            </li>
            <li className="nav-item ms-2 border-bottom">
              <a className="nav-link" href="#">Compare Schools</a>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-1">
          <form className="d-flex justify-content-center me-2">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <button className="btn btn-primary">
            Register
          </button>
          <button className="btn btn-primary">
            Login
          </button>
        </div>
      </nav>
      {/* navbar body */}
      <nav style={{"margin-top":"130px"}}>
        <div className="d-flex justify-content-center mt-2">
          <h2>
            The School Admission Plateform
          </h2>
        </div>
        <div className="mb-2" align="center">
          <div className="card w-50 border-radius mx-3">
            <div className="card-body">
              <div>
                <span className="me-4 border-bottom">Day School</span>
                <span className="me-4 border-bottom">Boarding School</span>
                <span className="me-4 border-bottom">Day Boarding School</span>
                <span className="me-4 border-bottom">Play School</span>
              </div>
              <div>
                <form className="d-flex justify-content-center mt-4">
                  <input className="form-control" type="search" placeholder="Search School Category" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>   
    </div>
  </div>
</div>
    )
}