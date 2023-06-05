import React from 'react';

import CSS from '../assets/css.png';
import Js from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
import ReactImg from '../assets/react.png';
import HTML from '../assets/html.png';
import Github from '../assets/github.png';


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
            <div>
                <p className=' font-bold text-4xl border-b-4 inline'>Skills</p>
                <p className='py-4'>The technologies I have experience in</p> 
            </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8'>
                <img src={HTML} className='w-20 mx-auto '></img>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8'>
                <img src={CSS} className='w-20 mx-auto'></img>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8'>
                <img src={Js} className='w-20 mx-auto'></img>
                <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8'>
                <img src={Tailwind} className='w-20 mx-auto'></img>
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8'>
                <img src={Github} className='w-20 mx-auto'></img>
                <p className='my-4'>Github</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8'>
                <img src={ReactImg} className='w-20 mx-auto'></img>
                <p className='my-4'>React</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills