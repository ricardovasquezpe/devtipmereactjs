import { useState } from "react";
import InputTags from "../../components/inputTags";
import "./index.scss";

export function NewSolutionPage (props: any){
        
    const [ tags, setTags ] = useState([]);

    const post = () => {
        console.log(tags);
    }

    return (
        <>
            <div className="container newSolution-container">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input type="text" className="input-text" placeholder="TITLE..." maxLength={50} />
                    </div>
                </div>
                <div className="row" >
                    <div className="col-sm-12">
                        
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <span className="material-icons input-icon add-icon">add</span>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <InputTags onChangeTags={setTags}></InputTags>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <button className="btn newSolution-btn-mybutton" style={{width: "200px"}} onClick={post}>POST</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}