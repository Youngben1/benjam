import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Firebase from "../assets/firebase.png";
import Sanity from "../assets/sanity.jpg";

const Skills = () => {
  return (
    <div className='w-full h-screen'>
        <div className="mx-auto p-4 justify-center flex flex-col w-full h-full max-w-[1000px]">
            <div className='text-center'>
              <h1 className='text-3xl font-semibold'>Skills</h1>
              <p className="py-4 text-xl font-medium">These are the technologies I have worked with:</p>
            </div>

            <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
                <div className='duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                    <p className='my-4 text-xl font-bold'>HTML</p>
                </div>
                <div className='duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={CSS} alt="css icon" />
                    <p className='my-4 text-xl font-bold'>Css</p>
                </div>
                <div className='duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={Javascript} alt="js icon" />
                    <p className='my-4 text-xl font-bold'>Javascript</p>
                </div>
                <div className='duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="react icon" />
                    <p className='my-4 text-xl font-bold'>React</p>
                </div>
                <div className='duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={Firebase} alt="html icon" />
                    <p className='my-4 text-xl font-bold'>Firebase</p>
                </div>
                <div className='duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="html icon" />
                    <p className='my-4 text-xl font-bold'>Tailwind</p>
                </div>
                <div className='duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={Github} alt="html icon" />
                    <p className='my-4 text-xl font-bold'>Github</p>
                </div>
                <div className='duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={Sanity} alt="html icon" />
                    <p className='my-4 text-xl font-bold'>Sanity</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills