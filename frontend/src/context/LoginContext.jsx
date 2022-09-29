import React from "react";

export const LoginContext  = React.createContext();

export const LoginContextProvider = ({children})=>{
    const [token,setToken] = React.useState("");
    const [usertype,setUsertype] = React.useState("");
    const [name,setName] = React.useState("");
    const [id,setId] = React.useState("");
    const settoken = (toke,type,id,name)=>{
        setToken(toke);
        setUsertype(type);
        setId(id);
        setName(name);
        console.log("token and type is ",token,usertype,id,name);

    }
    return(
        <LoginContext.Provider value={{ token, usertype, settoken,id,name }}>
            {children}
        </LoginContext.Provider>
    )
}