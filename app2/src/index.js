import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRoutes , Routes , Route, BrowserRouter} from 'react-router-dom';
let Home = () => <div><h1>Home Page</h1></div>
let Aboutus = () => <div><h1>About Us Page</h1></div>
let Contact = () => <div><h1>Contact Page</h1></div>
let PageNotFound = () =>  <div><h1> oops, no such page exists.  </h1> <hr/> 404 - error</div>;
function App (){
  return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


