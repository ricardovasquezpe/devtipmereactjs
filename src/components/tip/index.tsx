import "./index.scss";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import codingImage1 from './../../assets/images/coding_1.gif';
import codingImage2 from './../../assets/images/coding_2.gif';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

export function Tip (props: any){
    const [ tipModal, setTipModal ] = useState(false);
    const [ tipAmount, setTipAmount ] = useState(0);
    const [ screen, setScreen ] = useState(1);
    let randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
    const initialOptions = {
        "client-id": "Adt1BlXctAeZQHHV5aDXiLHNQweW3EDCP7NsGKXXhYnQmmkdNhsiTrmWunRWMLgBHChPtYcgvJIiwDTP",
        currency: "USD",
        intent: "capture"
    };

    const onCloseModal = () => {
        setTipModal(false);
    }

    function getRandomImage(){
        if(randomNumber == 1){
            return codingImage1
        }
        return codingImage2;
    }

    const addTip = () => {
        setTipAmount((oldTipAmount:number) => oldTipAmount + 1);
    }

    const onContinue = () => {
        setScreen(2);
    }

    const onBack = () => {
        setScreen(1);
    }

    return (
        <>
            <div className="tip-container" style={{float: "right"}} onClick={() => {setTipModal(true)}}>
                <span className="material-icons">add</span>
            </div>

            <Modal  onClose={onCloseModal} 
                    size={"sm"} 
                    show={tipModal} 
                    onHide={onCloseModal} 
                    centered={true} 
                    onBackdropClick={onCloseModal} 
                    backdrop={true}
                    className={"myTipModal"} >
                {
                    (screen == 1) && 
                        <Modal.Body>
                            <div className="header-container mb-4" >
                                <img src={getRandomImage()} style={{width: "100%"}}/>
                                <div className="super-tip-container text-center" >
                                    <div className="tip-container add-tip" onClick={addTip}>
                                    <p className="tip">${tipAmount}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-container">
                                <p style={{fontSize: "13px", fontStyle: "italic", textAlign: "center"}}>Click on the green circle to add more tips</p>
                                <p className="text-detail" style={{fontSize: "15px", marginTop: "5px"}}>The developer will continue publishing new solutions with your tip!</p>
                            </div>
                            <div className="continue-container float-right" onClick={onContinue}>
                                <p className="m-0">Continue</p>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                        </Modal.Body>
                }
                {
                    (screen == 2) && 
                        <Modal.Body>
                            <div className="detail-container-pay">
                                <p className="text-detail" style={{fontSize: "13px", marginBottom: "20px"}}>You can tip with these payment methods</p>
                                <PayPalScriptProvider options={initialOptions}>
                                    <PayPalButtons style={{ layout: "horizontal" }} />
                                </PayPalScriptProvider>
                            </div>
                            <div className="continue-container float-left" onClick={onBack}>
                                <span className="material-icons">keyboard_arrow_left</span>
                                <p className="m-0">Return</p>
                            </div>
                        </Modal.Body>
                }
                
            </Modal>
        </>
    );
}