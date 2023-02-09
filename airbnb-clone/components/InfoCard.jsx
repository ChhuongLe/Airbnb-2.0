import Image from 'next/image';
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';

export default function InfoCard({ image, location, title, description, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image src={image} alt="" layout="fill" object="cover" />
      </div>
      <div>
        <div>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}