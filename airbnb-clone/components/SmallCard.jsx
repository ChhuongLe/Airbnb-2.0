import Image from 'next/image'

export default function smallCard({ img, location, distance }) {
  return (
    <div className="flex flex-row items-center m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 px-2 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} alt="" layout="fill"/>
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}