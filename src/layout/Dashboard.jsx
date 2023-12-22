// import {  FaHome,  FaUsers, FaUtensils } from "react-icons/fa";
// import { Link, NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useSurveyor from "../hooks/useSurveyor";
// import { FcSurvey } from "react-icons/fc";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FcSerialTasks } from "react-icons/fc";



const Dashboard = () => {
    const { user} = useAuth();
    // const axiosSecure= useAxiosSecure();

    // const { data: surveys = [] } = useQuery({
    //     queryKey: ['surveys'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/survey');
    //         console.log(res.data);
    //         return res.data;
    //     }
    // })
    // const [isAdmin] = useAdmin();
    // const [isSurveyor] = useSurveyor();
    //const isAdmin = true
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                 <div className="mt-10 text-center">
                       <img className="w-8 h-8 mx-auto rounded-full mb-2" src={user.photoURL} alt="" />
                        <p className="text-lg font-medium mr-3">{user.displayName}</p>
                 </div>
                <ul className="menu p-4">
                    <li className="text-lg  font-semibold mb-2">
                        <NavLink to="/dashboard/addTask">
                        <FcSerialTasks/>  
                        Task Creation
                        </NavLink>
                    </li>
                    <li className="text-lg  font-semibold mb-2">
                        <NavLink to="/dashboard/task">
                        <FcSerialTasks/>  
                           Task 
                        </NavLink>
                    </li>
                    {/* {
                        isAdmin && <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Manage Users </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/pro-user">
                                    <FaUsers></FaUsers>
                                    Pro-User History </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/survey">
                                    <FcSurvey></FcSurvey>
                                    Survey </NavLink>
                            </li>

                        </>
                    }
                    {
                        isSurveyor && <>
                            <li>
                                <NavLink to="/dashboard/addSurvey">
                                    <FaUtensils></FaUtensils>
                                    Survey Creation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/mySurvey">
                                    <FcSurvey></FcSurvey>
                                    My Surveys</NavLink>
                            </li>

                        </>
                    } */}

                    {/* shared nav links */}
                    {/* <div className="divider"></div>
                    
                    <details className="dropdown">
                        <summary className="m-1 btn btn-primary">  <FcSurvey></FcSurvey>Survey Responsive</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            {
                                surveys.map(survey => 
                                <Link to={`/dashboard/surveyResponsive/${survey.title}`} key={survey._id}> <li ><a>{survey.title}</a></li></Link> )
                            }
                            
                        </ul>
                    </details> */}
                    <li className="border rounded-lg text-xl  font-semibold">
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;







// const Dashboard = () => {
//     return (
//         <div>
//             <h2>hashboard</h2>
//         </div>
//     );
// };

// export default Dashboard;