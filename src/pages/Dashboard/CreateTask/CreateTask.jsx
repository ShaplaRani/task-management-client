import { Helmet } from "react-helmet-async";
import { MdOutlineAddTask } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CreateTask = () => {
    const { user } = useAuth()
    console.log(user);
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();

   const  onSubmit = async(data) => {
      console.log(data);
       const taskInfo = {
        email:data?.email,
        title:data?.title,
        priority:data?.priority,
        description:data?.description,
        deadline:data?.deadline,
        status:"todo",
        photo:user.photoURL,
    };
       console.log(taskInfo);
    //    fetch('https://task-management-server-roan-psi.vercel.app/create-task', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body:JSON.stringify(taskInfo)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         reset();
    //         if (data.insertedId) {
    //               Swal.fire({
                    
    //                 title: 'Success!',
    //                 text: 'Job Added Successfully',
    //                 icon: 'success',
    //                 confirmButtonText: 'Cool'
    //             })
               
    //         }
    //     })

    //    axiosPublic.post('/create-task', data)
    //    .then(data => {
    //     console.log(data);
    //    })


       const surveyRes =  await axiosPublic.post('/task/create-task',taskInfo);
           console.log(surveyRes.data)
           if(surveyRes.data.insertedId){
               // show success popup
               reset();
               Swal.fire({
                   icon: 'success',
                   title: `${data.title} is added to the task.`,
                  
                  confirmButtonText: 'Cool'
                 });
           }
    }

    // axiosPublic.post('/api/someEndpoint')
    // .then(response => {
    //   // handle success
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  

    return (
        <div className="overflow-x-hidden bg-blue-100 pb-20">

            <Helmet>
                <title>Dashboard | create task</title>
            </Helmet>
            <div className="text-center mb-7 mt-10 ">
                <p className="text-3xl font-bold text-orange-600 flex justify-center mb-3"><MdOutlineAddTask /></p>
                <h2 className="text-3xl text-orange-500 font-semibold">Create Task</h2>
            </div>

            <div className="bg-gray-100 m-10 py-14 rounded-lg px-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body  max-auto   space-y-6">

                    <div className="md:flex gap-4">
                        {/* user email */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-2xl font-bold">User Email:</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Your Email"
                                defaultValue={user?.email} name="email" className="input input-bordered"
                                 readOnly />
                        </div>

                        {/* title */}
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-2xl font-bold">Title:</span>
                            </label>
                            <input type="text" {...register("title", { required: true })} placeholder="Survey Title" name="title" className="input input-bordered" />
                        </div>
                    </div>


                    {/* category */}
                    {/* <div className="form-control ">
                        <label className="label">
                        <span className="label-text text-2xl font-bold">Category:</span>
                       </label>
                        <input type="text" placeholder="Survey Category" name="category" className="input input-bordered" required />
                    </div> */}

                     <div  className="md:flex gap-4">

                        {/* deadline */}
                    <div className="form-control flex-1 ">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Deadline:</span>
                        </label>
                        <input type="date" {...register("deadline", { required: true })} placeholder="Please date" name="deadline" className="input input-bordered" required />
                    </div>
                    {/* priority */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Priority:</span>
                        </label>
                        <select {...register("priority", { required: true })} name="priority" id="" className="input input-bordered">
                            <option value="High">High</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                     </div>


                    
                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Description</span>
                        </label>
                        <textarea {...register("description", { required: true })} name="description" id="" cols="30" rows="10" placeholder="Your Message"
                            className="input-bordered p-4 input h-40"></textarea>

                    </div>


                    <div className=" ">
                        <button className="w-full text-white mt-6 py-2 text-center rounded-lg text-xl font-semibold bg-emerald-400">
                            Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;