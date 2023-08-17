async function getPostBySlug(slug) {
  const res = await fetch(
    `https://demo.ghost.io/ghost/api/content/posts/slug/${slug}/?key=${process.env.API_KEY}&include=tags,authors`,
    { next: { revalidate: 1 } }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getPostBySlug;
