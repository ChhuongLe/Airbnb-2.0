import Image from 'next/image'

export default function smallCard({ img, location, distance }) {
  return (
    <div className="flex flex-row">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}