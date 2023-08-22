"use client";
import { useInView } from "react-intersection-observer";

export default function LazyComponents({ children }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return <div ref={ref}>{inView && children}</div>;
}
