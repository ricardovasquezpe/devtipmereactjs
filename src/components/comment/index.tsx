import moment from "moment";
import "./index.scss";

export function Comment (props: any){
    
    return (
        <>
            <div className="comment-container mb-3">
                <p className="comment-username">
                    {props.comment.username}
                </p>
                <p className="comment-date">
                    {moment(props.comment.createdAt).format('HH:mm:ss') + " " + moment(props.comment.createdAt).format('MMM') + "." + " " + moment(props.comment.createdAt).format('DD')}
                </p>
                <div className="comment" style={{whiteSpace: "pre-wrap"}}>
                    {props.comment.comment}
                </div>
            </div>

        </>
    );
}