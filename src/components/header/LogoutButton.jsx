import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authservice from "../../appwrite/auth";

function LogoutButton()
{
    const dispatch=useDispatch();
    function logoutHandler()
    {
       authservice.logOut().then((info)=>{
        if(info)
        {
            dispatch(logout());
        }
       }) 
    }
    return (
        <div>
           <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" onClick={()=>{logoutHandler()}}>Logout</button>
        </div>
    )
}

export default LogoutButton
