import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import FeatureCard from "./FeatureCard";


const Feature = () => {
       const axiosPublic = useAxiosPublic()
    const { data: features = [] } = useQuery({
        queryKey: ['features'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/feature`);
            console.log(res.data);
            return res.data;
        }
    })
    console.log(features);
    return (
        <div className="container mx-auto">
              
              <div className="md:max-w-sm mx-auto text-center my-10">
           
            <h3 className="text-3xl text-orange-600 font-normal mx-2  border-b-2 py-4 uppercase">Key Features</h3>
        </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    features.map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)
                }
            </div>
            
        </div>
    );
};

export default Feature;