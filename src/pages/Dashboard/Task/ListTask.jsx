import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import toast from "react-hot-toast";
import { useDrag, useDrop } from "react-dnd";
import Swal from "sweetalert2";

import axios from "axios";
import { Link } from "react-router-dom";



const ListTask = ({tasks, setTasks}) => {
    //const axiosPublic = useAxiosPublic();
    // const axiosPublic = useAxiosPublic();
    const [todos, setTodos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [complete, setComplete] = useState([])
    

    useEffect(() => {
        const fTodos = tasks?.filter((task) => task?.status === "todo");
        const fInProgress = tasks?.filter((task) => task?.status === "inprogress");
        const fcomplete = tasks?.filter((task) => task?.status === "complete");
        setTodos(fTodos);
        setInProgress(fInProgress);
        setComplete(fcomplete);

    },[tasks])
    //changed complete
    // closed => complete
    // setComplete => setComplete
    const statuses = ["todo", "inprogress", "complete"];
    return (
        <div className="flex gap-16">
            {
                statuses.map((status, index) => (
                  <Section key={index} 
                   status={status}
                   tasks={tasks} 
                   setTasks={setTasks}
                    todos={todos}
                   inprogress={inProgress} 
                   complete={complete}
                  ></Section>
                ))
            }
            
        </div>
    );
};

export default ListTask;

const Section = ({status,tasks,setTasks,todos,inprogress,complete}) => {
    const [{ isOver}, drop] = useDrop(() => ({
        accept:"task" ,
        drop:(item) =>  addItemToSection(item._id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
      }))

    let text = "Todo";
    let bg = "bg-slate-500";
    let tasksToMap = todos;
    if(status === "inprogress"){
        text= "In Progress"
        bg="bg-purple-500"
        tasksToMap = inprogress
    }
    if(status === "complete"){
        text= "complete"
        bg="bg-green-500"
        tasksToMap = complete
    }
    // const addItemToSection = (id) => {
    //    setTasks(prev => {
    //     console('prev', prev)
    //     return prev
    //    })
    // }
    //drop and 
    const addItemToSection = (id) => {
        setTasks((prev) => {
          const mTasks = prev.map((t) => {
            if(t._id === id) {
                return {...t,status:status}
            }
            return t;
          })
        //   local all data reset
       // localStorage.setItem("tasks", JSON.stringify(mTasks));
        axios.post('https://task-management-server-roan-psi.vercel.app/all-task',mTasks)
        .then(data => {
            console.log(data.data);
        })
        toast('Task Status  change')
            return mTasks;
        });
    };
    
    return (
        <div ref={drop} className={`w-96 bg-gray-200 border  pb-4 border-emerald-600 rounded-md  ${isOver? "bg-emerald-200": ""}`}>
            <Header text={text} bg={bg} count={tasksToMap?.length}></Header> 
            {
                tasksToMap?.length > 0 &&  tasksToMap.map((task, index) => <Task key={index}
                 task={task}
                 tasks={tasks}
                 setTasks={setTasks}
                 ></Task>)
            }
        </div>
    )
}


const Header = ({text, bg}) => {
    return(
        <div className={`${bg} flex items-center justify-center h-14 pl-4 rounded-md uppercase text-sm text-white`}>
            {text}
            {/* <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">{count}</div> */}
        </div>  
          )
}

const Task = ({task, tasks, setTasks}) => {
     //aca
    const [{ isDragging }, drag] = useDrag(() => ({
        type:"task" ,
        item:{_id:task._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      console.log(isDragging);
    const handleRemove =(id) => {
           console.log(id);
        //    task._id
           const fTasks =  tasks.filter(task => task._id !== id)
           //local all reset
           //localStorage.setItem("tasks",JSON.stringify(fTasks))
             
           Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                   axios.delete(`https://task-management-server-roan-psi.vercel.app/task/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            // refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                         setTasks(fTasks)
                        }
                    })
            }
        });


           
          // toast("Task Remove")
    }
    //task design
    console.log("task", task);
   return(
    <div ref={drag} className={`${isDragging?"opacity-25":"opacity-100"} relative bg-white mx-4 p-4 mt-8 shadow-md rounded-md cursor-grab`}>
         <button className="btn bg-emerald-600 text-white">{task?.priority} Priority </button>
        <p className="text-2xl font-semibold">{task?.title}</p>
        <p className="text-base font-base">{task.description}</p>
       
        {/* {
                        task.description.length > 40 ? <p 
                        className="text-base font-semibold  ">
                         {task.description.slice(0, 40)}.....
                        </p> :
                         <p>{task.description}</p>
        } */}
        <div className="flex gap-3 justify-between items-center">
          <img className="w-10 " src={task.photo} alt="" />  
        <div>
            {/* to={`/surveyDetails/${_id}`} */}
        <Link to ={`/dashboard/update/${task?._id}`}><button className=" text-2xl  text-orange-400"><FaRegEdit /></button></Link>
        {/* task?.id  */}
        <button className=" text-2xl ml-2  text-red-500" onClick={() => handleRemove(task?._id)}><CiCircleMinus/></button>
        </div>
        </div>
    </div>
   )
}