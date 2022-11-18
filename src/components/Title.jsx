import React from "react";

function Title({children, id}) {
    return (
        <h1
            id={id && id}
            className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 lg:mb-6 text-stone-900 dark:text-white lg:text-3xl"
        >
            {children}
        </h1>
    )
}

export default Title;