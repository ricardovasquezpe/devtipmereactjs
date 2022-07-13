import { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onSearch } from "../../store/search/searchAction";
import "./index.scss";

export function SearchInput (props: any){
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
    }, [dispatch]);

    const search = (event:any) => {
        if(event.key === 'Enter'){
            navigate("/search");
            dispatch(onSearch(event.target.value));
        }
    }

    return (
        <>
            <div className="inner-addon right-addon">
                <span className="material-icons" style={{color:"black", fontSize: "20px"}}>search</span>
                <input type="text" placeholder="Search a solution" onKeyUp={search}/>
            </div> 
        </>
    );
}

export default SearchInput;