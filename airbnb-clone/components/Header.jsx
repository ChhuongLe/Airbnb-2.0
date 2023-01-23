import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/airbnb-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiGlobe } from 'react-icons/bi'
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'

export default function Header(){
  return (
    <header className="sticky grid grid-cols-3 bg-white shadow-md top-0 p-5">
      {/* Left Side*/}
      <div className="relative flex items-center h-12 cursor-pointer my-auto">
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* Search Bar */}
      <div className="flex items-center border-2 rounded-full md:shadow-md" >
        <input type="text" placeholder="Start your search" className="flex-grow pl-5 bg-transparent outline-none text-sm md:text-lg text-gray-600 placeholder-gray-400" />
        <AiOutlineSearch size={30} style={{ padding: "5px" }} className="hidden md:inline-flex md:mx-2 bg-[#FF5A5F] text-white rounded-full cursor-pointer "/>
      </div>
      {/* Right side */}
      <div className="flex items-center space-x-3 justify-end">
        <p className="hidden  md:inline px-5 cursor-pointer">Become a host</p>
        <BiGlobe size={25} style={{ paddingRight: "3px" }} className="cursor-pointer"/>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <AiOutlineMenu />
          <AiOutlineUser />
        </div>
      </div>
    </header>
  )
}