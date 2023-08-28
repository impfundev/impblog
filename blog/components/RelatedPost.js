import Card from "@/components/Card";
import probe from "probe-image-size";

export default async function RelatedPost({ allPost, tagName }) {
  return (
    <>
      <h3 className="text-xl md:text-2xl font-bold">Related</h3>
      <div className="grid md:grid-cols-3 gap-6 justify-items-center">
        {allPost.posts
          .filter((p) => p.tags.map((t) => t.name).includes(tagName[0]))
          .map(async (p) => {
            let imageSize = await probe(p.feature_image);
            return (
              <Card
                key={p.slug}
                title={p.title}
                image={p.feature_image}
                width={imageSize.width}
                heigh={imageSize.height}
                url={p.slug}
                lazy={true}
              />
            );
          })}
      </div>
    </>
  );
}
