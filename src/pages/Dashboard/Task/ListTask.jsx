import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import toast from "react-hot-toast";
import { useDrag, useDrop } from "react-dnd";

const ListTask = ({tasks, setTasks}) => {
    const [todos, setTodos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [complete, setComplete] = useState([])

    useEffect(() => {
        const fTodos = tasks?.filter((task) => task.status === "todo");
        const fInProgress = tasks?.filter((task) => task.status === "inprogress");
        const fcomplete = tasks?.filter((task) => task.status === "complete");
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
        drop:(item) =>  addItemToSection(item.id),
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
    const addItemToSection = (id) => {
        setTasks((prev) => {
          const mTasks = prev.map((t) => {
            if(t.id === id) {
                return {...t,status:status}
            }
            return t;
          })
        //   local all data reset
        localStorage.setItem("tasks", JSON.stringify(mTasks));
        toast('Task Status')
            return mTasks;
        });
    };
    
    return (
        <div ref={drop} className={`w-64 rounded-md p-2 ${isOver? "bg-slate-200": ""}`}>
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


const Header = ({text, bg, count}) => {
    return(
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
            {text}
            <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">{count}</div>
        </div>  
          )
}

const Task = ({task, tasks, setTasks}) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type:"task" ,
        item:{id:task.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      console.log(isDragging);
    const handleRemove =(id) => {
           console.log(id);
           const fTasks =  tasks.filter(task => task.id !== id)
           //local all reset
           localStorage.setItem("tasks",JSON.stringify(fTasks))
           setTasks(fTasks)
           toast("Task Remove")
    }
   return(
    <div ref={drag} className={`${isDragging?"opacity-25":"opacity-100"} relative p-4 mt-8 shadow-md rounded-md cursor-grab`}>
        <p>{task?.name}</p>
        <div className="flex gap-3 justify-end">
        <button className="   text-slate-400"><FaRegEdit /></button>
        <button className="   text-slate-400" onClick={() => handleRemove(task?.id)}><CiCircleMinus/></button>
        </div>
    </div>
   )
}