
import CharacterCard from "./CharacterCard"


const CharacterList = ({filterCharacter,filterRadio }) => {

    const list = filterCharacter.map((item)=> <CharacterCard key={item.id} info={item}/>)
    


  return (
    <ul className="card">
        {list}
    </ul>
  
  )
}

export default CharacterList

