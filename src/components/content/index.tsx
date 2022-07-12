import moment from "moment";
import { CODE_TYPE_CONTENT, IMAGE_TYPE_CONTENT, TEXT_TYPE_CONTENT } from "../../utils/constants";
import "./index.scss";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export function Content (props: any){

    function getHeight(){
        var numLines = props.content.split(/\r\n|\r|\n/).length;
        if(numLines < 20){
            return numLines * 20 + "px";
        }

        return "400px";
    }
    
    return (
        <>
            {
                (props.type == TEXT_TYPE_CONTENT) && 
                    <div className="message" style={{whiteSpace: "pre-wrap"}}>{props.content}</div> 
            }

            {
                (props.type == IMAGE_TYPE_CONTENT) && 
                    <img src={props.content} style={{width: "100%"}}/>
            }

            {
                (props.type == CODE_TYPE_CONTENT) && 
                    <div style={{marginTop: "30px"}}>
                        <AceEditor
                            mode="java"
                            theme="monokai"
                            name="coding"
                            editorProps={{ $blockScrolling: true }}
                            readOnly={true}
                            fontSize={15}
                            value={props.content}
                            width="100%"
                            height={getHeight()}
                        />
                    </div>
            }
        </>
    );
}