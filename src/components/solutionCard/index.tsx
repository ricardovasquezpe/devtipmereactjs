import moment from "moment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export function SolutionCard (props: any){
    let navigate = useNavigate();
    useEffect(() => {
        props.data.shortDateName = moment(props.data.createdAt).format('MMM') + "." + " " + moment(props.data.createdAt).format('DD');
    }, [])


    const goToSolution = () => {
        navigate('/detail-solution/' + encodeURIComponent(props.data.id));
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <a href="javascript:void(0)" onClick={goToSolution}>
                        <h5 className="card-title">
                            {props.data.title}
                        </h5>
                    </a>
                    <p className="card-text">{props.data.description}</p>
                    <div className="card-footer">
                        <p className="align-middle">{props.data.shortDateName}</p>
                    </div>
                </div>
            </div>
        </>
    );
}