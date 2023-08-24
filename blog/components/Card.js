import Link from "next/link";
import Image from "next/image";

export default function Card({ title, image, url, width, heigh }) {
  return (
    <Link href={`/${url}`} className="flex flex-col gap-4">
      <Image
        className="w-full h-auto object-cover rounded-2xl"
        src={image}
        alt={title}
        width={width}
        height={heigh}
      />
      <h2 className="card-header">{title}</h2>
    </Link>
  );
}
