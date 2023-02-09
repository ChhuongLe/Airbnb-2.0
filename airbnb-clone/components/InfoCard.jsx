import Image from 'next/image';
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';

export default function InfoCard({ title, type, image, price, rating, neighborhood, room_type, accomodates }) {
  return (
    <div className="flex">
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image src={image} alt="" layout="fill" object="cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{title}</p>
          <AiOutlineHeart size={25} className="cursor-pointer" />
        </div>
        <h4 className="text-xl">{room_type} in {neighborhood}</h4>

        <div className="border-b w-10 pt-2"/>
        <p className="pt-2 text-sm">{}</p>
      </div>
    </div>
  )
}