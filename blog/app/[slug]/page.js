import dynamic from "next/dynamic";
import probe from "probe-image-size";

import getAllPost from "@/lib/getAllPost";
import getPostBySlug from "@/lib/getPostBySlug";

import HeaderPost from "@/components/HeaderPost";
import ContentPost from "@/components/ContentPost";
import RelatedPost from "@/components/RelatedPost";
import Comment from "@/components/Comment";

export default async function Post({ params }) {
  const data = await getPostBySlug(params.slug);
  const allPost = await getAllPost();
  const { posts } = data;
  const post = posts[0];
  const tagName = post.tags.map((tag) => tag.name).slice(0, 1);
  let imageSize = await probe(post.feature_image);

  return (
    <>
      <article className="container mx-auto px-6 py-8 flex flex-col gap-8 items-center">
        <HeaderPost post={post} imageSize={imageSize} />
        <ContentPost content={post.html} />
        <Comment
          url={`http://localhost:3000/${post.slug}`}
          id={post.id}
          title={post.title}
        />
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
