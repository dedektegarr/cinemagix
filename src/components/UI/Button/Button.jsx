const Button = ({ icon, className, children, href, rounded, ...props }) => {
  let paddings = "py-2 px-3";

  if (rounded) {
    paddings = "p-2 rounded-full";
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${className} ${paddings} flex items-center justify-center gap-2`}
        {...props}
      >
        {icon && icon}
        {children && children}
      </a>
    );
  }

  return (
    <button
      className={`${className} ${paddings} flex items-center center gap-2`}
      {...props}
    >
      {icon && icon}
      {children && children}
    </button>
  );
};

export default Button;
