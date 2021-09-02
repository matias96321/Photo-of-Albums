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