import { createContext, useState } from "react";
export const FirebaseContext = createContext(null)
export const AuthContext =  createContext(null);

export default function context ({children}){
  const [user,setUser] = useState(null) 
    return(
        <AuthContext.provider value={{user}}>
             {children}
        </AuthContext.provider>

    )
} 
