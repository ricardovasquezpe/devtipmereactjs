import { Modal } from "react-bootstrap";
import "./index.scss";

const CustomModal = (props: any) => {
  const { show, handleClose, size, verticalCenter } = props;
  return (
    <Modal onClose={handleClose} size={size} show={show} onHide={handleClose} centered={verticalCenter}>
      {props.children}
    </Modal>
  );
};

export default CustomModal;