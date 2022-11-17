import React from "react";

{/* passing parameters from portfolio.js */}
function PortfolioItem({title, imgUrl, imtAlt, stack, link}) {
    return (
        <div>

            <img
                src={imgUrl}
                alt={imtAlt}
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />

            <div className="w-full p-4">
                <h3>{title}</h3>
                <p>
                    {/* iterate through the stack array */}
                    {stack.map(item => (
                        <span>
                            {item}
                        </span>
                    ))}
                </p>
            </div>

        </div>
    )
}

export default PortfolioItem;