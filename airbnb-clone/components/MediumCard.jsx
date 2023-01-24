import Image from 'next/image'

export default function MediumCard({ image, category }) {
  console.log(category)
  return (
    <div className="rounded-xl cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={image} layout="fill" objectFit="cover" className="rounded-xl" />
      </div>
      <h3 className="text-lg mt-3">{category}</h3>
    </div>
  )
}