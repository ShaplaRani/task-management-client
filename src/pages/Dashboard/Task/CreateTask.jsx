// import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import { v4 as uuidv4 } from 'uuid';

// const CreateTask = ({ tasks, setTasks }) => {
//   const [task, setTask] = useState({
//     id: '',
//     name: "",
//     status: "todo"
//   });

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     setTasks(storedTasks);
//   }, [setTasks]); // Include setTasks in the dependency array

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.name.length < 3) return toast.error("A task must have more than 3 characters");
//     if (task.name.length > 100) return toast.error("A task must not be more than 100 characters");

//     const updatedTasks = [...tasks, task];
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));

//     setTasks(updatedTasks);
//     toast.success('Task Created');

//     setTask({
//       id: '',
//       name: "",
//       status: "todo"
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex">
//         <input
//           type="text"
//           placeholder="Type here"
//           className="input input-bordered w-full max-w-xs"
//           value={task.name}
//           onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
//         />
//         <button className="btn btn-primary">Create</button>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;





import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({tasks, setTasks}) => {
    const [task, setTask] = useState({
        id:'',
        name:"",
        status:"todo"
    })
    console.log(task);
    const handleSubmit = (e) => {
         e.preventDefault();
         if(task.name.length < 3 ) return  toast.error("A task must have more then 3 character") 
         if(task.name.length > 100 ) return  toast.error("A task must not be more then 100 character") 
        //  setTasks((prev) => {
        //     const list = [...prev, task];
        //     localStorage.setItem("tasks", JSON.stringify(list));
        //     return list
        //  })
        setTasks((prev) => {
            const list = Array.isArray(prev) ? [...prev, task] : [task]; // Ensure prev is an array
            //lacalStorage
            localStorage.setItem("tasks", JSON.stringify(list));
            return list;
        });
         toast.success('Task Create')
         setTask({
            id:'',
           name:"",
           status:"todo"
         })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={task.name} 
            onChange={(e) => setTask({...task,id: uuidv4(), name:e.target.value})}/>
             <button className="btn btn-primary">create</button> 
            </form>
        </div>
    );
};

export default CreateTask;