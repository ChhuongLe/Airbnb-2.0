export default function InfoCard({ image, location, title, description, star, price, total }) {
  return (
    <div>
      <div>
        <Image src={img} alt="" layout="fill" object="cover" />
      </div>
    </div>
  )
}