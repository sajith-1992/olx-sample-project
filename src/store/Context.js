import { createContext, useState } from "react";
export const FirebaseContext = createContext(null)
export const AuthContext =  createContext(null);

export default function Context ({children}){
  const [user,setUser] = useState('HELLO') 
    return(
        <AuthContext.Provider value={{user}}>
             {children}
        </AuthContext.Provider>

    )
} 
