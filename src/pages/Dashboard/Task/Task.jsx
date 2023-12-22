import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const Task = () => {
    const axiosPublic = useAxiosPublic();

    const [tasks , setTasks] = useState();
    console.log('tasks', tasks);
    //get localstorage
    useEffect(() => {
        //setTasks(JSON.parse(localStorage.getItem("tasks")));
        axiosPublic.get('/')
            .then(data => {
                console.log(data.data);
                if(data.data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your job has been deleted.",
                icon: "success"
              });
              const remaining = products.filter(product => product._id !== id);
                    setProduct(remaining);    
                }
            })

    },[])
    return (
        <DndProvider backend={HTML5Backend}>
         <Toaster></Toaster>
         <div className="bg-blue-100 flex flex-col  items-center  pt-32 gap-10">
          <CreateTask tasks={tasks} setTasks={setTasks}
           
         ></CreateTask>
         <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
        </div>
        </DndProvider>
       
    );
};

export default Task;
