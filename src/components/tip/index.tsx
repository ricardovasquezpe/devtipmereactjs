import "./index.scss";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import codingImage1 from './../../assets/images/coding_1.gif';
import codingImage2 from './../../assets/images/coding_2.gif';
import {
    PayPalScriptProvider,
    PayPalButtons
} from "@paypal/react-paypal-js";

export function Tip (props: any){
    const [ tipModal, setTipModal ] = useState(false);
    const [ tipAmount, setTipAmount ] = useState(0);
    const [ screen, setScreen ] = useState(1);
    const [ showTipAmount, setShowTipAmount ] = useState(false);
    let randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
    
    useEffect(() => {
        setTipAmount(props.tipTotal);
    }, []);

    const paypalInitialOptions = {
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

    const mouseOverTip = () => {
        setShowTipAmount((oldBoolValue) => !oldBoolValue);
    }

    return (
        <>
            <div className="tip-container" style={{float: "right"}} onClick={() => {setTipModal(true)}} onMouseOver={mouseOverTip} onMouseOut={mouseOverTip}>
                <p className={"tip " + ((showTipAmount) ? "showTipAmount" : "")}>${tipAmount}</p>
                <span className={"material-icons " + ((!showTipAmount) ? "hideTipIcon" : "")}>add</span>
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
                                <PayPalScriptProvider options={paypalInitialOptions}>
                                    <PayPalButtons style={{
                                                        label: 'paypal', 
                                                        layout: 'horizontal', 
                                                        color: 'silver', 
                                                        shape: 'pill'
                                                    }} 
                                                    
                                                    createOrder={(data, actions) => {
                                                        return actions.order
                                                            .create({
                                                                purchase_units: [
                                                                    {
                                                                        amount: {
                                                                            currency_code: "USD",
                                                                            value: tipAmount.toString(),
                                                                        },
                                                                    },
                                                                ],
                                                            })
                                                            .then((orderId) => {
                                                                console.log(orderId);
                                                                return orderId;
                                                            });
                                                    }}/>
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