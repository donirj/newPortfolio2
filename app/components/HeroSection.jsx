"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Hello I'm {" "} 
                </span>
                <br/>
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Doni',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'web developer',
                    1000,
                    'mobile developer',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                
                repeat={Infinity}
                />

                </h1>
                <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
                Front end developer, passionate for creating digital experiences.
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                    Hire me
                    </button>
                    <button className='px-1 py-1 w-ful sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                        download cv
                        </span>
                    </button>
                    
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative'>
                    <img 
                        src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
                        alt='hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}

                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection