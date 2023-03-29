import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

export default function smallCard({ img, location, distance }) {
  const router = useRouter();
  let startDate = new Date();
  let endDate = new Date(startDate.getTime() + (24 * 60 * 60* 1000));

  const handleClick = (location) => {
    router.push({
      pathname: '/search',
      query:{
        location: location,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: 1,
      }
    })
  }
  return (
    <div name={location} className="flex flex-row items-center m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 px-2 hover:scale-105 transition transform duration-200 ease-out" onClick={(event)=>handleClick(event.target.getAttribute('name'))}>
      <div className="relative h-16 w-16">
        <Image name={location} src={img} alt="" layout="fill"/>
      </div>
      <div>
        <h2 name={location}>{location}</h2>
        <h3 name={location}>{distance}</h3>
      </div>
    </div>
  )
}