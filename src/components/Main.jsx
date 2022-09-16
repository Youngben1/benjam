import React from 'react'
import Typed from "react-typed"

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
            <div>
                <h1 className="text-4xl">Hello, I'm <span className="text-blue-600">Benjamin Renny</span></h1>
                <h1 className="text-4xl py-2">A Front-End Web Developer</h1>
                <p className="max-w-[70%] m-auto py-4">I am a front-end web developer who specializes in building wonderful digital experiences. At the moment I am a freelancer looking for work with a tech company, I am focused on creating responsive front-end web applications while learning some back end technologies. </p>
            
            </div>
        </div>
    </div>
  )
}

export default Main

            // <Typed
            // strings={['HTML', 'CSS', 'JAVASCRIPT']}
            // typeSpeed={120}
            // backSpeed={140}
            // loop
            // />