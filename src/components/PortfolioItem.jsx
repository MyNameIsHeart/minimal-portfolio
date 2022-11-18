import React from "react";

{/* passing parameters from portfolio.js */}
function PortfolioItem({title, imgUrl, imtAlt, stack, link}) {
    return (
        <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-stone-900 dark:border-stone-300 rounded-md overflow-hidden"
        >

            {/* image */}
            <img
                src={imgUrl}
                alt={imtAlt}
                className="w-full h-36 md:h-48 lg:h-60 object-cover cursor-pointer"
            />

            <div className="w-full p-4">

                {/* title */}
                <h3
                    className="text-lg md:text-xl mb-2 md:mb-3 font-semibold"
                >
                    {title}
                </h3>

                {/* related technologies */}
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {/* iterate through the stack array */}
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-300 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>

        </a>
    )
}

export default PortfolioItem;