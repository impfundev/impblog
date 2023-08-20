"use client";

import Card from "@/components/Card";
import { useInView } from "react-intersection-observer";

export default function RelatedPost({ allPost, tagName }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log(inView);
  return (
    <>
      <h3 className="text-xl md:text-2xl font-bold">Related</h3>
      <div ref={ref} className="grid md:grid-cols-3 gap-4 items-center">
        {inView &&
          allPost.posts
            .filter((p) => p.tags.map((t) => t.name).includes(tagName[0]))
            .map((p) => {
              return (
                <Card
                  key={p.slug}
                  title={p.title}
                  image={p.feature_image}
                  url={p.slug}
                />
              );
            })}
      </div>
    </>
  );
}
