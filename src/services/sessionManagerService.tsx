import moment from 'moment';

const jsonWebToken:string = 'token';
const expireTime:string = 'expireAt';
const email:string = 'email';
const name:string = 'name';

export function storeNewToken(token: string, emailData: string, nameData: string) {
    localStorage.setItem(jsonWebToken, token);
    localStorage.setItem(expireTime, moment().add(24, 'hours').unix().toString());
    localStorage.setItem(email, emailData);
    localStorage.setItem(name, nameData);
}

export function retrieveToken() {
    let storedToken = localStorage.getItem(jsonWebToken);
    if(!storedToken) return '';
    return storedToken;
}

export function clearSession(){
    localStorage.clear()
}

export function retrieveExpireTime(){
    let expireTimeRes = localStorage.getItem(expireTime);
    if(!expireTimeRes) return '';
    return new Date(Number(expireTimeRes) * 1000)
}

export function retrieveEmail(){
    let storedEmail = localStorage.getItem(email);
    if(!storedEmail) return '';
    return storedEmail;
}

export function retrieveName(){
    let storedName = localStorage.getItem(name);
    if(!storedName) return '';
    return storedName;
}

export function verifyAuth(){
    let storedToken = localStorage.getItem(jsonWebToken);
    if(!storedToken){
        return false
    }
    var now = new Date();
    if(now > retrieveExpireTime()){
        return false;
    }

    return true;
}