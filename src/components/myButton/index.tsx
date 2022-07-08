import "./index.scss";

export function MyButton (props: any){
    const onButtonClick = () => {
        if(props.onClickAction){
         props.onClickAction();
        }
    }

    return (
        <>
            <button className="myButton" type={props.type} onClick={onButtonClick}>{props.text}</button>
        </>
    );
}