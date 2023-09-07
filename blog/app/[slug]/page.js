import getAllPost from "@/lib/getAllPost";
import getPostBySlug from "@/lib/getPostBySlug";

import HeaderPost from "@/components/HeaderPost";
import ContentPost from "@/components/ContentPost";
// import RelatedPost from "@/components/RelatedPost";
import Comment from "@/components/Comment";

export default async function Post({ params }) {
  const data = await getAllPost();
  const { docs } = data;
  const id = docs.filter((d) => d.slug.includes(params.slug)).map((p) => p.id);
  const post = await getPostBySlug(id);
  return (
    <>
      <article className="px-6 py-8 flex flex-col gap-8 items-center">
        <HeaderPost post={post} />
        <ContentPost content={post.content} />
        <Comment
          url={`http://localhost:3000/${post.slug}`}
          id={post.id}
          title={post.title}
        />
        {/* <RelatedPost allPost={allPost} tagName={catName} /> */}
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const data = await getAllPost();
  const { docs } = data;
  return docs.map((post) => [
    {
      slug: post.slug,
    },
  ]);
}
