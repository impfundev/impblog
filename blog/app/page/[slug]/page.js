import HeaderPost from "@/components/HeaderPost";

import getPages from "@/lib/getPages";
import getPagesBySlug from "@/lib/getPagesBySlug";

export default async function Page({ params }) {
  const data = await getPagesBySlug(params.slug);
  const { pages } = data;
  const page = pages[0];
  return (
    <div className="container mx-auto px-6 py-8 flex flex-col gap-8 md:items-center">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold md:text-center tracking-wider">
        {page.title}
      </h1>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const data = await getPages();
  const { pages } = data;
  return pages.map((page) => [
    {
      slug: page.slug,
    },
  ]);
}
