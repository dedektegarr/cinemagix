const Section = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

Section.Header = ({ title, children }) => {
  return (
    <div className="flex items-center gap-6 py-6">
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default Section;
