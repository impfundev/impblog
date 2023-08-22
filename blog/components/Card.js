import Link from "next/link";
import dynamic from "next/dynamic";
const LazyImage = dynamic(() => import("./LazyImage"), {
  ssr: false,
});

export default function Card({ title, image, url }) {
  return (
    <Link href={`/${url}`} className="flex flex-col gap-4">
      <LazyImage
        className="w-full h-56 object-cover rounded-2xl"
        src={image}
        alt={title}
      />
      <h2 className="card-header">{title}</h2>
    </Link>
  );
}
