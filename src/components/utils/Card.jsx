const Card = ({ className, children }) => {
  return <div className={`rounded-md ${className}`}>{children}</div>;
};

Card.Image = ({ src, className, alt }) => {
  return (
    <img
      effect="blur"
      src={src}
      alt={alt}
      className={`block w-full rounded-lg h-auto object-cover object-center shadow-lg ${className}`}
    />
  );
};

Card.Text = ({ title, subTitle, className }) => {
  return (
    <div className={`p-1 mt-2 ${className}`}>
      <h3 className="font-bold transition group-hover:text-color-primary">
        {title}
      </h3>
      <p className="mt-1 text-sm text-color-dark-3">{subTitle}</p>
    </div>
  );
};

export default Card;
