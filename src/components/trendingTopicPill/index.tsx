import "./index.scss";

export function TrendingTopicPill (props: any){
    return (
        <>
            <a href={props.data.link} className={props.className}>
                <span className="badge badge-trending">{props.data.title}</span>
            </a>
        </>
    );
}