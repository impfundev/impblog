"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";

import { getImageSize } from "react-image-size";
import LazyImage from "./LazyImage";

export default async function HeroPost({ posts }) {
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
          const dimensions = getImageSize(feature_image);
          console.log(dimensions);
          return (
            <>
              <SplideSlide key={title}>
                <div className="relative flex flex-col gap-4 items-center bg-black">
                  <LazyImage
                    className="w-full h-[83vh] object-cover opacity-40"
                    src={feature_image}
                    alt={title}
                    width={dimensions?.width}
                    height={dimensions?.height}
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center w-1/2 text-center text-white">
                    <h2 className="font-bold text-xl md:text-4xl tracking-wider">
                      {title}
                    </h2>
                    <p className="hidden md:block">{excerpt}</p>
                    <Link href={`/${slug}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            </>
          );
        })
        .slice(0, 10)}
    </Splide>
  );
}
