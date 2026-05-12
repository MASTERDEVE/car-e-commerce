import React ,{ useEffect, useState  } from "react";
import Model from "../components/Model";
import { useNavigate } from 'react-router-dom';
import Bestcar from "../data/cars";
import { Truck } from "lucide-react";
import { Coins } from "lucide-react";
import { HandCoins } from "lucide-react";
import { Settings } from "lucide-react";
import Question from "../components/Questions";
import Ques from "../data/ques";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import FutureTrends from "../data/trends";
import Trends from "../components/Trends";
import { Phone } from "lucide-react";
import { Locate } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedText } from "../components/AnimatedTrends";


const Home=()=>{
  
 const navigate = useNavigate();
 
    const [cars, setCars] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
     

    const handleToggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };



useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error(err));
  }, []);


    return(
    <div>
<div className="bg-black pb-110 bg-image">
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{once:true}}
    
    >
    <h1 className="flex justify-center pt-20 pb-8 text-4xl font-bold text-white">
    <span className="text-yellow-500">Buy</span>
    <span className="mx-1 ">or</span>
    <span className="text-yellow-500 mx-2 ">Rent</span> Your Dream Car
    </h1>

    <p className="text-center text-white max-w-150 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
     <div className="pt-10 flex justify-center gap-4">
     <motion.button  whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95 }}
     className=" text-white bg-green-700 px-6 py-2 rounded-3xl hover:bg-gray-700">Browse Cars For Sale</motion.button>
     <button className="text-white underline">Explore Car Rental</button>
     </div>

     </motion.div>
     </div>

     
     <div >
      <h2 className="text-7xl pt-30 max-w-350 mx-auto font-bold">
     <AnimatedText>
    <span className="text-green-700">SHOPSWIFT</span> - Luxury  Car  Sales  and  Rental  Platform
     </AnimatedText>
     </h2>


     <div className="flex justify-center mx-20 gap-10">
     <motion.img initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
     src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       alt="Car"
       className="w-200 h-90 mt-30 rounded-4xl"
       />
     <motion.p  initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
     className="text-gray-500 text-xl  pt-50">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</motion.p>
     </div>
     </div>
     <div className="flex justify-center pt-40 mx-30 gap-20  ">

     
     <img 
     src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-100 h-70 rounded-4xl"
     />
    
      
      <div className=" bg-gray-200 rounded-3xl h-70  ">
        <h3 className="text-2xl font-bold text-center pt-10">About 
        <span className="text-yellow-300"> Us</span> </h3>
        <motion.p initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-100 text-center pt-5 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</motion.p>
      
       <motion.button type="button"  whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95 }}
       
        onClick={() => navigate('/learnmore')}
        className="text-white bg-green-700 px-6 py-2 rounded-3xl hover:bg-gray-700 mt-5 ml-25.5" >Learn more</motion.button>
      </div>
    
    <img className="w-100 h-70 rounded-4xl"
       src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
     </div>   
     <div className="bg-gray-200 w-300 h-20 mt-10 mx-auto rounded-2xl flex mt-20">
      <img src="/images/image.png" 
        className="w-30 h-20 ml-20"
      />
      
      <img src="/images/roylesroyce.png" 
        className="w-30 h-20 ml-20 pt-3 "
      />
     <img  src="/images/aston.png" 
        className="w-30 h-20 ml-20 pt-3 "
      />  
     <img  src="/images/jaguar.png" 
        className="w-30 h-20 ml-20 pt-3 "
      />   
      <img  src="/images/ds.png" 
        className="w-30 h-20 ml-20 pt-3 "
      />
       <img  src="/images/mercedes.png" 
        className="w-20 h-20 ml-20 pt-3 "
      />
      </div>
      <div className="flex mt-30 mx-30 gap-20">
        <h4 className="text-4xl font-bold">Top Picks For Car 
        <span className="text-yellow-300"> Sales</span> 
         </h4>


         <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-[600px] text-gray-500 mx-auto leading-relaxed"
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </motion.p>


        <button className="text-white bg-green-700 px-6 py-2 rounded-3xl hover:bg-gray-700">View All</button>
      </div>
       <div className="flex gap-10 justify-center mt-30 ">
        {cars.map((item,index) => (
         <Model
         item={item}
         key={index}
          />
        )
        )}
       </div> 
       <div className="flex flex-col bg-black mx-10 rounded-3xl my-20 pb-30" >
       <div className="flex mt-30 mx-20  gap-25">
        <h4 className="text-4xl font-bold text-white">Best Car <span className="text-yellow-300">Rental</span> Deals</h4>
        <motion.p initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-150 text-white">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</motion.p>
        <button className="text-white bg-green-700 px-6 py-2 rounded-3xl hover:bg-gray-700">View All</button>
       </div>
       <div className="flex gap-10 justify-center mt-30">
       {Bestcar.map((item,index) => (
         <Model
         item={item}
         key={index}
          />
       ))}
       </div>
       </div>
       <div>
       <div className="flex flex-col justify-between items-center gap-4">
        <h4  className="text-4xl font-bold">Why <span className="text-yellow-300"> Choose</span> Us</h4>
        <p className="mx-100 text-center">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
       </div>
       <div className="flex my-20 mx-20">

       <div className="flex flex-col gap-4">
       <Truck className="bg-yellow-200 rounded-full" />
       <h6 className="text-xl font-bold">Wide Selection of Vehicles</h6>
       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
       
       <Coins  className="bg-yellow-200 rounded-full" />
       <h6 className="text-xl font-bold">Transparent pricing</h6>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
       </div>
       
       <div className="bg-black w-120 h-80 rounded-full overflow-visible relative mx-10 "
         style={{ backgroundImage: "url('/images/bg.jpg')",
         backgroundSize: "cover",
         backgroundPosition: "center top 30%", }}
       >
       <img className="absolute  right-35 translate-x-1/2 top-1/15 max-w-[350px] h-auto  " src="/images/car4.png" />
      </div>
     
       <div  className="flex flex-col gap-4">
      <HandCoins  className="bg-yellow-200 rounded-full"/>
      <h6 className="text-xl font-bold">Flexible Financing Options</h6>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
      <Settings  className="bg-yellow-200 rounded-full"/>
      <h6 className="text-xl font-bold">Exceptional Customer Services</h6>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

       </div>

       </div>
       </div>
       
       <div className="flex mx-50 gap-20 my-30">
       <div className="flex flex-col gap-10">
        <h4 className="text-4xl font-bold" >Frequently <span className="text-yellow-300"> Asked</span> Questions</h4>
        <img className="w-110 h-100 rounded-4xl border-4 border-black" src="/images/car5.jpg"/>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          {Ques.map((data,index) =>(
          <Question 
           data={data}
           key={index}
           isOpen={activeIndex === index}
           onClick={() => handleToggle(index)}
           />
            )
          )}
        </div>
       </div>

      <div className="bg-gray-200 px-4 py-10 md:px-20 md:py-20 rounded-4xl my-30">
  <h4 className="text-2xl md:text-4xl font-bold text-center mb-10">
    What our customers are <span className="text-yellow-300">saying</span> about us
  </h4>

  <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
  
    <img
      className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover"
      src="/images/customer1.jpg"
      alt="Customer 1"
    />

    
    <button className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-green-700 text-white hover:bg-white hover:text-green-700">
      <ArrowLeft size={21} />
    </button>

  
    <div className="flex flex-col md:flex-row bg-white w-full max-w-4xl rounded-4xl overflow-hidden shadow-lg">
      <img
        className="w-full md:w-80 h-60 md:h-auto object-cover"
        src="/images/customer2.jpg"
        alt="Customer 2"
      />
      <div className="p-6 flex flex-col justify-between gap-5">
        <p className="text-base md:text-lg font-semibold">
          I had an amazing experience renting a car from here. The process was quick and hassle-free, and the vehicle was in perfect condition. Highly recommend their service!
        </p>
        <div>
          <p className="font-bold">John D.</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>

  
    <button className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-green-700 text-white hover:bg-white hover:text-green-700">
      <ArrowRight size={21} />
    </button>

    <img
      className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover"
      src="/images/customer3.jpg"
      alt="Customer 3"
    />
  </div>
</div>


      <div className="">
        <h1 className="text-4xl font-bold mx-125 text-center">Stay Updated with the Latest Car <span className="text-yellow-300"> Trends</span> and <span className="text-yellow-300"> Tips</span>   </h1>
        <div className="flex ml-20  mr-30 my-20 gap-10">
        <img className="w-200 h-155 rounded-4xl"    src="images/customer4.jpg" />
      <div className="flex flex-col gap-3">
        {FutureTrends.map((info,index)=>(
          <Trends 
            info={info}
            key={index}
          />
        ))}
        </div>

        </div>

      </div>

      <div className="bg-black h-180 mt-30 py-15">
     
     <div className="flex gap-60 rounded-4xl h-70 mx-15 bg-green-700 px-10 py-10">
      <div className="flex flex-col gap-8">
        <h4 className="text-4xl text-white font-bold-100">Drive Your Dream Car Today!</h4>
        <p className="text-white">Whether you are looking to buy or rent, we have the perfect car waiting for you. Browse our extensive selection and behind the wheel with ease </p>
       
       <div className="flex gap-5">
        <button className="border-2 rounded-3xl border-white w-30 h-10 text-white hover:text-green-700 hover:bg-white">Browse Cars</button>
       <button className="border-2 rounded-3xl border-white w-30 h-10 text-white hover:text-green-700 hover:bg-white">Contact Us</button>
        </div>

      </div>
       <div className="flex">
      <img className="h-100 w-200 pb-20 -mt-10 pr-30 "
       src="/images/car6.png" />
      </div>

      </div>

      <div className="flex text-gray-500 px-20 pt-20 pb-10 gap-20">

      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-green-700">SHOPSWIFT</h1>
        <p className="pr-80">We are dedicated to provide the best car buying and renting experience ,offering a wide range of high- quality vehicles with excellent customer services.</p>
      </div>


      <div className="flex flex-col gap-2">
        <h1 className="underline">INFORMATION</h1>
        <p>Cars for Sale </p>
        <p>Cars for Rent</p>
        <p>Financing</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="underline">CONTACT</h1>
        <div className="flex gap-2"> 
        <button>
          <Phone size={15} />
        </button>
        <p>+1-800-122-4567</p>
        </div>

        <div className="flex gap-2">
        <button>
          <Locate size={15} />
        </button>
       <p>73 Main Street,5th block New York City</p>
       </div>
        
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="underline">SOCIAL MEDIA</h1>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
      </div>

      </div>
      <hr className="text-gray-500 mx-20" />
       
       <div className="flex text-gray-500 justify-between items-center mx-20 pt-5">
        <p>2024 SHOPSWIFTDRIVE All Rights Reserved.</p>
        <p>Terms Of Service</p>
        <p>Privacy Policy</p>
       </div>
      
      </div>

  
    </div>
    )
}; 
    
export default Home;         


