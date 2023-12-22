

import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';
import useAuth from "../hooks/useAuth";
const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    console.log('location in the private route',location);
    if(loading){
        return <div className="h-[100vh] text-center w-full">
            <span className="loading loading-spinner loading-lg "></span></div>
        
    }
    if(user){
        return children
    }
    return <Navigate state = {location.pathname} to="/login"></Navigate>
    
}
PrivateRoute.propTypes = {
    children: PropTypes.node
  };
export default PrivateRoute;




