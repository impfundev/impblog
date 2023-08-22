"use client";

import { useState } from "react";

import { DiscussionEmbed } from "disqus-react";

export default function Comment({ url, id, title }) {
  const [showComment, setShowComment] = useState(false);
  return (
    <>
      {showComment && (
        <div className="w-full md:w-1/2 h-auto">
          <DiscussionEmbed
            shortname="fandomnesia-1"
            config={{
              url: url,
              identifier: id,
              title: title,
              language: "en_US",
            }}
          />
        </div>
      )}
      <button
        className={`btn btn-primary ${showComment && `hidden`}`}
        onClick={() => setShowComment(!showComment)}
      >
        Add Comment
      </button>
    </>
  );
}
