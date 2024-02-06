import { createPortal } from "react-dom";
import Button from "../Button/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ title, onClose, children }) => {
  const navigate = useNavigate();

  const handleCloseModal = (e) => {
    e.stopPropagation();

    onClose();
  };

  useEffect(() => {
    document.body.classList.add("mobile-nav-open");

    return () => document.body.classList.remove("mobile-nav-open");
  }, []);

  return createPortal(
    <div
      className="fixed top-0 left-0 z-[5000] w-full p-4 h-screen bg-black/50 backdrop-blur-md flex items-center justify-center"
      onClick={handleCloseModal}
    >
      <dialog
        open={true}
        onClose={handleCloseModal}
        className="bg-black w-full md:max-w-[800px] h-auto rounded-lg shadow-lg overflow-hidden block"
      >
        <div className="px-4 py-3 flex justify-between items-center">
          <h1 className="text-color-light font-bold text-lg">{title}</h1>
          <Button
            onClick={handleCloseModal}
            className="hover:bg-color-dark-2 rounded-lg"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
                fill="#9ca3af"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            }
          />
        </div>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
