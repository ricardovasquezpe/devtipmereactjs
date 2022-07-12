import { COMMENTS, SAVE_COMMENT } from "../utils/constants";
import httpClient from "./config/httpClient";

export function getCommentsBySolutionId(id:any) {
    return httpClient.get(COMMENTS, { params: { solutionId: id } });    
}

export function saveComment(payload:any) {
    return httpClient.post(SAVE_COMMENT, payload);    
}