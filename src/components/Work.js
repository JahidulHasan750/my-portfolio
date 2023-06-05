import React from 'react';
import One from "../assets/1.png";
import Two from "../assets/2.png";
import Three from "../assets/3.png";
import Four from "../assets/5.png";
import Five from "../assets/4.png";
import Six from "../assets/6.png";


const Work = () => {
    return (
        <div name='work' className='bg-[#0a192f]  md:h-screen md:w-full text-gray-300' >
            <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 '>Work</p>
                    <p className='py-6'>Some of my recent works</p>
                </div>
                <div  
                className='grid  lg:grid-cols-3 sm:grid-cols-2 gap-8'>
                    <div style={{backgroundImage:`url(${One})`}} className='shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center content-div '>
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                HTML CSS project
                            </span>
                            <div className='pt-8 text-center'>
                                    <a href='https://jahidulhasan750.github.io/business-website/'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Demo</button>
                                    </a>
                                    <a href='https://github.com/JahidulHasan750/business-website'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Code</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${Two})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center   mx-auto  content-div'>
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                HTML CSS project
                            </span>
                            <div className='pt-8 text-center'>
                            <a href='https://jahidulhasan750.github.io/News-Homepage/'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Demo</button>
                                    </a>
                                    <a href='https://github.com/JahidulHasan750/News-Homepage'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Code</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${Three})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  mx-auto  content-div'>
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                HTML CSS project
                            </span>
                            <div className='pt-8 text-center'>
                            <a href='https://jahidulhasan750.github.io/Holy_grail_css/'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Demo</button>
                                    </a>
                                    <a href='https://github.com/JahidulHasan750/Holy_grail_css'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Code</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${Four})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  mx-auto  content-div'>
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                HTML CSS Javascript project
                            </span>
                            <div className='pt-8 text-center'>
                            <a href='https://jahidulhasan750.github.io/age-calculator/'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Demo</button>
                                    </a>
                                    <a href='https://github.com/JahidulHasan750/age-calculator'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Code</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                       <div style={{backgroundImage:`url(${Five})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto   content-div'>
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                HTML CSS React Project
                            </span>
                            <div className='pt-8 text-center'>
                                     <a href='https://frolicking-buttercream-3db977.netlify.app/'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Demo</button>
                                    </a>
                                    <a href='https://github.com/JahidulHasan750/newsletter'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Code</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                   
                    <div style={{backgroundImage:`url(${Six})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  mx-auto    content-div'>
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                HTML CSS React Project
                            </span>
                            <div className='pt-8 text-center'>
                                     <a href='https://super-sunflower-f3c046.netlify.app/'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Demo</button>
                                    </a>
                                    <a href='https://github.com/JahidulHasan750/responsive-landing'>
                                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-2xl'>Code</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                   
                    </div>
                    </div>
                </div>
          
    )
}

export default Work