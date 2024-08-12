import { useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import UsersDashboard from "./UsersDashboard";

const Main = function() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    

    function login() {
        setLoggedIn(true);
    }
    function logout() {
        setLoggedIn(false);
    }
    return (

     <div>
           {
            (isLoggedIn)? <UsersDashboard logout={logout}></UsersDashboard> : <Login log={login}></Login>
           }
         
     </div>
    )
}

export default Main;