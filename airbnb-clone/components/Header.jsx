import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/airbnb-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Header(){
  return (
    <div className="grid grid-cols-3 shadow-md top-0">
      {/* Left Side*/}
      <div className="relative h-24 cursor-pointer">
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* Search Bar */}
      <div className="" >
        <input type="text" placeholder="Search for your destination..." />
        <AiOutlineSearch />
      </div>
      {/* Right side */}
    </div>
  )
}