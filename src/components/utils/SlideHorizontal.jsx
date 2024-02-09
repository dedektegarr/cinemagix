const SlideHorizontal = ({ children, className }) => {
  return (
    <div
      className={`overflow-x-auto max-w-full pb-6 overflow-y-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default SlideHorizontal;
