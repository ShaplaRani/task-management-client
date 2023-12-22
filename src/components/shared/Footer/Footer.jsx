import { PiTwitterLogoLight } from "react-icons/pi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import logo from '../../../assets/logo.jpg'
const Footer = () => {
    return (
        <div className=" bg-orange-100 pt-24 pb-8">
            <div className="w-10/12  mx-auto flex justify-between items-center mb-7 " >
               
                    <div className="flex items-center">
                       <img className="w-24 h-24 rounded-full" src={logo} alt="" />
                       <h2 className="text-2xl font-semibold">TaskFlowHub</h2>
                    </div>
                <div className="flex gap-2 md:gap-4" data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <div className="w-10 h-10 items-center rounded-full flex justify-center bg-white">
                        <a className="" href="https://facebook.com/yourwebsite"><BiLogoFacebook className="text-blue-500 text-xl"></BiLogoFacebook></a>
                    </div>
                    <div className="w-10 h-10 items-center rounded-full flex justify-center bg-white">
                        <a href="https://www.instagram.com/yourwebsite"><AiOutlineInstagram className=
                        "text-blue-500 text-xl"></AiOutlineInstagram></a>
                    </div>
                    <div className="w-10 h-10 items-center rounded-full flex justify-center bg-white">
                        <a href=" https://twitter.com/yourwebsite"><PiTwitterLogoLight className="text-xl text-blue-500"></PiTwitterLogoLight></a>
                    </div>
                </div>

            </div>
            <footer className="pb-20  grid grid-cols-2 md:grid-cols-4 justify-between text-black w-10/12 
             mx-auto ">
                <nav className="text-base font-medium text-gray-700" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <header className="footer-title text-gray-900 opacity-100">Services</header>

                    <p className="link link-hover">Intuitive Dashboard</p>
                    <p className="link link-hover">Collaboration Made Easy</p>
                    <p className="link link-hover">Visual Task Overview</p>
                    
                </nav>
                <nav className="text-base font-medium text-gray-700" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <header className="footer-title  text-gray-900 opacity-100">Site links</header>
                    <p className="link link-hover">Home</p>
                    <p className="link link-hover">Dashboard</p>
                    <p className="link link-hover">Testimonial</p>
                    <p className="link link-hover">Contact</p>
                   
                    


                </nav>
                <nav className="text-base font-medium text-gray-700" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <header className="footer-title mt-7 md:mt-0  text-gray-900 opacity-100">Legal</header>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </nav>
                <div className="space-y-2 mt-7 md:mt-0" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                  
                   <p className="text-center">Contact: <a href="mailto:contact@TaskHub.com">
                    contact@TaskHub.com</a></p>
                <p className="text-center">Address: 123 Main Street, City, Country</p>

                </div>
            </footer>
            <hr />
            <div className="mt-2">
                <p className="text-center">&copy; 2023 TaskFlowHub. All rights reserved.</p>
                
            </div>
        </div>
    );
};

export default Footer;



// const Footer = () => {
//     return (
//         <div className="bg-black opacity-50 ">
//             <footer className="container mx-auto ">
//                 <div className="footer-content">
//                     <div className="flex justify-around ">
//                     <div className="footer-logo">
//                         <img></img>
//                         <h1>TaskFlowHub</h1>
//                     </div>
//                     <div className="footer-links">
//                         <ul>
//                             <li><a href="#features">Features</a></li>
//                             <li><a href="#testimonials">Testimonials</a></li>
//                             <li><a href="#get-started">Get Started</a></li>
//                             <li><a href="#contact">Contact</a></li>
//                         </ul>
//                     </div>
//                     <div className="footer-social">
//                         <h2>Follow Us</h2>
//                         <ul>
//                             <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
//                             <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
//                             <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
//                         </ul>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="footer-bottom">
//                     <p>&copy; 2023 TaskFlowHub. All rights reserved.</p>
//                 </div>
//             </footer>

//         </div>
//     );
// };

//export default Footer;