import moment from "moment";
import { useEffect } from "react";
import "./index.scss";

export function SolutionCard (props: any){

    useEffect(() => {
        props.data.shortDateName = moment(props.data.createdAt).format('MMM') + "." + " " + moment(props.data.createdAt).format('DD');
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <a href="javascript:void(0)">
                        <h5 className="card-title">
                            {props.data.title}
                        </h5>
                    </a>
                    <p className="card-text">Description</p>
                    <div className="card-footer">
                        <p className="align-middle">{props.data.shortDateName}</p>
                    </div>
                </div>
            </div>
        </>
    );
}