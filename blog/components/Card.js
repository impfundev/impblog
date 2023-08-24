import Link from "next/link";
import Image from "next/image";

export default function Card({ title, image, url, width, heigh, lazy }) {
  return (
    <Link href={`/${url}`} className="flex flex-col gap-4">
      <Image
        className="w-full h-auto object-cover rounded-2xl"
        priority={lazy ? false : true}
        quality={50}
        src={image}
        sizes="(max-width: 1200px) 100vw, (max-width: 600px) 50vw, 33vw"
        alt={title}
        width={width}
        height={heigh}
        loading={lazy ? "lazy" : "eager"}
      />
      <h2 className="card-header">{title}</h2>
    </Link>
  );
}
