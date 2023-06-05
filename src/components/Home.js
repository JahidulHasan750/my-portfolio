import {HiArrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#9e2877] font-semibold text-2xl'>Hi, my name is</p>
            <h1 className='text-6xl sm:text-7xl font-bold text-[#9b9797]'>Hasan</h1>
            <h2 className='text-6xl sm:text-7xl font-bold text-[#8892b0]'>I am a Front-end Developer</h2>
            <p className='text-[#8892b1] text-xl my-4 max-w-[700px]'>I am a front-end web developer specializing in building professional looking websites. My websites are made using reacty and tailwind css. So they are fully responsive</p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600 '>View Work <HiArrowRight className='ml-3 group-hover:rotate-90 duration-500'></HiArrowRight></button>
            </div>
        </div>
    </div>
  )
}

export default Home;