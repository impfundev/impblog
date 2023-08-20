export default function ContentPost({ content }) {
  return (
    <div
      className="prose lg:prose-xl"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
