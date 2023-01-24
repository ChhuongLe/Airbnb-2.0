export default function categories(req, res) {
  res.status(200).json([
    {
      img: "https://www.sunset.com/wp-content/uploads/cozy-cabins-carson-ridge-pr-0919-900x500.jpg",
      category: "Outdoor getaways",
    },
    {
      img: 'https://www.livelikeitstheweekend.com/wp-content/uploads/2021/03/TreebonesResort_Autonomous_Tent3-e1652920272644.jpg',
      category: "Unique Stays"
    },
    {
      img: 'https://cdn.houseplansservices.com/content/oanrn2hpo2onko9gr94416qock/w991x660.jpg',
      category: "Entire homes"
    },
    {
      img: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2018/23_July/5+Steps+to+Create+a+Pet+Fire+Safety+Plan-min.jpg',
      category: 'Pets allowed'
    }
  ]
  )
}
