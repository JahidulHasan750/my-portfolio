import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/6127d2d1-c0af-4697-b872-9143b46d8656' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-400'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below and send me an email</p>
            </div>
            <input type='text' placeholder='Name' name='name' className='bg-[#ccd6f6] p-2'></input>
            <input type='text' placeholder='Email' name='name' className='my-4 p-2 bg-[#ccd6f6]'></input>
            <textarea name='message' rows='10' className='bg-[#ccd6f6]' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact