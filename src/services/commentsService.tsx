import { AMOUNT_MY_TIPS, COMMENTS } from "../utils/constants";
import httpClient from "./config/httpClient";

export function getCommentsBySolutionId(id:any) {
    return httpClient.get(COMMENTS, { params: { solutionId: id } });    
}