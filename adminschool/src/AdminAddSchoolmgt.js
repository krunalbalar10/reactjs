import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import getUrl from "./Adminapi";
import axios, { formToJSON } from "axios";
import showError, { showMessage } from "./toast-message";
export default function AdminAddSchoolmgt() {

  const [email, setEmail] = useState('');
  const [sname, setSname] = useState('');
  const [mobile  , setMobile] = useState('');
  const [contactno  , setContactNo] = useState('');
  const [address  , setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [cityid, setCityId] = useState('');
  const [status, setStatus] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [carpetArea, setCarpetArea] = useState('');
  const [noOfBuildings, setNoOfBuildings] = useState('');
  const [establishmentYear, setEstablishmentYear] = useState('');
  const [parkingFacility, setParkingFacility] = useState('');
  const [playground, setPlayground] = useState('');
  const [library, setLibrary] = useState('');
  const [canteen, setCanteen] = useState('');
  const [hostel, setHostel] = useState('');
  const [busFacility, setBusFacility] = useState('');
  const [auditorium, setAuditorium] = useState('');
  const [restroom, setRestroom] = useState('');
  const [stroage, setStroage] = useState('');
  const [acType, setAcType] = useState('');
  const [multimedia, setMultimedia] = useState('');
  const [awards, setAwards] = useState('');
  const [isGranted, setIsGranted] = useState('');
  const [trust, setTrust] = useState('');
  const [website, setWebsite] = useState('');
  const [coEducation, setCoEducation] = useState('');
  const [scout, setScout] = useState('');
  const [PT, setPT] = useState('');
  const [uniform, setUniform] = useState('');
  const [parentMeeting, setParentMeeting] = useState('');
  const [minimumParentEducation, setMinimumParentEducation] = useState('');
  const [music, setMusic] = useState('');
  const [dance, setDance] = useState('');
  const [gymnasium, setGymnasium] = useState('');
  const [computerLab, setComputerLab] = useState('');
  const [fireSafety, setFireSafety] = useState('');
  const [profileCompletionStatus, setProfileCompletionStatus] = useState('');
  const [accType, setAccType] = useState('');


  let navigator = useNavigate();

  let insertSchool = function (e) {
    e.preventDefault();
    
    let apiAddress = getUrl() + 'create_school.php';
    let form = new FormData();
    
  
    form.append('email', email);
  form.append('schoolname', sname);
  form.append('mobile', mobile);
  form.append('password', password);
  form.append('cityid', cityid);
  form.append('contactno', contactno);
  form.append('address', address);
  form.append('status', status);
  form.append('categoryid', categoryId);
  form.append('carpetarea', carpetArea);
  form.append('noofbuildings', noOfBuildings);
  form.append('establishmentyear', establishmentYear);
  form.append('parkingfacility', parkingFacility);
  form.append('playground', playground);
  form.append('library', library);
  form.append('canteen', canteen);
  form.append('hostel', hostel);
  form.append('busfacility', busFacility);
  form.append('auditorium', auditorium);
  form.append('restroom', restroom);
  form.append('stroage', stroage);
  form.append('actype', acType);
  form.append('multimedia', multimedia);
  form.append('awards', awards);
  form.append('isgranted', isGranted);
  form.append('trust', trust);
  form.append('website', website);
  form.append('coeducation', coEducation);
  form.append('scout', scout);
  form.append('PT', PT);
  form.append('uniform', uniform);
  form.append('parentmeeting', parentMeeting);
  form.append('minimumparenteducation', minimumParentEducation);
  form.append('music', music);
  form.append('dance', dance);
  form.append('gimnisum', gymnasium);
  form.append('computerlab', computerLab);
  form.append('firesafty', fireSafety);
  form.append('profilecompletionstatus', profileCompletionStatus);
  form.append('acctype', accType);
    console.log(form)
    axios({
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: form
    }).then((response) => {
      console.log(response);
      let error = response.data[0]['error']
      if (error !== 'no') {
        showError(error);
      }
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if (success === 'no') {
          showError(message);
        }
        else {
          showMessage(message);
          setTimeout(() => {
            navigator("/schoolmgt");
          }, 2000);
        }
      }
    })
  }

  return (
    <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        {/* Sidebar Start */}
        <AdminMenu />
        <ToastContainer />
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          {/*  Header Start */}
          <AdminHeader />
          {/*  Header End */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-between">
                <h4 className="fw-bold py-1 mb-1">school managment</h4>
                <Link to="/schoolmgt" className="btn btn-primary">back</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <h5 className="card-header bg-light-primary">add new schoolmgt</h5>
                  <div className="card-body">
                    <form onSubmit={insertSchool}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="schoolname" className="form-label">School Name</label>
                        <input type="text" onChange={(e) => setSname(e.target.value)} value={sname} className="form-control" id="inputtitle" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="number" className="form-label">Mobile Number</label>
                        <input type="number" onChange={(e) => setMobile(e.target.value)} value={mobile} className="form-control" id="number" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="number" className="form-label">Mobile Number</label>
                        <input type="number" onChange={(e) => setContactNo(e.target.value)} value={contactno} className="form-control" id="number" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="number" className="form-label">Mobile Number</label>
                        <input type="address" onChange={(e) => setAddress(e.target.value)} value={address} className="form-control" id="number" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="password" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="cityid" className="form-label">City ID</label>
                        <input type="text" onChange={(e) => setCityId(e.target.value)} value={cityid} className="form-control" id="cityid" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" onChange={(e) => setStatus(e.target.value)} value={status} className="form-control" id="status" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="categoryid" className="form-label">Category ID</label>
                        <input type="text" onChange={(e) => setCategoryId(e.target.value)} value={categoryId} className="form-control" id="categoryid" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="carpetarea" className="form-label">Carpet Area</label>
                        <input type="text" onChange={(e) => setCarpetArea(e.target.value)} value={carpetArea} className="form-control" id="carpetarea" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="noofbuildings" className="form-label">Number of Buildings</label>
                        <input type="text" onChange={(e) => setNoOfBuildings(e.target.value)} value={noOfBuildings} className="form-control" id="noofbuildings" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="establishmentyear" className="form-label">Establishment Year</label>
                        <input type="text" onChange={(e) => setEstablishmentYear(e.target.value)} value={establishmentYear} className="form-control" id="establishmentyear" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="parkingfacility" className="form-label">Parking Facility</label>
                        <input type="text" onChange={(e) => setParkingFacility(e.target.value)} value={parkingFacility} className="form-control" id="parkingfacility" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="playground" className="form-label">Playground</label>
                        <input type="text" onChange={(e) => setPlayground(e.target.value)} value={playground} className="form-control" id="playground" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="library" className="form-label">Library</label>
                        <input type="text" onChange={(e) => setLibrary(e.target.value)} value={library} className="form-control" id="library" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="canteen" className="form-label">Canteen</label>
                        <input type="text" onChange={(e) => setCanteen(e.target.value)} value={canteen} className="form-control" id="canteen" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="hostel" className="form-label">Hostel</label>
                        <input type="text" onChange={(e) => setHostel(e.target.value)} value={hostel} className="form-control" id="hostel" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="busfacility" className="form-label">Bus Facility</label>
                        <input type="text" onChange={(e) => setBusFacility(e.target.value)} value={busFacility} className="form-control" id="busfacility" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="auditorium" className="form-label">Auditorium</label>
                        <input type="text" onChange={(e) => setAuditorium(e.target.value)} value={auditorium} className="form-control" id="auditorium" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="restroom" className="form-label">Restroom</label>
                        <input type="text" onChange={(e) => setRestroom(e.target.value)} value={restroom} className="form-control" id="restroom" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="stroage" className="form-label">Stroage</label>
                        <input type="text" onChange={(e) => setStroage(e.target.value)} value={stroage} className="form-control" id="stroage" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="actype" className="form-label">AC Type</label>
                        <input type="text" onChange={(e) => setAcType(e.target.value)} value={acType} className="form-control" id="actype" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="multimedia" className="form-label">Multimedia</label>
                        <input type="text" onChange={(e) => setMultimedia(e.target.value)} value={multimedia} className="form-control" id="multimedia" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="awards" className="form-label">Awards</label>
                        <input type="text" onChange={(e) => setAwards(e.target.value)} value={awards} className="form-control" id="awards" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="isgranted" className="form-label">Is Granted</label>
                        <input type="text" onChange={(e) => setIsGranted(e.target.value)} value={isGranted} className="form-control" id="isgranted" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="trust" className="form-label">Trust</label>
                        <input type="text" onChange={(e) => setTrust(e.target.value)} value={trust} className="form-control" id="trust" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="website" className="form-label">Website</label>
                        <input type="text" onChange={(e) => setWebsite(e.target.value)} value={website} className="form-control" id="website" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="coeducation" className="form-label">Co-education</label>
                        <input type="text" onChange={(e) => setCoEducation(e.target.value)} value={coEducation} className="form-control" id="coeducation" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="scout" className="form-label">Scout</label>
                        <input type="text" onChange={(e) => setScout(e.target.value)} value={scout} className="form-control" id="scout" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="PT" className="form-label">PT</label>
                        <input type="text" onChange={(e) => setPT(e.target.value)} value={PT} className="form-control" id="PT" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="uniform" className="form-label">Uniform</label>
                        <input type="text" onChange={(e) => setUniform(e.target.value)} value={uniform} className="form-control" id="uniform" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="parentmeeting" className="form-label">Parent Meeting</label>
                        <input type="text" onChange={(e) => setParentMeeting(e.target.value)} value={parentMeeting} className="form-control" id="parentmeeting" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="minimumparenteducation" className="form-label">Minimum Parent Education</label>
                        <input type="text" onChange={(e) => setMinimumParentEducation(e.target.value)} value={minimumParentEducation} className="form-control" id="minimumparenteducation" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="music" className="form-label">Music</label>
                        <input type="text" onChange={(e) => setMusic(e.target.value)} value={music} className="form-control" id="music" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="dance" className="form-label">Dance</label>
                        <input type="text" onChange={(e) => setDance(e.target.value)} value={dance} className="form-control" id="dance" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="gymnasium" className="form-label">Gymnasium</label>
                        <input type="text" onChange={(e) => setGymnasium(e.target.value)} value={gymnasium} className="form-control" id="gymnasium" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="computerlab" className="form-label">Computer Lab</label>
                        <input type="text" onChange={(e) => setComputerLab(e.target.value)} value={computerLab} className="form-control" id="computerlab" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="firesafety" className="form-label">Fire Safety</label>
                        <input type="text" onChange={(e) => setFireSafety(e.target.value)} value={fireSafety} className="form-control" id="firesafety" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="profilecompletionstatus" className="form-label">Profile Completion Status</label>
                        <input type="text" onChange={(e) => setProfileCompletionStatus(e.target.value)} value={profileCompletionStatus} className="form-control" id="profilecompletionstatus" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="acctype" className="form-label">Account Type</label>
                        <input type="text" onChange={(e) => setAccType(e.target.value)} value={accType} className="form-control" id="acctype" required />
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">Save Change</button>
                        <button type="reset" className="btn btn-light-primary">Clear All</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}