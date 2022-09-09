import React from "react";
import '../styles/Header.css'

export default function Header(props){
    let prevPage = props.prevPage;
    let nextPage = props.nextPage;

    return(
        <header className='Header'>
          <img className='logo' src='https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png'></img>         
          <div className='Search-bar'>
            {
                prevPage ?
                <button onClick={()=>{props.Prev()}} className="buttonPage">Back Page</button>
                :
                null
            }
            {
                nextPage ?
                <button onClick={()=>{props.Next()}} className="buttonPage">Next Page</button>
                :
                null
            }
          </div>
        </header>
    );
};

