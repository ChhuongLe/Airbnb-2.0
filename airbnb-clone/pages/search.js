import { useEffect,useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns';
import { fetchListings } from '../helper.js';
import InfoCard from '../components/InfoCard';
import MapBox from '../components/MapBox';
import { fetchLocation } from '../helper.js'

export default function Search() {
  const router = useRouter();
  const {location, startDate, endDate, numberOfGuests} = router.query;
  const [data, setData] = useState([]);
  const [startItems, setStartItems] = useState(0);
  const [endItems, setEndItems] = useState(10);

  let formattedLocation = location.toLowerCase().replace(/\s/g, '');
  let lengthOfStay = 0;

  useEffect(()=> {
    fetchLocation(formattedLocation)
      .then(data=>{
        setData(data.rows)
      })
      .catch(error=>{
        console.log("error fetching data")
      });
  },[]);

  const formattedStartDate = format(new Date(startDate), "MMM dd, yyyy");
  const formattedEndDate = format(new Date(endDate), "MMM dd, yyyy")
  const range = `${formattedStartDate} to ${formattedEndDate}`

  const sDate = new Date(startDate)
  const eDate = new Date(endDate)

  let numDays = (eDate.getTime() - sDate.getTime()) / (1000 * 3600 * 24);

  const moveForward = () => {
    setStartItems(startItems-10);
    setEndItems(endItems-10);
  }

  const movePrev = () => {
    setStartItems(startItems+10);
    setEndItems(endItems+10);
  }

  return(
    <div className="h-full">
      <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`} />
      <main className="flex">
        <div className="flex-grow-1 xl:w-9/12 pt-14 px-5">
          <p className="text-xs">300+ Stays from {range} - for {numberOfGuests} guest(s)</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          {data.slice(startItems, endItems).map(el => {
            return (
              <InfoCard
                key={el.id}
                title={el.title}
                type={el.property_type}
                image={el.picture_url}
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
          {/* Add page numbers */}
          <div>
            <button onClick={moveForward}>Previous</button>
            <button onClick={movePrev}>Next</button>
          </div>
        </div>
        <div className="hidden xl:inline-flex xl:sticky xl:top-0 xl:h-screen xl:max-w-[600px]">
          <MapBox />
        </div>
      </main>
      <Footer />
    </div>
  )
}

