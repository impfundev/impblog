import IconChevronRight from "@/components/icon/ChevronRight";

export default function HeaderPost({ post }) {
  return (
    <div className="flex flex-col gap-4 md:gap-8 items-center">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <a href="/" className="text-sm text-gray-400">
            Home
          </a>
          <IconChevronRight />
          {post.tags
            .map((tag) => {
              return (
                <a
                  key={tag.slug}
                  href={tag.slug}
                  className="text-sm text-gray-400"
                >
                  {tag.name}
                </a>
              );
            })
            .slice(0, 1)}
          <IconChevronRight />
          <p className="text-sm text-gray-400">{post.title}</p>
        </div>
        <h1 className="card-header font-bold text-2xl md:text-4xl lg:text-6xl tracking-wider">
          {post.title}
        </h1>
        <p className="text-md md:text-xl font-medium text-gray-400 tracking-wide">
          {post.excerpt}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <img
          className="w-full h-auto object-cover rounded-2xl"
          src={post.feature_image}
          alt={post.title}
        />
        <small
          className="text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: post.feature_image_caption }}
        />
      </div>
    </div>
  );
}
