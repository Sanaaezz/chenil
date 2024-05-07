export type authProps = {
    name?: string
    email: string
    password: string
}

export type BoxProps = {
    id: string
    name: string
}
export type CategoryProps = {
    id: string
    name: string
}
export type OwnerProps = {
    id: string
    name: string
}
export interface AnimalProps {
    name: string
    arrival: string
    departure: string
    box: string
    category: string
    owner: string
    image: string
}

export type SingleAnimalProps ={
    id: string
    name:string
    arrival:string
    departure:string
    image:string
    category:{
        id:string 
        name:string
    }
    box:{
        id:string 
        name:string
    }
    user:{
        id:string 
        name:string
        email:string
    }
}

