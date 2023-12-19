import React from 'react'


const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hello im doni
                </h1>
                <p className='text-white text-lg mb-6 lg:text-xl'>
                    lorem ipsum lalalalalalalalalalalala
                </p>
                <div>
                    <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>
                    Hire me
                    </button>
                    <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>download cv</button>
                    
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