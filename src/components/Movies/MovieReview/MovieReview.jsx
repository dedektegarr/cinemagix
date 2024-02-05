import React, { useState } from "react";
import Card from "../../utils/Card";
import { formatDate } from "../../../utils/format-date";

const MovieReview = ({ review }) => {
  const [readMore, setReadMore] = useState(false);

  const { author, content, author_details, created_at } = review;
  const contentMarukup = { __html: content };

  return (
    <Card className="shadow-xl p-4 bg-color-dark-1">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={`https://media.themoviedb.org/t/p/w45_and_h45_face${author_details.avatar_path}`}
          alt="Profile Image"
          className="rounded-full"
        />

        <div>
          <h2>{author}</h2>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-block py-1 px-2 bg-color-primary rounded-md">
              {author_details.rating}
            </span>
            <p className="text-color-dark-3">
              Written by <span className="font-medium">{author}</span> on{" "}
              {formatDate(created_at)}
            </p>
          </div>
        </div>
      </div>

      <div className="text-sm">
        <p
          dangerouslySetInnerHTML={contentMarukup}
          className={`leading-relaxed ${
            readMore ? "line-clamp-none" : "line-clamp-3"
          } `}
        />
        <button
          onClick={() => setReadMore(!readMore)}
          className="mt-1 text-color-dark-3 border-b border-color-dark-3 hover:text-color-primary hover:border-color-primary"
        >
          Read more
        </button>
      </div>
    </Card>
  );
};

export default MovieReview;
