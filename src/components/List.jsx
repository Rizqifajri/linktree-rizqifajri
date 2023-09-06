import React from 'react';
import {GrGithub, GrInstagram, GrLinkedinOption} from "react-icons/gr"

const List = () => {
  return (
  
    <div className='flex flex-col w-full group items-center mb-4 transition-all relative '>

      <a className='text-white  hover:text-black bg-gradient-to-r  from-[#e1d5e9] via-[#76e9fd] to-[#e15bf3] text-lg hover:scale-110 sm:w-96 transition-all w-full hover:bg-[#24292F]/90 font-medium rounded-lg px-5 py-3  mb-2 flex justify-center items-center gap-2 min-w-fit'
      href="">Github
      <GrGithub/>
      </a>
      
      <a className='text-white  hover:text-black bg-gradient-to-r  from-[#eedbfa] via-[#76e9fd] to-[#e15bf3] text-lg hover:scale-110 sm:w-96 transition-all w-full hover:bg-[#24292F]/90 font-medium rounded-lg px-5 py-3  mb-2 flex justify-center items-center gap-2 min-w-fit'
      href="">Linkedn
      <GrLinkedinOption/>
      </a>
      
      <a className='text-white hover:text-black bg-gradient-to-r  from-[#eedbfa] via-[#73daec] to-[#e15bf3] text-lg hover:scale-110 sm:w-96 transition-all w-full hover:bg-[#24292F]/90 font-medium rounded-lg px-5 py-3  mb-2 flex justify-center items-center gap-2 min-w-fit'
      href="">Instagram
      <GrInstagram/>
      
      </a>
      
    </div>
    
  );
  
};

export default List;
