import { createContext, useState } from "react";

export const HiddenContext = createContext({})

function HiddenProvider({ children }){
    const [hidden, setHidden] = useState(true);
    
    const toogleHidden = ()=>{
        setHidden(!hidden)
    }

    return(
        <HiddenContext.Provider value={{hidden, toogleHidden }}>
            {children}
        </HiddenContext.Provider>
    )
}

export default HiddenProvider;