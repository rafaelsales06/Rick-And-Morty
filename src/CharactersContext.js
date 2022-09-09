import React, {useState, createContext } from "react";

export const CharactersContext = createContext();

export function CharactersProvider(props){

    const [Characters, setCharacters] = useState([])

    return(
        <CharactersContext.Provider value={[Characters,setCharacters]}>
            {props.children}
        </CharactersContext.Provider>
    );
}



