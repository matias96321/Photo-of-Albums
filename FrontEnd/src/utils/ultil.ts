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