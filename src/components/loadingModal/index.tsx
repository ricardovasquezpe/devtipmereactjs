import { Modal } from "react-bootstrap";
import "./index.scss";
import { ReactComponent as IconMenu } from './../../assets/images/loading.svg'

const LoadingModal = (props: any) => {
  const { show, handleClose } = props;
  return (
    <Modal onClose={handleClose} show={show} onHide={handleClose} size="sm" centered className="loading" backdropClassName="loadingBackDrop">
      <IconMenu width="5rem" />
    </Modal>
  );
};

export default LoadingModal;