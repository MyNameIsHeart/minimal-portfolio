import React from "react";

/*
    tailwindcss doc (padding):
    https://tailwindcss.com/docs/padding 
*/

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6"> {/* intro styling */}
            
            <h1
                className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold"
            >
                Noam L.
            </h1> {/* name */}

            <p
                className="text-base md:text-xl mb-3 font-medium"
            >
                Software Developer Intern & Computer Science Student
            </p> {/* job title */}
            
            <p
                className="text-sm max-w-xl mb-6 font-bold"
            >
                Self learner, persistent and accurate, “can do” approach, a team player.<br />
                Looking for a role where I can work as part of a team towards a meaningful goal.<br />
                I'm always in pursuit of meaning, intriguing challenges, and interesting things to learn.
            </p> {/* bio */}

        </div>
    )
}

export default Intro;