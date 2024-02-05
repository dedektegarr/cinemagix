import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ className, children }) => {
  return <div className={`rounded-md ${className}`}>{children}</div>;
};

Card.Image = ({ src, className, alt }) => {
  return (
    <LazyLoadImage
      effect="blur"
      src={src}
      alt={alt}
      className={`w-full rounded-lg h-auto object-cover shadow-lg ${className}`}
    />
  );
};

Card.Text = ({ title, subTitle }) => {
  return (
    <div className="p-1 mt-2">
      <h3 className="font-bold transition group-hover:text-color-primary">
        {title}
      </h3>
      <p className="mt-1 text-sm text-color-dark-3">{subTitle}</p>
    </div>
  );
};

export default Card;
