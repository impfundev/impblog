import Link from "next/link";
import Image from "next/image";

export default function Card({ title, image, url, width, heigh, lazy }) {
  return (
    <Link href={`/${url}`} className="flex flex-col gap-4">
      <Image
        className="w-full h-auto max-h-56 object-cover rounded-2xl"
        priority={lazy ? false : true}
        quality={50}
        src={image}
        sizes="(max-width: 380px) 33vw"
        alt={title}
        width={width}
        height={heigh}
        loading={lazy ? "lazy" : "eager"}
      />
      <h2 className="text-md font-bold tracking-wider">{title}</h2>
    </Link>
  );
}
