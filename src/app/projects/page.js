"use client";
import React from 'react';
import Slider from "react-slick";

import Project from './projects';

const Page = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    // <Slider>
       <div className='flex flex-col overflow-auto'>
        {Project.map((project,index) => (
          <div className='m-10 md:w-[50rem] md:h-auto w-[20.5rem] h-auto object-contain p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse' key= {index} >
            <img src={project.pic} alt='Project ${index}' className='h w-full relative border-2 border-white rounded-2xl'/>
            <div className='h-full w-full mr-2 rounded-2xl'>
             <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">{project.teir}</p>
             <h2 className='m-2 text-4xl font-bold dark:text-white'>{project.title}</h2>
             <div className='pt-5 pr-2 pl-2 flex flex-row justify-around flex-wrap '>{project.techstack.map((tech,index)=>(
              <h4 className='md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300' key={index}>{tech}</h4>
             ))}
             </div>
             <p className='description'>{project.description}</p>
             <a href={project.link} target="_blank" rel="noopener noreferrer" className='md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300"'>
              View Project
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className='md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300"'>
              View On GitHub
            </a>
            </div>
          </div>
        ))

        }
      </div>
      // </Slider>
  );
};

export default Page;
