import { Link } from "react-router-dom";
import Header from "./Header";

export default function ExploreSchool() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {/* navbar heading */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Header />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle border-bottom" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>Select City
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><span className="dropdown-item">Bhavnagar</span></li>
                    <li><span className="dropdown-item">Ahemedabad</span></li>
                    <li><span className="dropdown-item">Vadodara</span></li>
                    <li><span className="dropdown-item">Rajkot</span></li>
                    <li><span className="dropdown-item">Junagath</span></li>
                    <li><span className="dropdown-item">Kutch</span></li>
                  </ul>
                </li>
                <li className="nav-item ms-2 border-bottom">
                  <Link className="nav-link" to="/exploreschool">Explore Schools</Link>
                </li>
                <li className="nav-item ms-2 border-bottom">
                  <Link className="nav-link" to="/boardingschool">Boarding Schools</Link>
                </li>
                <li className="nav-item ms-2 border-bottom">
                  <Link className="nav-link" to="/compareschool">Compare Schools</Link>
                </li>
              </ul>
            </div>
            <div className="d-flex gap-1">
              <form className="d-flex justify-content-center me-2">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <button className="btn btn-primary">
                <Link to="/register"><span className="text-white">Register</span></Link>
              </button>
              <button className="btn btn-primary">
                <Link to="/"><span className="text-white">Login</span></Link>
              </button>
            </div>
          </nav>
          {/* navbar body */}
          <nav>
            <div className="mt-5">
              <h3>
                Schools in Vadodara
                <hr width="50%" />
              </h3>
            </div>
            <div className="d-flex gap-5">
              <button className="btn btn-outline-success">All School</button>
              <button className="btn btn-outline-success">Play School</button>
              <button className="btn btn-outline-success">Boarding School</button>
              <button className="btn btn-outline-success">Day School</button>
            </div>
            <div className="my-3">
              <div className="card" style={{ "margin-right": "300px" }}>
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
              <div className="card" style={{ "margin-right": "300px" }}>
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