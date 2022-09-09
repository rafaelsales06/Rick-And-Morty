import React, {useEffect,useContext} from "react";
import { CharactersContext } from "../CharactersContext";
import '../styles/Home.css';
import Header from "./Header";
const initUrl = 'https://rickandmortyapi.com/api/character';
let prevPage = ""
let nextPage = ""


export default function Home(){
    const [Characters,setCharacters] = useContext(CharactersContext);

    async function fetchData(url){
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data.results);
        nextPage = data.info.next;
        prevPage = data.info.prev;
    };

    useEffect(() => {
        fetchData(initUrl)
    },[]);

    function Next(){
        fetchData(nextPage)
    };

    function Prev(){
        fetchData(prevPage)
    };

    return(
        <div>
        <Header prevPage={prevPage} nextPage={nextPage} Prev={Prev} Next={Next} ></Header>
        <div className="Home">
            <div className='Characters-box'>
                {Characters.map(item => 
                <div key={item.id} className='Characters-cards'>
                    <img src={item.image}></img>
                    <h2>{item.name}</h2>
                    <p>{item.status}</p>
                    <div className="Characters-descri">
                        <h4>Specie : {item.species}</h4>
                        <h4>{item.origin.name}</h4>
                    </div>
                </div>)}
            </div>
        </div>
        </div>
    );
}