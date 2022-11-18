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
                Noam L.
            </h1> {/* name */}

            <p
                className="text-base md:text-xl lg:text-2xl mb-3 lg:mb-6 font-medium"
            >
                Software Developer Intern & Computer Science Student
            </p> {/* job title */}
            
            <p
                className="text-sm lg:text-lg max-w-4xl mb-6 lg:mb-8 font-bold"
            >
                Self learner, persistent and accurate, “can do” approach, a team player.<br />
                Looking for a role where I can work as part of a team towards a meaningful goal.<br />
                I'm always in pursuit of meaning, intriguing challenges, and interesting things to learn.
            </p> {/* bio */}

        </div>
    )
}

export default Intro;