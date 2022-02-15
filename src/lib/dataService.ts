import { browser } from "$app/env";
import { jwtToken } from "./stores/app.store";

export const Post = async (url: string, data: any) => {
    return await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${browserGet('jwt') ? browserGet('jwt') : ''}`
        },
        body: JSON.stringify(data)
    })
        .then(r => checkStatus(r))
        .then(r => r.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(e => handleError(e));
};


export const browserGet = (key: string):string | undefined => {
    if (browser) {
        const item = localStorage.getItem(key);
        if (item) {
            return item;
        }
    }
    return null;
  };

  export const browserSet = (key:string, value:string) : void => {
    if (browser) {
        localStorage.setItem(key, value);
    }
  };



const checkStatus = (request) => {
    console.log('Status Code', request.status);
    return request;
}

const handleError = (e: any) => {
    console.error(e);
}