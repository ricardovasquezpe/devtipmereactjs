import { Modal } from "react-bootstrap";
import "./index.scss";

const CustomModal = (props: any) => {
  const { show, handleClose, size } = props;
  return (
    <Modal onClose={handleClose} size={size} show={show} onHide={handleClose}>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;