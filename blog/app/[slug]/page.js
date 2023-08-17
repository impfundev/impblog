import getAllPost from "@/lib/getAllPost";
import getPostBySlug from "@/lib/getPostBySlug";

export default async function Post({ params }) {
  const data = await getPostBySlug(params.slug);
  const { posts } = data;
  const post = posts[0];

  return (
    <>
      <article className="container mx-auto w-[65vw] py-8 flex flex-col gap-8 items-center">
        <h1 className="card-header font-bold text-2xl md:text-4xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="card-footer text-md md:text-xl">{post.excerpt}</p>
        <img
          className="w-full h-auto object-cover rounded-2xl"
          src={post.feature_image}
          alt={post.title}
        />
        <small
          className="text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: post.feature_image_caption }}
        />
        <div
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const data = await getAllPost();
  const { posts } = data;
  return posts.map((post) => [
    {
      slug: post.slug,
    },
  ]);
}
