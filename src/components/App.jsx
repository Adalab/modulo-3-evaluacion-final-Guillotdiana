import "../styles/App.scss";
import { useEffect, useState } from "react";
import getAPiData from "../services/api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";





function App() {
  const [character, setCharacter]= useState([])
  const [search, setSearch]=useState("")
  useEffect(() => {
    getAPiData(search).then((newArray) => { setCharacter(newArray) })
  }, [search])

  const handleChangeName= (value)=>{
     setSearch(value)
  }

  const filterCharacter = character
  .filter((item)=>{
    return item.name
    .toLowerCase().includes(search.toLowerCase())})
  


        

  return (
    <>
    <Filter handleChangeName={handleChangeName} search={search} />
    <section>
      {filterCharacter.length>0?(<CharacterList character={filterCharacter} />):(`el personaje ${search} buscado no existe `)}
      
    </section>
    </>
  )
}

export default App
