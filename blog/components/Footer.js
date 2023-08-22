import Link from "next/link";
import getPages from "@/lib/getPages";

export default async function Footer() {
  const data = await getPages();
  const { pages } = data;
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 items-center">
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
            <ul className="menu-items grid grid-cols-2">
              {pages.map((page) => {
                const { title, slug } = page;
                return (
                  <li key={slug} className="menu-item">
                    <Link href={slug}>{title}</Link>
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
