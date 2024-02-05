const SlideHorizontal = ({ children }) => {
  return (
    <div className="overflow-x-auto max-w-full pb-6 overflow-y-hidden">
      {children}
    </div>
  );
};

export default SlideHorizontal;
