
export const setStorage = (key, data) => {

    if (!key || !data){
        console.log("Set data to session fail key: " + key + "  data: " + data);
    }else{
        sessionStorage.setItem(key,  data);
    }
}

export const getStorage = (key) => {

    if (!key){
        console.log("Get data from session fail key: " + key);
    }else{
        sessionStorage.getItem(key);
    }
}

export function clearStorage(){
    sessionStorage.clear();
}

