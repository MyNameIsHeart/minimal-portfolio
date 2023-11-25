import React from "react";

/*
    tailwindcss doc (padding):
    https://tailwindcss.com/docs/padding 
*/

function Intro() {
    return (
        <div className="flex items-center text-center justify-center flex-col pt-20 pb-6"> {/* intro styling */}
            
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
            

            {/* bio */}

            <p
                className="text-left text-sm lg:text-lg max-w-4xl mb-6 lg:mb-8 font-bold"
            >
                I am looking for my next entry role where I can expand my knowledge and contend with more
                <br/>
                complex research and development challenges.
                <br/><br/>
                I am a team player and a quick learner with experience programming in C and Python
                <br/>
                as well as using other technologies and platforms such as Linux, Git, VMs and Jira.
            </p>

        </div>
        
    )
}

export default Intro;