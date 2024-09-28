import axios from "axios"
 

export const login = async (user:any) =>{
    let url = process.env.NEXT_PUBLIC_TODO_BACK_END as string
    url = url+"/login";
    try{
        return await axios.post(url,user);
    }catch(e){
        return e;
    }
}