import Image from 'next/image';
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';

export default function InfoCard({ title, type, image, price, rating, neighborhood, room_type, accomodates, guests, beds, bedrooms, numDays }) {
  let stringPrice = price.slice(1, price.length);
  const total = stringPrice*numDays*guests;
  const pricePerNight = stringPrice*guests;
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image src={image} alt="" layout="fill" object="cover" className="rounded-2xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{title}</p>
          <AiOutlineHeart size={25} className="cursor-pointer" />
        </div>
        <h4 className="text-xl">{room_type} in {neighborhood}</h4>
        <div className="border-b w-10 pt-2"/>
        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {guests} guest • {beds} bed • {bedrooms} bedroom • {bedrooms} bathroom • Wifi • Kitchen • Washing Machine
        </p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <AiFillStar />
            {rating}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">${pricePerNight}/night</p>
            <p className="text-right font-extralight">${total} total</p>
          </div>
        </div>
      </div>
    </div>
  )
}