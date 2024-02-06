import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";

const Video = () => {
  const { key } = useParams();
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate("..")}>
      <iframe
        className="w-full h-[500px] block"
        src={`https://www.youtube.com/embed/${key}`}
      ></iframe>
    </Modal>
  );
};

export default Video;
