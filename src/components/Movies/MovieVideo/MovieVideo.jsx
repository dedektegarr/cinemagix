import React from "react";
import Card from "../../utils/Card";

const MovieVideo = ({ video }) => {
  return (
    <Card className="relative min-w-[300px] max-h-[300px] shadow-lg overflow-hidden group">
      <div className="flex items-center justify-center opacity-0 group-hover:opacity-50 absolute top-0 left-0 w-full h-full bg-black z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="60"
          viewBox="0 -960 960 960"
          width="60"
          fill="white"
        >
          <path d="M320-200v-560l440 280-440 280Z" />
        </svg>
      </div>
      <Card.Image
        src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}
      />
    </Card>
  );
};

export default MovieVideo;
