export const fetchCategory = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categoriesData`)
  const categories = await res.json();
  return categories;
}

export const fetchExplore = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/exploreData`)
  const exploreData = await res.json();
  return exploreData;
}

export const fetchListings = async (location) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getListing/?location=${location}`)
  const listingData = await res.json();
  return listingData;
}