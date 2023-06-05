import React from 'react';
import Logo from "../assets/LogoMakr-8KKcza.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { useState } from 'react';
import {Link} from "react-scroll";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toogleNav = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} className='w-[85px] '></img>
            </div>
            <div >
                <ul className='hidden md:flex'>
                    <li> <Link to='home' smooth={true} duration={500}>Home</Link></li>
                    <li> <Link to='about' smooth={true} duration={500}>About</Link></li>
                    <li> <Link to='skills' smooth={true} duration={500}>Skill</Link></li>
                    
                    <li> <Link to='work' smooth={true} duration={500}>Work</Link></li>
                    <li> <Link to='contact' smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
            <div onClick={toogleNav} className='md:hidden z-20'>
                {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
            </div>
            <div className={nav ? ' md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
                <ul>
                    <li  className='py-6 text-4xl'> <Link onClick={toogleNav} to='home' smooth={true} duration={500}>Home</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={toogleNav} to='about' smooth={true} duration={500}>About</Link></li>
                
                    <li className='py-6 text-4xl'> <Link onClick={toogleNav} to='skills' smooth={true} duration={500}>Skill</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={toogleNav} to='work' smooth={true} duration={500}>Work</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={toogleNav} to='contact' smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href='/' className='flex items-center w-full text-gray-300 justify-between'>
                            Linkedin <FaLinkedin size={30}></FaLinkedin>
                        </a>

                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href='/' className='flex items-center w-full text-gray-300 justify-between'>
                            GitHub <FaGithub size={30}></FaGithub>
                        </a>

                    </li> <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#15c395]'>
                        <a href='/' className='flex items-center w-full text-gray-300 justify-between'>
                            Email <AiOutlineMail size={30}></AiOutlineMail>
                        </a>

                    </li> <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#424343]'>
                        <a href='/' className='flex items-center w-full text-gray-300 justify-between'>
                            Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar