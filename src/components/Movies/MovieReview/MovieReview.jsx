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
        {author_details.avatar_path ? (
          <img
            src={`https://media.themoviedb.org/t/p/w45_and_h45_face${author_details.avatar_path}`}
            alt="Profile Image"
            className="rounded-full"
          />
        ) : (
          <div className="rounded-full p-3 bg-color-dark-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
              fill="white"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
            </svg>
          </div>
        )}

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
