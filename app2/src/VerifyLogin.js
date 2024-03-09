import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { COOKIENAME } from "./Adminapi";
import { useEffect } from "react";

export default function VerifyLogin () {
    let navigate = useNavigate();
    let RedirectToLogin = function() {
        navigate("/"); // send user to login screen
    }

    let [cookies , setCookies , removeCookies] = useCookies(COOKIENAME);
     // console.log(cookies['id']);
    //check whether cookies has id or not, if id is not in cookies it means user has yet not logged in
    useEffect(() => {
        if(cookies['id'] === undefined){
            RedirectToLogin();
        }
    })
}