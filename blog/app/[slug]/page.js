import getAllPost from "@/lib/getAllPost";
import getPostBySlug from "@/lib/getPostBySlug";

import HeaderPost from "@/components/HeaderPost";
import ContentPost from "@/components/ContentPost";
import RelatedPost from "@/components/RelatedPost";

export default async function Post({ params }) {
  const data = await getPostBySlug(params.slug);
  const allPost = await getAllPost();
  const { posts } = data;
  const post = posts[0];
  const tagName = post.tags.map((tag) => tag.name).slice(0, 1);

  return (
    <>
      <article className="container mx-auto px-6 py-8 flex flex-col gap-8 items-center">
        <HeaderPost post={post} />
        <ContentPost content={post.html} />
        <RelatedPost allPost={allPost} tagName={tagName} />
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
