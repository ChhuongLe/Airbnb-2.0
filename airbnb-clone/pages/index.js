import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({exploreData, categories}) {
  return (
    <div>
      <Head>
        <title>Airbnb 2.0</title>
      </Head>
      <Header />
      <Banner />

      <main className="relative max-w-7xl mx-auto px-8 sm:px-16">
        {/* Small Cards component */}
        <section className="pt-6 pb-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grids-col-4">
            {exploreData.map((item, i)=>{
              return (
                <SmallCard key={i} img={item.img} location={item.location} distance={item.distance} />
              );
            })}
          </div>
        </section>
        {/* Medium Cards component */}
        <section>
            <h2 className="text-4xl font-semibold py-8 round">Live Anywhere</h2>
            <div className="flex space-x-4 overflow-x-scroll scrollbar-hide p-3 -ml-3">
              {categories.map((item)=>{
                return (
                  <MediumCard image={item.img} category={item.category} />
                );
              })}
            </div>
        </section>
        {/* Large Cards component */}
        <section>
              <LargeCard
                img="https://links.papareact.com/4cj"
                title="the Greatest Outdoors"
                description="Wishlists curated by Airbnb"
                buttonText="Get Inspired"
              />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3000/api/explore")
  .then((res)=> res.json())

  const categories = await fetch("http://localhost:3000/api/categories")
  .then((res)=> res.json())

  return {
    props:{
      exploreData,
      categories,
    }
  }
}
