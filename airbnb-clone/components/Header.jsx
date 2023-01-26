import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/airbnb-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiGlobe } from 'react-icons/bi'
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { HiUsers } from 'react-icons/hi'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function Header(){
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const router = useRouter();

  const handleSelect = (ranges) =>{
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput('');
  }

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query:{
        
      }
    })
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }
  return (
    <header className="sticky grid grid-cols-3 bg-white shadow-md top-0 p-5 z-20">
      {/* Left Side*/}
      <div onClick={()=>router.push("/")} className="relative flex items-center h-12 cursor-pointer my-auto">
        <Image
          alt=""
          src={Logo}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* Search Bar */}
      <div className="flex items-center border-2 rounded-full md:shadow-md" >
        <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder="Start your search" className="flex-grow pl-5 bg-transparent outline-none text-xs sm:text-sm md:text-lg text-gray-600 placeholder-gray-400" />
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
      {searchInput &&
        (
          <div className="flex flex-col col-span-3 mx-auto mt-3">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FF5A5F"]}
              onChange={handleSelect}
              />
              <div className="flex border-b mb-4">
                <h2 className="text-2xl font-semibold flex-grow">Number Of Guest</h2>
                <HiUsers size={20} style={{ marginTop:"8px" }}/>
                <input value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)} min={1} type='number' className="w-12 pl-2 text-lg outline-none text-red-400" />
              </div>
              <div className="flex">
                <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                <button onClick={handleSearch} className="flex-grow text-red-400">Search</button>
              </div>
          </div>
        )}
    </header>
  )
}