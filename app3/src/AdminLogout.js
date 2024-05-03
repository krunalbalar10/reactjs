import { useNavigate } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";
import { useCookies } from "react-cookie";
import { COOKIENAME } from "./Adminapi";

export default function AdminLogout () {

        VerifyLogin();
        let navigate = useNavigate();

        let [cookies , setCookies , removeCookies] = useCookies(COOKIENAME); // useCookies(['theeasylearn']);
        removeCookies('id');
        navigate("/");
        
        return(
            <>
            </>
        );

}