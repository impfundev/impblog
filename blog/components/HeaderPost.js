import IconChevronRight from "@/components/icon/ChevronRight";
import Image from "next/image";

export default function HeaderPost({ post, imageSize }) {
  return (
    <div className="flex flex-col gap-4 md:gap-8 items-center">
      <div className="flex flex-col gap-4">
        <nav>
          <ol className="flex gap-1 items-center">
            <li>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
              </a>
            </li>
            <li>
              <div className="flex gap-1 items-center">
                <IconChevronRight />
                {post.tags
                  .map((tag) => {
                    return (
                      <a
                        key={tag.slug}
                        href={tag.slug}
                        className="text-sm font-medium text-gray-400 hover:text-blue-600"
                      >
                        {tag.name}
                      </a>
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
          src={post.feature_image}
          alt={post.title}
          width={imageSize.width}
          height={imageSize.height}
        />
        <small
          className="text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: post.feature_image_caption }}
        />
      </div>
    </div>
  );
}
