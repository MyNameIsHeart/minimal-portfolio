import React from "react";

{/* passing parameters from timeline.js */}
function TimelineItem({date, title, place_of_employment, details}) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-400 pt-2">
            <li className="mb-10 ml-4">
            
                {/* bullets */}
                <div
                    className="absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5 border border-white"
                />
                
                {/* style for date, title and details */}
                <p
                    className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm"
                >
                
                    {/* date */}
                    <span 
                        className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md"
                    >
                        {date}
                    </span>
                    
                    {/* title */}
                    <h3 
                        className="text-lg font-semibold text-stone-900"
                    >
                        {title} @ {place_of_employment}
                    </h3>
                
                </p>
                    
                {/* details */}
                <p
                    className="my-2 text-base font-normal text-stone-500"
                >
                    {details}
                </p>
            
            </li>
        </ol>
    )
}

export default TimelineItem;