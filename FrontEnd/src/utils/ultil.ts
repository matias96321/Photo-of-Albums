interface User{
    id:number;
    email:string;
    name:string;
}

export function userParserToJson(data: any): User {
    let user = JSON.parse(data)
    return user
}

export function getUserStorages(): User {
    let objectUser = userParserToJson(localStorage.getItem('@album/usuario'))
    return objectUser
}

export function getDateTime(file: File) {

    const lastModifiedDate = new Date(file.lastModified);

    const y = lastModifiedDate.getFullYear()
    const m = String(lastModifiedDate.getMonth() + 1).padStart(2, '0')
    const d = String(lastModifiedDate.getDate()).padStart(2, '0')

    const hh = String(lastModifiedDate.getHours()).padStart(2, '0')
    const mi = String(lastModifiedDate.getMinutes()).padStart(2, '0')
    const ss = String(lastModifiedDate.getSeconds()).padStart(2, '0')

    // yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + mi + ':' + ss + '.000000';

    return (`${y}-${m}-${d} ${hh}:${mi}:${ss}`)

}

export function formatBytes(bytes: number, decimals: number) {

    if(bytes === 0)
    {
        return "0 Byte";
    }
    var k = 1024; //Or 1 kilo = 1000
    var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    console.log(i);
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i];
}