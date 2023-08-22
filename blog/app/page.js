import dynamic from "next/dynamic";
import Card from "@/components/Card";
import IconChevronRight from "@/components/icon/ChevronRight";
const HeroPost = dynamic(() => import("@/components/HeroPost"), {
  ssr: false,
});

import getAllPost from "@/lib/getAllPost";

export const metadata = {
  title: "Tech Blog",
  description:
    "Reporting on the business of technology, startups, venture capital funding, and Silicon Valley.",
};

export default async function Home() {
  const data = await getAllPost();
  const { posts } = data;

  return (
    <>
      <HeroPost posts={posts} />
      <div className="text-center text-sm opacity-75 py-1 lg:py-3 animate-pulse">
        Scroll down to see recent post
      </div>
      <div className="container px-4 py-8 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const { title, slug, feature_image } = post;
          return (
            <>
              <Card
                key={title}
                title={title}
                image={feature_image}
                url={slug}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
