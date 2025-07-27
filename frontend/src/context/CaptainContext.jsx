import { createContext, useState,useContext, use } from "react";

export const CaptainDataContext = createContext();

export const useCaptain = () => {
    const context = useContext(CaptainContext);
    if(!context) {
        throw new Error("useCaptain must be used within a CaptainProvider");
    }
    return context;
};

const CaptainContext = (captainData) => {
    const [captain, setCaptain] = useState(null);  
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (data) => {
        setCaptain(data);
    };

    const value = {
        captain,
        setCaptain: updateCaptain,
        isLoading,
        setLoading,
        error,
        setError   
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
}

export default CaptainContext;