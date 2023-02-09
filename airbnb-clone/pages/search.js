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
  const [numItems, setNumItems] = useState(10);

  let formattedLocation = location.toLowerCase().replace(/\s/g, '');
  let lengthOfStay = 0;

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
  },[]);

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
  const range = `${formattedStartDate} to ${formattedEndDate}`

  const sDate = new Date(startDate)
  const eDate = new Date(endDate)

  let numDays = (eDate.getTime() - sDate.getTime()) / (1000 * 3600 * 24);

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
          {data.slice(0, numItems).map(el => {
            return (
              <InfoCard
                key={el.id}
                title={el.title}
                type={el.property_type}
                image={el.image_url}
                price={el.price}
                rating={el.rating}
                neighborhood={el.neighborhood}
                room_type={el.room_type}
                accomodates={el.accomodates}
                guests={numberOfGuests}
                beds={el.num_beds}
                bedrooms={el.num_bedrooms}
                numDays={numDays}
              />
            )
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}

