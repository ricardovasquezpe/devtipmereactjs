import { FIND_SOLUCTIONS_API_URL, MY_SOLUTIONS, UPDATE_SOLUTION, SOLUTION_DETAIL } from "../utils/constants";
import httpClient from "./config/httpClient";


export function postFindSolutions(payload: any) {
    return httpClient.post(FIND_SOLUCTIONS_API_URL, payload);    
}

export function getMysolutions() {
    return httpClient.get(MY_SOLUTIONS);    
}

export function updateSolution(id: string, data: any) {
    return httpClient.put(UPDATE_SOLUTION + "/" + id + "/status", data);    
}

export function getSolutionById(id: any) {
    return httpClient.get(SOLUTION_DETAIL + "/" + id);    
}