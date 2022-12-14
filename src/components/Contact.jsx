import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                {/* form from getform.io */}
                <form
                    action="https://getform.io/f/956e2fae-b550-4664-8a81-af91d187d947"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12 lg:w-8/12"
                >
                    <Title>Contact</Title>
                    {/* Name field   */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 border-stone-400 dark:border-stone-500 placeholder-stone-500 dark:placeholder-stone-400 rounded-md focus:outline-none"
                    />

                    {/* Email field */}
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 border-stone-400 dark:border-stone-500 placeholder-stone-500 dark:placeholder-stone-400 rounded-md focus:outline-none"
                    />

                    {/* Message field */}
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 border-stone-400 dark:border-stone-500 placeholder-stone-500 dark:placeholder-stone-400 rounded-md focus:outline-none"
                    />

                    {/* colourful button */}
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md dark:from-blue-500 dark:to-green-500"
                    >
                        Contact Me
                    </button>
                    
                </form>
            </div>
        </div>
    )
}

export default Contact;