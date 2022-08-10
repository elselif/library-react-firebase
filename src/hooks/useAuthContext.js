import { AuthContext } from "../contexts/AuthContexs";
import { useContext } from "react";

export const useAuthContext=() => {
    const context = useContext(AuthContext);


    if(!context){
        throw Error('Bir hata oluştu,context bulunamadı')
    }

    return context;


} 