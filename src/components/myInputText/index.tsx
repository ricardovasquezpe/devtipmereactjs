import "./index.scss";

export function MyInputText(props: any){
    return (
        <>
            <input className="myInput"  {...props.reactForm && props.reactForm(props.name, props.rules)} type={props.type} placeholder={props.placeHolder} />
        </>
    );
}