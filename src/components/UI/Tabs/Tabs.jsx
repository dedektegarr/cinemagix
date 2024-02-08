import Button from "../Button/Button";

const Tabs = ({ activeItem, items, className, onSelect }) => {
  const handleOnSelect = (item) => {
    onSelect(item);
  };

  return (
    <div
      className={`w-full flex flex-col gap-2 items-start h-auto bg-color-dark-1 rounded-lg p-4 ${className} sticky top-4 left-0`}
    >
      {items.map((item) => (
        <Button
          onClick={() => handleOnSelect(item)}
          key={item.id}
          className={`w-full transition hover:bg-color-primary hover:text-color-light text-left rounded-lg text-color-dark-3 ${
            activeItem.id === item.id ? "bg-color-primary text-color-light" : ""
          }`}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
