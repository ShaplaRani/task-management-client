
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className=" lg:flex items-center container mx-auto p-4 mt-10 lg:mt-0">
            <div className="flex-1 space-y-7 text-center lg:text-left" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                  <h3 className="font-bold text-3xl md:text-5xl leading-tight">Discover Seamless
                  <span className="text-orange-600"> Task </span> Management 
                       </h3>
                    <p className="text-lg  font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">TaskFlowHub is designed to simplify your workflow and boost productivity. Get started today</p>
                    <Link to="/login">
                         <button className="bg-emerald-400 mt-5 text-xl font-normal text-white py-3 px-6 rounded-3xl ">Lets Explore</button>
                    </Link>
            </div>
             <div className=" flex-1 bg-orange-100" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img className="" src={banner} alt="" />
             </div>
        </div>
    );
};

export default Banner;