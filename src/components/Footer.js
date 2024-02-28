import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full p-2'>

    <div className='w-full border-t-2 border-red-500 flex flex-col items-center text-[10px] mx-auto'>

        <p className='font-bold mt-2'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p className='font-semibold mt-2 text-center'>CHEMICALS & PROCESS <span className='text-red-700'> |</span> POWER <span className='text-red-700'> |</span> WATER & WASTE WATER<span className='text-red-700'> |</span>  OILS & GAS <span className='text-red-700'> |</span>  PHARMA<span className='text-red-700'> |</span> SUGARS & DISTILLERIES<span className='text-red-700'> |</span> PAPER & PULP<span className='text-red-700'> |</span> MARINE & DEFENCE<span className='text-red-700'> |</span> METAL & MINING<span className='text-red-700'> |</span> FOOD & BEVERAGE<span className='text-red-700'> |</span> PETROCHEMICAL & REFINERIES<span className='text-red-700'> |</span> SOLAR<span className='text-red-700'> |</span> BUILDING<span className='text-red-700'> |</span> HVAC<span className='text-red-700'> |</span> FIRE FIGHTING<span className='text-red-700'> |</span> AGRICULTURE & RESIDENTIAL</p>
        <div className='max-md:flex-col max-md:h-fit flex justify-around bg-red-500 w-full h-[7vh] p-3 mt-3'>
            <div className='flex w-fit max-md:py-1'>
                <IoCallOutline size={28} className='text-black bg-red-500 rounded-full p-1' />
                <p className='text-white mt-2 ml-1'>Toll free <strong>1800 200 1234</strong></p>
            </div>
            <div className='flex w-fit max-md:py-1'>
                <FaFacebook size={22} />
                <p className='text-white mt-2 ml-1'>www.facebook.com/cripumps</p>
            </div>
            <div className='flex w-fit max-md:py-1'>
                <FaGlobe size={22} />
                <p className='text-white mt-2 ml-1'>www.crigroups.com</p>
            </div>
        </div>
    </div>

      
    </div>
  )
}

export default Footer
