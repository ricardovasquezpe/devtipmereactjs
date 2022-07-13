import { useState } from "react";
import InputTags from "../../components/inputTags";
import { Multimedia } from "../../components/multimedia";
import "./index.scss";

export function NewSolutionPage (props: any){
    const [ tags, setTags ] = useState([]);
    const [ multimedia, setMultimedia ] = useState([] as any);

    const post = () => {
        console.log(tags);
        console.log(multimedia);
    }

    return (
        <>
            <div className="container newSolution-container">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input type="text" className="input-text" placeholder="TITLE..." maxLength={50} />
                    </div>
                </div>
                <Multimedia onChangeMultimedia={setMultimedia}></Multimedia>
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