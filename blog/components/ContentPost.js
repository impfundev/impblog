import { slateToHtml, payloadSlateToHtmlConfig } from "@slate-serializers/html";

export default function ContentPost({ content }) {
  return (
    <div
      className="prose lg:prose-xl"
      dangerouslySetInnerHTML={{
        __html: slateToHtml(content, payloadSlateToHtmlConfig),
      }}
    />
  );
}
