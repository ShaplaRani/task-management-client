import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Update = () => {
    const data = useLoaderData();
    const axiosPublic = useAxiosPublic()
    console.log(data);
    const {title, description,priority,deadline} = data;
    const handleUpdate = (e) => {
          e.preventDefault();
          const form = e.target;
          const title = form.title.value;
          const description =form.description.value
          const priority = form.priority.value
          const deadline = form.deadline.value
          const dataInfo = {
            title,
            description,
            priority,
            deadline
          }
          console.log(dataInfo);
          axiosPublic.put(`/update-task/${data._id}`,dataInfo)
          .then(data => {
              console.log(data.data);
              if (data?.data?.modifiedCount > 0) {
                    Swal.fire({
                      title: 'Success!',
                      text: 'Task Update Successfully',
                      icon: 'success',
                      confirmButtonText: 'Cool'
                  })
              }
          })
    }
   return(
    <div className="overflow-x-hidden bg-blue-100 pb-20">

           
            <div className="text-center mb-7 mt-10 ">
                
                <h2 className="text-3xl text-orange-500 font-semibold">Update Task</h2>
            </div>

            <div className="bg-gray-100 m-10 py-14 rounded-lg px-10">
                <form onSubmit={handleUpdate} className="card-body  max-auto   space-y-6">

                <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text text-2xl font-bold">Title:</span>
                            </label>
                            <input type="text" defaultValue={title} placeholder="Survey Title" name="title" className="input input-bordered" />
                        </div>

                     {/* deadline */}
                    <div className="form-control flex-1 ">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Deadline:</span>
                        </label>
                        <input type="date" defaultValue={deadline}  placeholder="Please date" name="deadline" className="input input-bordered" required />
                    </div>
                    {/* priority */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Priority:</span>
                        </label>
                        <select  name="priority" defaultValue={priority} id="" className="input input-bordered">
                            <option value="High">High</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                   
                  {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Description</span>
                        </label>
                        <textarea defaultValue={description} name="description" id="" cols="30" rows="10" placeholder="Your Message"
                            className="input-bordered p-4 input h-40"></textarea>

                    </div>


                    <div className=" ">
                        <button className="w-full text-white mt-6 py-2 text-center rounded-lg text-xl font-semibold bg-emerald-400">
                            Update Task</button>
                    </div>
                </form>
            </div>
        </div>
   )
};

export default Update;