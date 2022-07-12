import { useEffect, useState } from "react";
import ConfirmationModal from "../../components/confirmationModal";
import LoadingModal from "../../components/loadingModal";
import { SolutionCard } from "../../components/solutionCard";
import { CardSolution } from "../../models/cardSolution";
import { retrieveName } from "../../services/sessionManagerService";
import { getMysolutions, updateSolution } from "../../services/solutionService";
import { getAmountMyTips } from "../../services/tipService";
import { CONFIRMATION_TYPE_MODAL } from "../../utils/constants";
import "./index.scss";

export function ProfilePage (props: any){
    const [ loading, setLoading ] = useState(false);
    const [ confirmationModal, setConfirmationModal ] = useState(false);
    const [ username, setUsername ] = useState("");
    const [ amountMyTipsVal, setAmountMyTipsVal ] = useState(0);
    const [ mySolutions, setMySolutions ] = useState([] as any);
    const [ solutionIdTemp, setSolutionIdTemp ] = useState("");

    useEffect(() => {
        setLoading(true);
        amountMyTips();
        findMySolutions();
        setUsername(retrieveName());
        setLoading(false);
    }, []);

    const amountMyTips = () => {
        getAmountMyTips().then((response: any) => {
            let data = response.data;
            if(data > 0){
                setAmountMyTipsVal(data);
            }
        });
    }

    const findMySolutions = () => {
        getMysolutions().then((response: any) => {
            let data = response.data;
            let solutions: CardSolution[] = [];
            data.forEach((solution: any) => {
                let content = getOnlyText(solution.content.filter((content: any) => content.type == 1));
                solutions.push(new CardSolution(solution.encriptedId, solution.title, content, new Date(solution.createdAt), solution.status));
            });
            setMySolutions(solutions);
        });
    }

    const getOnlyText = (content: any): string => {
        var text = "";
        content.forEach(function(element: any) {
            text += element.content + " ";
        });
        return text;
    }

    const openStatus = (e: any) => {
        const { value } = e.target;
        setSolutionIdTemp(value);
        setConfirmationModal(true);
    }

    const onAcceptChangeStatus = () => {
        let solutionFind: CardSolution = mySolutions.find((sol: CardSolution) => sol.id == solutionIdTemp);
        
        let body =  {
            status: (solutionFind.status == 1) ? 0 : 1
        };

        updateSolution(solutionIdTemp, body).then((response: any) => {
            const solutionFindIndex = mySolutions.findIndex((sol: CardSolution) => sol.id == solutionIdTemp);
            const updateMysolutions = mySolutions.map(function(item: CardSolution, index: any) {
                if(index === solutionFindIndex){
                    item.status = (item.status == 0) ? 1 : 0;
                }
    
                return item;
            });
            setMySolutions(updateMysolutions);
            setConfirmationModal(false);
        });
    }

    const onDeclineChangeStatus = () => {
        setConfirmationModal(false);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <p className="username">{username}</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-12 text-center">
                        <div className="d-inline-block mr-2">
                            <p className="mb-0">{mySolutions.length}</p>
                            <p className="litle-title">POSTS</p>
                        </div>
                        <div className="d-inline-block ml-2">
                            <p className="mb-0">$ {amountMyTipsVal}</p>
                            <p className="litle-title">Tips</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    {
                        mySolutions.map((sol: CardSolution, index: any) => (
                            <div key={index} className={"col-sm-6 mb-3 card-wrap " + ((sol.status == 0) ? "disabledCard" : "")} style={{"position": "relative"}}>
                                <SolutionCard data={sol}></SolutionCard>
                                <div className="custom-control custom-switch" style={{"position": "absolute", "top": "10px", "right": "10px"}}>
                                    <input id={sol.id} value={sol.id} checked={sol.status == 1} type="checkbox" className="custom-control-input" onChange={openStatus}/>
                                    <label key={index} htmlFor={sol.id} className="custom-control-label"></label>
                                </div>
                            </div>  
                        ))
                    }
                </div>
            </div>

            <LoadingModal show={loading}></LoadingModal>
            <ConfirmationModal  show={confirmationModal} 
                                handleClose={onDeclineChangeStatus} 
                                type={CONFIRMATION_TYPE_MODAL} 
                                text="Are you sure want to change the status?" 
                                title="Confirmation"
                                onClickAccept={onAcceptChangeStatus}>             
            </ConfirmationModal>
        </>
    );
}