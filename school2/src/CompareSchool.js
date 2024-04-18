import { Link } from "react-router-dom";
import Header from "./Header";


export default function CompareSchool() {
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
                Compare Schools
                <hr width="50%" />
              </h3>
            </div>
            <div className="d-flex gap-2">
              <div className="card w-50">
                <div className="card-body">
                  <form action className="d-flex">
                    <select className="form-select w-50">
                      <option selected>Select City</option>
                      <option value="delhi">Delhi</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="kolkata">Kolkata</option>
                      <option value="chennai">Chennai</option>
                      <option value="bangalore">Bangalore</option>
                    </select>
                    <input type="text" width="100%" className="form-control" placeholder="Search school" />
                  </form>
                </div>
              </div>
              <div className="card w-50">
                <div className="card-body">
                  <form action className="d-flex">
                    <select className="form-select w-50">
                      <option selected>Select City</option>
                      <option value="delhi">Delhi</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="kolkata">Kolkata</option>
                      <option value="chennai">Chennai</option>
                      <option value="bangalore">Bangalore</option>
                    </select>
                    <input type="text" width="100%" className="form-control" placeholder="Search school" />
                  </form>
                </div>
              </div>
            </div>
            <div align="center">
              <button type="button" className="btn btn-outline-danger my-3">Compare</button>
            </div>
          </nav>
          {/* compare table */}
          <nav className="my-4">
            <div>
            </div><div>
            </div><div>
            </div><div>
            </div><div>
            </div><div>
            </div><div>
            </div><div>
            </div><div>
            </div><div>
            </div><div>
            </div><div>
            </div><table className="table table-bordered">
              <thead>
                <tr>
                </tr><tr align="center">
                  <th />
                  <th>School Name 1</th>
                  <th>School Name 2</th>
                </tr>
                <tr>
                  <th colSpan={3}>
                    School Type
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Owenrship</td>
                  <td>Private1</td>
                  <td>private2</td>
                </tr>
                <tr>
                  <td>School Format</td>
                  <td>Day School</td>
                  <td>Boarding School</td>
                </tr>
                <tr>
                  <td>Co-Ed Status</td>
                  <td>Co-Education</td>
                  <td>Co-Education</td>
                </tr>
                <tr>
                  <td>Verified by school</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={3}>
                    Academics
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Board</td>
                  <td>State Board</td>
                  <td>CBSE</td>
                </tr>
                <tr>
                  <td>Langauge Of Instruction</td>
                  <td>English</td>
                  <td>English</td>
                </tr>
                <tr>
                  <td>Academic Session</td>
                  <td>June to May</td>
                  <td>April to March</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={3}>
                    Fee Structure
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Cost of new admission</td>
                  <td>₹40,344</td>
                  <td>₹700000</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={3}>
                    Campus and Facility
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Campus Type</td>
                  <td>Urban</td>
                  <td>Rural</td>
                </tr>
                <tr>
                  <td>Campus Size</td>
                  <td>1.5 Acres</td>
                  <td>1 Acres</td>
                </tr>
                <tr>
                  <td>Total Facilites</td>
                  <td>13</td>
                  <td>19</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={3}>
                    Quality of Education
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Years of Establishment</td>
                  <td>1986</td>
                  <td>2005</td>
                </tr>
                <tr>
                  <td>Student Faculty Ratio</td>
                  <td>60:1</td>
                  <td>45:1</td>
                </tr>
                <tr>
                  <td>Total Faculty</td>
                  <td>67</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td>Awards</td>
                  <td>8</td>
                  <td>5</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={3}>
                    Admission Criteria and Eligibility
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Academic Session</td>
                  <td>2024-2025</td>
                  <td>2024-2025</td>
                </tr>
                <tr>
                  <td>Classes Offered</td>
                  <td>Nursery - Class 10</td>
                  <td>Class 1 - Class 12</td>
                </tr>
                <tr>
                  <td>Age Eligibility</td>
                  <td>3 Years And Above</td>
                  <td>3 Years and 5 Months Above</td>
                </tr>
                <tr>
                  <td>Marks Eligibility</td>
                  <td>NA</td>
                  <td>NA</td>
                </tr>
                <tr>
                  <td>Written test</td>
                  <td>No</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Student Interaction</td>
                  <td>No</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Parent Interaction</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Documetns Required</td>
                  <td>
                    <select className="form-select w-50">
                      <option selected>Document List</option>
                      <option value={1}>Birth Certificate</option>
                      <option value={2}>Photograph Child</option>
                      <option value={3}>Aadhar Card - Parents</option>
                    </select>
                  </td>
                  <td>
                    <select className="form-select w-50">
                      <option selected>Document List</option>
                      <option value={1}>Birth Certificate</option>
                      <option value={2}>Photograph Child</option>
                      <option value={3}>Aadhar Card - Parents</option>
                      <option value={4}>Pan Card - Parents</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </nav>
        </div>
      </div>
    </div>
  )
}