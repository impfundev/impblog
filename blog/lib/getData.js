async function getData() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getData;
