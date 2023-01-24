export const fetchCategory = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/exploreData`)
  const categories = await res.json();
  return categories;
}