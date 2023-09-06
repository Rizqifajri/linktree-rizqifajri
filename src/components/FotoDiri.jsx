import React from 'react'
import imageProfile from '../assets/profile.jpeg'
import DeskripsiDiri from './DeskripsiDiri'
const FotoDiri = () => {
  return (
    <div>
      <div className="mt-24 flex flex-col group w-full sm:w-[384px] items-center mb-4 transition-all relative">
        <div className="bg-[#ffffff] scale-125 w-[120px] rounded-full border-2 cursor-pointer border-my-gray-200 group-hover:border-4	 group-hover:border-my-gray-800 transition-all aspect-square object-contain overflow-hidden z-50">
        <img className='scale-125 mt-3'
					
					src={imageProfile}
					alt="profile"
		/>
     
        </div>
        
        <DeskripsiDiri/>

      </div>
    </div>
  )
}

export default FotoDiri
