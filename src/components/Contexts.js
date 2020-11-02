import React, {useState, createContext} from 'react';


export const FilesContext = createContext();
export const DetailsContext = createContext();

export const DetailsProvider = (props) => {
    const [details, setDetails] = useState('')
    return (
        <DetailsContext.Provider value={{details, setDetails}}>
            {props.children}
        </DetailsContext.Provider>
    )
};

export const FilesProvider = (props) => {
    const [category, setCategory] = useState("");
    const [type, setType] = useState("")
    const [num, setNum] = useState('')

    return (
        <FilesContext.Provider value={{category, setCategory, num, setNum, type, setType}}>
            {props.children}
        </FilesContext.Provider>
    );
};

