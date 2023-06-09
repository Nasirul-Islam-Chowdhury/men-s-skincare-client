import React from 'react';

const HomeGrowingSection = () => {
    return (
        <div className=' bg-[#252422] text-white py-20 '>
           <div className='lg:flex items-center container'>
           <div className='lg:w-1/2'>
            <h1 className="italic lg:text-6xl text-4xl font-secondary font-extralight underline ">
        Shine Up
      </h1>
      <h2 className="font-semibold font-primary italic mt-6 lg:text-5xl text-2xl ">
      skin Care for Men, we've got you covered
      </h2>
      <p className='my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.</p>
      <button className='btn rounded-full btn-outline  px-16 border-white text-white'> Learn More</button>
            </div>
            <div className='lg:w-1/2 mt-10'>
       
           <div className='w-2/3 mx-auto'>
           <progress className="progress progress-accent bg-white mb-10" value="70" max="100">fgh</progress><br />
            <progress className="progress progress-secondary bg-white mb-10" value="70" max="100"></progress><br />
            <progress className="progress progress-warning bg-white" value="70" max="100"></progress>
           </div>
</div>
          
           </div>
        </div>
    );
};

export default HomeGrowingSection;