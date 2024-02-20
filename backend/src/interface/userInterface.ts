
export interface User{
    user_id:string;
    userName:string;
    email:string
    password:string;

}

export interface loginUserDetails{
    email: string,
    password:string,
    
}

export interface loggedUser{

    user_id: string,
    userName:string;
    email: string,
    password:string,
    isAdmin:boolean,
    isWelcomed:boolean,
    isDeleted:boolean
   
}