"use client";
import { useInView } from "react-intersection-observer";

export default function LazyImage(props) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className="w-full" ref={ref}>
      {inView && <img {...props} />}
    </div>
  );
}
