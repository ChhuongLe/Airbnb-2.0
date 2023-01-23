export default function explore(req, res) {
  res.status(200).json([
    {
      img: "https://cdn1.iconfinder.com/data/icons/san-francisco/100/San_Francisco_copy_5-512.png",
      location: "San Francico, California",
      distance: "20-minute drive",
    },
    {
      img: "https://cdn3.iconfinder.com/data/icons/world-cities-2/256/100-512.png",
      location: "San Jose, California",
      distance: "50-minute drive",
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/united-states-of-america-gradient-freedom-trail/512/San_Diego-512.png",
      location: "San Diego, California",
      distance: "8-hour drive",
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/united-states-of-america-gradient-freedom-trail/512/Hollywood-512.png",
      location: "Los Angeles, California",
      distance: "6-hour drive",
    },
    {
      img: "https://cdn4.iconfinder.com/data/icons/famous-landmarks-of-world-5/64/94-512.png",
      location:"Yosemite National Park",
      distance: "4-hour drive",
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/united-states-of-america-gradient-freedom-trail/512/California-512.png",
      location: "Berekely, California",
      distance: "35-minute drive"
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/landscape-v-1/512/Landscape_Circle_1_512px_00027-512.png",
      location: "Grand Canyon, Arizona",
      distance: "13-hour drive"
    },
    {
      img: "https://cdn0.iconfinder.com/data/icons/miscellaneous-374-color-shadow/128/tahoe_mountain_beach_lake_sea-side_sun_sunset_view_boat_nature-1024.png",
      location: "Lake Tahoe",
      distance: "4-hour drive"
    }
  ]
  )
}
