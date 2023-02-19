import {$authHost,$host} from "./indexs";
import jwt_decode from "jwt-decode";


export const createMark=async (marks)=>{

    const {data}=await $authHost.post('api/marks',marks)
    localStorage.setItem('token',data.token)
    return data

}

export const fetchMark=async ()=>{

    const {data}=await $host.get('api/marks')

    return data
}


export const createmodel=async (model)=>{

    const {data}=await $authHost.post('api/models',model)
    localStorage.setItem('token',data.token)
    return data

}

export const fetchModel=async ()=>{

    const {data}=await $host.get('api/models ',)

    return data
}



export const createCar=async (car)=>{

    const {data}=await $authHost.post('api/cars',car)

    return data

}

export const fetchCar=async (markId, modelId, page, limit= 5)=>{

    const {data}=await $host.get('api/cars',{params: {
            markId,modelId, page, limit}})

    return data
}


export const fetchOneCar=async (id)=>{

    const {data}=await $host.get('api/cars/' + id)

    return data
}



