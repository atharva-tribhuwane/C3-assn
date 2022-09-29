import React from "react";

export const LoginContext  = React.createContext();

export const LoginContextProvider = ({children})=>{
    const [token,setToken] = React.useState("");
    const [usertype,setUsertype] = React.useState("");
    const [id,setId] = React.useState("");
    const settoken = (toke,type,id)=>{
        setToken(toke);
        setUsertype(type);
        setId(id);
        console.log("token and type is ",token,usertype,id);

    }
    return(
        <LoginContext.Provider value={{ token, usertype, settoken,id }}>
            {children}
        </LoginContext.Provider>
    )
}