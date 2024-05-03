import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import { useEffect, useState } from "react";
import getUrl from "./Adminapi";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
import AdminHeader from "./adminHeader";
export default function AdminAddFeesManage(){

    let [schoolid , setSchoolId] = useState('');
    let [title , setTitle] = useState('');
    let [amount , setAmount] = useState('');
    let [schools , setSchool] = useState([]);
    let [SelectedSchooldId,setSelectedSchooldId] = useState();
    let navigator = useNavigate();
    useEffect(() => {
      let apiAddress = getUrl() + "read_school_school.php";
      axios({
          method:'get',
          url:apiAddress,
          responseType:'json'
      }).then((response) => {
          console.log(response);
          setSchool(response.data[2]);
      });
    },[]);
    let insertFees = function(e){
      
       e.preventDefault();
       console.log(schoolid , title , amount);
        let apiAddress = getUrl() + 'create_school_fee.php';

        let form = new FormData();
        
        form.append('schoolid' , SelectedSchooldId);
        form.append('title' , title);
        form.append('amount' , amount);
        console.log(form)
        axios({
          method: 'post',
          responseType: 'json',
          data: form,
          url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error']
            if(error !== 'no')
            {
              showError(error)
            }
            else
            {
              let success = response.data[1]['success']
              let message = response.data[2]['message']
              if (success === 'no') {
                showError(message);
              }
              else
              {
                showMessage(message)
                setTimeout(() => {
                  navigator("/fees");
                } , 2000)
              }
            }
        }).catch((error) => {
          if (error.code === 'ERR_NETWORK') {
            NetworkError();
          }
        })
    
    }
   
    return(
        <div className="page-wrapper bg-light-indigo" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
           
             
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        {/* Sidebar Start */}
        <AdminMenu />
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          {/*  Header Start */}
          <AdminHeader/>
          {/*  Header End */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-between">
                <h4 className="fw-bold py-1 mb-1">fees management</h4>
                <Link to="/fees" className="btn btn-primary">back</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <h5 className="card-header bg-light-primary">add new fees</h5>
                  <div className="card-body">
                    <form onSubmit={insertFees}>
                     
                      <div className="mb-3">
                        <select className="form-select" required onChange={(e) => setSelectedSchooldId(e.target.value)}>
                            <option value="">Select school</option>
                            {schools.map(function(item) {
                                return (<option value={item.id}>{item.schoolname}</option>)
                            })}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputtitle" className="form-label">title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" id="inputtitle" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="number" className="form-label">amount</label>
                        <input type="text" onChange={(e) => setAmount(e.target.value)} value={amount} className="form-control" id="number" required />
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