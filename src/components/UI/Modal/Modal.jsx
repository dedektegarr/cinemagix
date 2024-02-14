import { createPortal } from "react-dom";
import Button from "../Button/Button";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Modal = ({ title, onClose, children }) => {
  const handleCloseModal = (e) => {
    e.stopPropagation();

    onClose();
  };

  useEffect(() => {
    document.body.classList.add("mobile-nav-open");

    return () => document.body.classList.remove("mobile-nav-open");
  }, []);

  return createPortal(
    <div className="fixed top-0 left-0 z-[5000] w-full h-screen bg-black/50 backdrop-blur-md flex items-center justify-center">
      <motion.dialog
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
        open={true}
        onClose={handleCloseModal}
        className="bg-black w-full max-h-[98%] md:max-w-[800px] min-h-auto rounded-lg shadow-lg overflow-hidden block"
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
        <div className="max-h-[600px] px-4 py-3 overflow-y-auto">
          {children}
        </div>
      </motion.dialog>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
