import { useState } from "react";
import "./index.scss";

export function Multimedia (props: any){
    const [ multimedia, setMultimedia ] = useState([] as any);

    const addMultimedia = () => {
        setMultimedia((currentMultimedia: any) => currentMultimedia.concat({
            "order": currentMultimedia.length + 1
        }));

        props.onChangeMultimedia((currentMultimedia: any) => currentMultimedia.concat({
            "order": currentMultimedia.length + 1
        }));
    }
    
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    {
                        multimedia.map((mult: any, index: any) => (
                            <div className="mb-3">
                                <div className="container-multimedia">
                                    <div className="center">
                                        <input type="file" accept='image/*' style={{display: "none"}} />

                                        <span className="material-icons input-icon">text_fields</span>
                                        <span className="material-icons input-icon ml-3">image</span>
                                        <span className="material-icons input-icon ml-3">code</span>
                                        <span className="material-icons input-icon-remove ml-3">delete</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-12">
                    <div className="text-center">
                        <span className="material-icons input-icon add-icon" onClick={addMultimedia}>add</span>
                    </div>
                </div>
            </div>
        </>
    );
}