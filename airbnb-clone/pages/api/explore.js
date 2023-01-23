export default function explore(req, res) {
  res.status(200).json(
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
      img: "https://cdn1.iconfinder.com/data/icons/united-states-of-america-gradient-freedom-trail/512/San_Diego-512.png",
      location: "San Diego, California",
      distance: "8-hour drive",
    },

  )
}
