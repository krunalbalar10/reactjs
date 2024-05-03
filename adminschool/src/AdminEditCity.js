import { Link, useNavigate, useParams } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./adminHeader";
import { useEffect, useState } from "react";
import getUrl from "./Adminapi";
import axios from "axios";
import showError, { showMessage ,NetworkError } from "./toast-message";
export default function AdminEditCity(){

    let {cityid} = useParams(); 

    let [name , setName] = useState('');
    let [id , setId] = useState('');
    let [pincode , setPincode] = useState('');

    let navigator = useNavigate();

    let updateCity = function(e){
      e.preventDefault();
      let apiAddress = getUrl() + 'update_school_city.php';

      let form = new FormData();

      form.append('id' , id)
      form.append('name' , name)
      form.append('pincode' , pincode)
      console.log(form);

      axios({
        method: 'post',
        responseType: 'json',
        url: apiAddress,
        data: form
      }).then((response) => {
        console.log(response);
        let error = response.data[0]['error']
        if(error !== 'no')
        {
          showError(error);
        }
        else
        {
          let success = response.data[1]['success']
          let message = response.data[2]['message']
         if(success === 'no')
         {
          showError(message);
         }
         else
         {
            showMessage(message)
            setTimeout(() => {
              navigator("/city");
            } , 2000)
         }
        }
      })
    }

    useEffect(() => {
      let apiAddress = getUrl() + 'read_school_city.php?id=' + cityid;
      console.log(apiAddress);
      axios({
        method: 'get',
        url: apiAddress,
        responseType: 'json'
      }).then((response) => {
        console.log(response)
        let error = response.data[0]['error']
        if(error !== 'no')
        {
          showError(error)
        }
        else if (response.data[1]['total'] === 0) {
          showError("No City Found");
        }
        else
        {
          setId(response.data[2]['data']['id'])
          setName(response.data[2]['data']['name'])
          setPincode(response.data[2]['data']['pincode'])
        }
        
      })
    } , [])
    return(
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
           
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <AdminMenu />
       
  <div className="body-wrapper">
    {/*  Header Start */}
    <AdminHeader/>
    {/*  Header End */}
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-between">
          <h4 className="fw-bold py-1 mb-1">city</h4>
          <Link to="/city" className="btn btn-primary">back</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <h5 className="card-header bg-light-primary">edit city</h5>
            <div className="card-body">
              <form onSubmit={updateCity}>
              <div className="mb-3">
                  <label htmlFor="id" className="form-label">edit ID</label>
                  <input type="text" onChange={(e) => setId(e.target.value)} value={id} className="form-control" id="inputtitle" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputtitle" className="form-label">edit name</label>
                  <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="inputtitle" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">edit pincode</label>
                  <input type="text" onChange={(e) => setPincode(e.target.value)} value={pincode} className="form-control" id="number" required />
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary">save change</button>
                  <button type="reset" className="btn btn-light-primary">clear all</button>
                </div>
              </form></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
}