import { useEffect, useState } from "react";
//import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
const Task = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth()
    const [tasks , setTasks] = useState();
    console.log('tasks', tasks);
   
    //#####get localstorage
    useEffect(() => {
        //  right 
       // setTasks(JSON.parse(localStorage.getItem("tasks")));

        axiosPublic.get(`/task?email=${user?.email}`)
        .then(data => {
            console.log(data.data);
            setTasks(data.data)
        })
            
    },[axiosPublic,user])
    return (
        <DndProvider backend={HTML5Backend}>
         <Toaster></Toaster>
         <div className="bg-blue-100 min-h-[100vh] flex flex-col  items-center  pt-20 gap-10">
            {/* right */}
          {/* <CreateTask tasks={tasks} setTasks={setTasks}
           
         ></CreateTask> */}
          <h2 className="text-3xl font-semibold">Welcome,<span className="text-orange-600">{user.displayName}</span> . Here Your Daily Task</h2>
         <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
        </div>
        </DndProvider>
       
    );
};

export default Task;
