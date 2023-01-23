import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData}) {
  return (
    <div>
      <Head>
        <title>Airbnb 2.0</title>
      </Head>
      <Header />
      <Banner />

      <main className="relative max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-4">
            {exploreData.map((item, i)=>{
              return (
                <SmallCard key={i} img={item.img} location={item.location} distance={item.distance} />
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3000/api/explore")
  .then((res)=> res.json())

  return {
    props:{
      exploreData
    }
  }
}
