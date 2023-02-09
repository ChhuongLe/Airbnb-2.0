import { useEffect,useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns';
import { fetchListings } from '../helper.js';
import InfoCard from '../components/InfoCard';

export default function Search() {
  const router = useRouter();
  const {location, startDate, endDate, numberOfGuests} = router.query;
  const [data, setData] = useState([]);

  let formattedLocation = location.toLowerCase().replace(/\s/g, '');

  useEffect(()=> {
    fetch(`http://localhost:3000/api/getListing/${formattedLocation}`)
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        throw res;
      })
      .then(data => {
        setData(data.rows)
      })
      .catch(error =>{
        console.log("error fetching data");
      });
  },[])
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
  const range = `${formattedStartDate} to ${formattedEndDate}`

  console.log(data);
  return(
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-5">
          <p className="text-xs">300+ Stays from {range} - for {numberOfGuests} guest(s)</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          {data.map(el => {
            return (
              <InfoCard
                key={el.id}
                title={el.title}
                type={el.property_type}
                image={el.image_url}
                price={el.price}
                rating={el.rating}
              />
            )
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}

