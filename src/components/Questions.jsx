import React , {useState} from "react";
import {ArrowUpRight} from "lucide-react";

function Question({data = {} ,isOpen, onClick}){

const {ques ,ans} = data;

    return(
        <div  className="bg-gray-200  w-150 min-h-20 h-auto rounded-2xl hover:bg-green-700 hover:text-white px-10  py-5">
        <div className="flex justify-between items-center ">
        <h1  className="text-xl font-bold">{ques}</h1>
        <button  onClick={onClick}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white  hover:bg-white hover:text-green-700">
        <ArrowUpRight size={16} className="rotate-[10deg] "/>
      </button>
       </div>
        {isOpen && (
             <p >{ans}</p>
        )}
       
        </div>
    )
}
export default Question;