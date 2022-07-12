import { AMOUNT_MY_TIPS } from "../utils/constants";
import httpClient from "./config/httpClient";

export function getAmountMyTips() {
    return httpClient.get(AMOUNT_MY_TIPS);    
}