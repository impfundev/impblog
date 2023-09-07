async function getPostBySlug(id) {
  const res = await fetch(`http://localhost:8000/api/posts/${id}`, {
    next: { revalidate: 1 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getPostBySlug;
