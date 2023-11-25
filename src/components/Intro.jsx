import React from "react";

/*
    tailwindcss doc (padding):
    https://tailwindcss.com/docs/padding 
*/

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6"> {/* intro styling */}
            
            <h1
                className="text-4xl md:text-7xl lg:text-8xl dark:text-white mb-1 md:mb-3 lg:mb-6 font-bold"
            >
                Noam Lev
            </h1> {/* name */}

            <p
                className="text-base md:text-xl lg:text-2xl mb-3 lg:mb-6 font-medium"
            >
                Software Developer at Check Point
            </p> {/* job title */}
            
            <p
                className="text-sm lg:text-lg max-w-4xl mb-6 lg:mb-8 font-bold"
            >
                I’m a software developer (intern) at Check Point with an interest in cyber security.<br />
                I am looking for my next entry role where I can expand my knowledge and contend with more<br />complex research and development challenges.

            </p> {/* bio */}

        </div>
    )
}

export default Intro;