import Header from "./Header";

export default function BoardingSchool() {
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
      <nav>
        <div className="mt-5">
          <h3>
            Boarding Schools in India
            <hr width="50%" />
          </h3>
        </div>
        <div className="my-3">
          <div className="card" style={{"margin-right":"300px"}}>
            <div className="card-body d-flex gap-2">
              <div>
                <img src="https://picsum.photos/200/200" className="img-fluid" alt />
              </div>
              <div>
                <div>
                  <h5>
                    Ryan International School
                  </h5>
                  <p>Vadodara</p>
                </div>
                <div className="mt-4 d-flex gap-5">
                  <p>
                    Classes Offered
                    <br />
                    <b>Nusrery - Class 12</b>
                  </p>
                  <p>
                    Monthly Fees - Nursery
                    <br />
                    <b>₹6.7K</b>
                  </p>
                  <p>
                    Board
                    <br />
                    <b>CBSE</b>
                  </p>
                  <p>
                    Student Faculty ratio
                    <br />
                    <b>30:1</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer" align="right">
              <button className="btn btn-outline-danger">View Details</button>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="card" style={{"margin-right":"300px"}}>
            <div className="card-body d-flex gap-2">
              <div>
                <img src="https://picsum.photos/200/201" className="img-fluid" alt />
              </div>
              <div>
                <div>
                  <h5>
                    Podar International School
                  </h5>
                  <p>Rajkot</p>
                </div>
                <div className="mt-4 d-flex gap-5">
                  <p>
                    Classes Offered
                    <br />
                    <b>Class 1 - Class 12</b>
                  </p>
                  <p>
                    Monthly Fees - 12
                    <br />
                    <b>₹25K</b>
                  </p>
                  <p>
                    Board
                    <br />
                    <b>IB</b>
                  </p>
                  <p>
                    Student Faculty ratio
                    <br />
                    <b>25:1</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer btn-outline-danger" align="right">
              <button className="btn btn-outline-danger">View Details</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>
    )
}