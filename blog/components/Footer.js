import Link from "next/link";
import getPages from "@/lib/getPages";
import getAllTags from "@/lib/getAllTags";
import IconChevronRight from "./icon/ChevronRight";

export default async function Footer() {
  const data = await getPages();
  const allTag = await getAllTags();
  const { pages } = data;
  const { tags } = allTag;
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 items-start">
      <div className="card-body">
        <h1 className="card-header">Tech Blog</h1>
        <div className="card-footer">
          <p className="text-content2">
            Reporting on the business of technology, startups, venture capital
            funding, and Silicon Valley.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <nav className="menu p-4 rounded-md">
          <section className="menu-section">
            <span className="menu-title">Company</span>
            <ul className="menu-items">
              {pages.map((page) => {
                const { title, slug } = page;
                return (
                  <li key={slug} className="menu-item">
                    <IconChevronRight />
                    <Link href={`/page/${slug}`}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </nav>
        <nav className="menu p-4 rounded-md">
          <section className="menu-section">
            <span className="menu-title">Topics</span>
            <ul className="menu-items">
              {tags.map((tag) => {
                const { name, slug } = tag;
                return (
                  <li key={slug} className="menu-item">
                    <IconChevronRight />
                    <Link href={`/tag/${slug}`}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </nav>
      </div>
    </div>
  );
}
