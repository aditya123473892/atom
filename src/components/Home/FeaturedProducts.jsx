// FeaturedProducts.jsx
import React from 'react';
import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.jpg";
import feature3 from "../../assets/feature3.jpg";
import { FaArrowRight } from "react-icons/fa";

const FeaturedProducts = () => {
 return (
   <section className="flex items-center justify-center w-full overflow-hidden">
     <div className="flex w-full">
       <div className="w-6/12 m-0 p-0">
         {/* Show feature1 image */}

         <div className="relative h-[60vh] w-full flex items-end justify-end"
           style={{
             backgroundImage: `url(${feature1})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}>

           <button className="pl-8 mr-8 mb-8 z-10 text-black text-3xl font-base bg-white rounded-full hover:scale-[1.05] transition duration-300 animate-slide-up flex items-center">
             Know more
             <div className="h-10 w-10 bg-black text-white m-1 ml-6 rounded-full flex justify-center items-center rotate-[-45deg] hover:rotate-0 transition duratuion-75">
               <FaArrowRight className="text-2xl" />
             </div>
           </button>
           <h2 className='block absolute h-full w-full flex items-center justify-center font-heading text-7xl text-white'>
             Seamless
           </h2>

         </div>

         {/* Show feature2 image */}
         <div className="relative h-[80vh] w-full flex items-end justify-end"
           style={{
             backgroundImage: `url(${feature2})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}>




           <button className="pl-8 mr-8 mb-8 z-10 text-black text-3xl font-base bg-white rounded-full hover:scale-[1.05] transition duration-300 animate-slide-up flex items-center">
             Know more
             <div className="h-10 w-10 bg-black text-white m-1 ml-6 rounded-full flex justify-center items-center rotate-[-45deg] hover:rotate-0 transition duratuion-75">
               <FaArrowRight className="text-2xl" />
             </div>
           </button>
           <h2 className='block absolute h-full w-full flex items-center justify-center font-heading text-7xl text-white'>
             Imprints
           </h2>


         </div>

       </div>
       {/* Show feature3 image */}
       <div className="relative w-6/12 flex items-end justify-end"
         style={{
           backgroundImage: `url(${feature3})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}>




         <button className="pl-8 mr-8 mb-8 z-10 text-black text-3xl font-base bg-white rounded-full hover:scale-[1.05] transition duration-300 animate-slide-up flex items-center">
           Know more
           <div className="h-14 w-14 bg-black text-white m-1 ml-4 rounded-full flex justify-center items-center rotate-[-45deg] hover:rotate-0 transition duratuion-75">
             <FaArrowRight className="text-2xl" />
           </div>
         </button>

         <h2 className='block absolute h-full w-full flex items-center justify-center font-heading text-7xl text-white'>
           French Terry
         </h2>


       </div>
     </div>
   </section>
 );
};

export default FeaturedProducts;