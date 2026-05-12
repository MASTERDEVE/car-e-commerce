import React from "react";
import {ArrowUpRight} from "lucide-react";


function Model({ item = {} }){
    const{title, price, mileage,description, image}= item;

    return(
        <div className="flex flex-col gap-4 bg-gray-200 hover:bg-green-700 text-black hover:text-white w-100 h-100 rounded-2xl px-5 py-5  "> 
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <button  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white  hover:bg-white hover:text-green-700">
        <ArrowUpRight size={16} className="rotate-[10deg] "/>
            </button>
        </div>
         <div className="flex justify-between items-center ">
          <p >Price: <span className="font-bold ">{price}</span></p>
          <p >Mileage:<span className="font-bold ">{mileage}</span></p>
            </div>
          <p>{description}</p>
          <img src= {image} />
 
        </div>
    )
}

export default Model;