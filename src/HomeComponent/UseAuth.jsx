import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const UseAuth = () => {
    const all = useContext(AuthContext)
 console.log(all)
    return all;
};

export default UseAuth;