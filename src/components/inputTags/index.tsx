import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./index.scss";

const InputTags = (props: any) => {
  const [ tags, setTags ] = useState([]);
  const [ inputTag, setInputTag ] = useState("");

  const handleFormValueChange = (event:any) => setInputTag(event.target.value);

  const insertTag = (event:any) => {
    if(event.key === 'Enter'){
      if(event.target.value.replace(/\s/g, "") == ""){
        return;
      }
  
      setTags((currentTags:any) => currentTags.concat(event.target.value.trim()));
      props.onChangeTags((currentTags:any) => currentTags.concat(event.target.value.trim()));
      setInputTag("");
    }
  }


  const removeTag = (index:any) => {
    setTags((currentTags:any) => currentTags.filter((tag: any, tagIndex: any) => index !== tagIndex));
    props.onChangeTags((currentTags:any) => currentTags.filter((tag: any, tagIndex: any) => index !== tagIndex));
  }
  
  return (
    <div className="inputTags-container-master">
      {
        tags.map((tag: any, index: any) => (
          <div className="container-tags" key={index}>
              <span className="badge inputTags">
                  <p className="inputTags-text">{tag}</p> 
                  <span className="material-icons inputTags-remove" onClick={() => {removeTag(index)}}>close</span>
              </span>
          </div>
        ))
      }
      
      <input type="text" value={inputTag} onChange={(event) => handleFormValueChange(event)} className="inputTags-input" placeholder="Insert a tag or topic" maxLength={20} onKeyUp={insertTag}/>
  </div>
  );
};

export default InputTags;