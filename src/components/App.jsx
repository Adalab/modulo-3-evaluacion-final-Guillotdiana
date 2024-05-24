import "../styles/App.scss";
import { useEffect, useState } from "react";
import getAPiData from "../services/api";

import local from "../services/local";
import { Link, Route, Routes, matchPath, useLocation } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";





function App() {
  const [character, setCharacter]= useState([])
  const [search, setSearch]= useState(local.get("search", ""))
  const [status, setStatus]= useState("")

  useEffect(() => {
    getAPiData(search).then((newArray) => { setCharacter(newArray) })
  }, [])

  useEffect(() => {
    local.set("search", search)
  }, [search])

  const handleChangeName= (value)=>{
     setSearch(value)
  }

  const handleStatus= (value)=>{
    setStatus(value);
  };

  const filterCharacter = character
  .filter((item)=>{
   return item.name.toLowerCase().includes(search.toLowerCase())})
   .filter((item) =>{
    if(status === "Alive"){
      return item.status === "Alive"
    }else if(status === "Dead"){
      return item.status === "Dead"
    }else{
      return true
    }
   }
     );
   console.log(filterCharacter)
  
 
   
  
  
    const getInfo = (idNumber)=>{
      const characterPositio= character.find((item)=> item.id === idNumber)
      return characterPositio
    }

  return (
    <>
    <header className="header">
      <img className="header-title" src="./public/rickymorti.jpg" alt="" />
    </header>
    <Routes>
    <Route path="/" element={ <Home status={status} handleStatus={handleStatus}  handleChangeName={handleChangeName} search={search} filterCharacter={filterCharacter}/>}/>

    <Route path="/detail/:id" element={<Detail getInfo={getInfo}/>} />
    <Route path="*" element={<>
      <p className="paragraph-home">Esta ruta no existe</p>
      <Link className="link-home" to="/">Home</Link>
      </>}/>
    </Routes>




   </>
  )
}

export default App
