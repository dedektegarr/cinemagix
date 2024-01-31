const Button = ({ icon, className, children, rounded, ...props }) => {
  let paddings = "py-2 px-3";

  if (rounded) {
    paddings = "p-2 rounded-full";
  }

  return (
    <button
      className={`${className} ${paddings} flex items-center justify-center gap-2`}
      {...props}
    >
      {icon && icon}
      {children && children}
    </button>
  );
};

export default Button;
