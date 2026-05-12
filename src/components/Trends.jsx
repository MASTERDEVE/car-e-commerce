import React from "react";

function Trends({ info = {} }) {
  const { img, Date, ques } = info;

  return (
    <div className="flex gap-6 items-start">
    
      <img
        src={img}
        alt="trend"
        className="rounded-4xl w-60 h-50 object-cover"
      />

      <div className="flex flex-col justify-between gap-12">
        <h1 className="text-gray-500 text-sm">{Date}</h1>
        <p className="text-base leading-snug">{ques}</p>
        <button
          type="button"
          className="underline text-green-700 hover:text-blue-800 w-max"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default Trends;
