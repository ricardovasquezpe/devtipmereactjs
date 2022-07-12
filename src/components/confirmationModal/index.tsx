import { Modal } from "react-bootstrap";
import "./index.scss";
import { ReactComponent as IconMenu } from './../../assets/images/loading.svg'
import { CONFIRMATION_TYPE_MODAL, ERROR_TYPE_MODAL, SUCCESS_TYPE_MODAL, VERIFY_EMAIL_TYPE_MODAL } from "../../utils/constants";

const ConfirmationModal = (props: any) => {
  const { show, handleClose, onClickAccept, type, text, title } = props;

  return (
    <Modal onClose={handleClose} show={show} onHide={handleClose} size="sm" centered>
      <Modal.Body>
        <div className="container">
          <div className="row">
              <div className="col-sm-12 text-center">
                  <p className={"confirmationModal-title" + ((type == ERROR_TYPE_MODAL) ? "confirmationModal-title-error" : "")}>{title}</p>
              </div>
              <div className="col-sm-12 text-center confirmationModal-description">
                {text}
              </div>
              {
                (type == CONFIRMATION_TYPE_MODAL) && 
                  <div className="col-sm-12 text-center mt-3">
                    <div className="row">
                        <div className="col-sm-6">
                          <button className="confirmationModal-button" onClick={onClickAccept}>Yes</button>
                        </div>
                        <div className="col-sm-6">
                          <button className="confirmationModal-button" onClick={handleClose}>No</button>
                        </div>
                    </div>
                  </div>
              }
              {
                (type == SUCCESS_TYPE_MODAL) && 
                  <div className="col-sm-12 text-center mt-3">
                    <button className="confirmationModal-button" onClick={handleClose}>Ok</button>
                  </div>
              }
              {
                (type == VERIFY_EMAIL_TYPE_MODAL) && 
                  <div className="col-sm-12 text-center mt-3">
                      <button className="confirmationModal-button" onClick={onClickAccept}>Redirect me</button>
                  </div>
              }
          </div>
      </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;