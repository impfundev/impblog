import IconChevronRight from "@/components/icon/ChevronRight";
import Image from "next/image";
import Link from "next/link";

export default function HeaderPost({ post }) {
  return (
    <div className="flex flex-col gap-4 md:gap-8 items-center">
      <div className="flex flex-col gap-4">
        <nav>
          <ol className="flex gap-1 items-center">
            <li>
              <Link
                aria-label="Back to homepage"
                href="#"
                className="hover:text-blue-600"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
              </Link>
            </li>
            <li>
              <div className="flex gap-1 items-center">
                <IconChevronRight />
                {post.category
                  .map((cat) => {
                    return (
                      <Link
                        key={cat.id}
                        href={`/tag/${cat.name.toLowerCase()}`}
                        className="text-sm font-medium hover:text-blue-600"
                        aria-label="Go to tag page to find related article"
                      >
                        {cat.name}
                      </Link>
                    );
                  })
                  .slice(0, 1)}
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="card-header font-bold text-2xl md:text-4xl lg:text-6xl tracking-wider">
          {post.title}
        </h1>
        <p className="text-md md:text-xl font-medium text-gray-400 tracking-wide">
          {post.excerpt}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Image
          className="w-full h-auto object-cover rounded-2xl"
          src={post.thumbnail.url}
          alt={post.title}
          priority={true}
          quality={65}
          sizes="(max-width: 1200px) 100vw, , (max-width: 600px) 50vw, (max-width: 300px) 33vw"
          width={post.thumbnail.width}
          height={post.thumbnail.height}
        />
        <small
          className="text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: post.thumbnail.alt }}
        />
      </div>
    </div>
  );
}
