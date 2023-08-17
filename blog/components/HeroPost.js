"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";

export default function HeroPost({ posts }) {
  return (
    <Splide
      aria-label="Carousel"
      options={{
        rewind: true,
        autoplay: true,
        interval: 5000,
      }}
    >
      {posts
        .map((post) => {
          const { title, slug, excerpt, feature_image } = post;
          return (
            <SplideSlide key={title}>
              <Link
                href={`/${slug}`}
                className="relative flex flex-col gap-4 items-center"
              >
                <img
                  className="w-full h-screen object-cover bg-black opacity-30"
                  src={feature_image}
                  alt={title}
                />
                <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center w-1/2 text-center">
                  <h2 className="card-header font-bold text-xl md:text-4xl">
                    {title}
                  </h2>
                  <p className="card-footer hidden md:block">{excerpt}</p>
                </div>
              </Link>
            </SplideSlide>
          );
        })
        .slice(0, 5)}
    </Splide>
  );
}
