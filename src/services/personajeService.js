import instance from "../config/axios"

export function getAllPers(){

    return instance.get("character/")

    
}

export function getByIdProductos(id){
    return fetch("https://rickandmortyapi.com/api/character/"+id)
    .then(res=>res.json())
}