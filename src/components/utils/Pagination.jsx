import Button from "../UI/Button/Button";

const Pagination = ({ activePage, totalPage, onChangePage }) => {
  const handlePrevPage = () => {
    if (activePage <= 1) return;
    onChangePage(activePage - 1);
  };
  const handleNextPage = () => {
    if (activePage >= totalPage) return;
    onChangePage(activePage + 1);
  };

  return (
    <div className="flex gap-4 items-center">
      <Button
        disabled={activePage <= 1}
        onClick={handlePrevPage}
        rounded={true}
        className="bg-color-dark-1 hover:bg-color-primary disabled:bg-color-dark-1"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="white"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        }
      />

      <p className="text-sm">
        <span>{activePage}</span> of <span>{totalPage}</span>
      </p>

      <Button
        disabled={activePage >= totalPage}
        onClick={handleNextPage}
        rounded={true}
        className="bg-color-dark-1 hover:bg-color-primary disabled:bg-color-dark-1"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="white"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        }
      />
    </div>
  );
};

export default Pagination;
