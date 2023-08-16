import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

import getData from "@/lib/getData";

export default async function Home() {
  const data = await getData();
  const { articles } = data;

  return (
    <>
      <Navbar />
      <div className="container px-4 py-8 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => {
          const { title, urlToImage } = article;
          return <Card key={title} title={title} image={urlToImage} />;
        })}
      </div>
      <Footer />
    </>
  );
}
