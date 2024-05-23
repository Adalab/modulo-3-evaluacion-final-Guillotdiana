
import CharacterCard from "./CharacterCard"


const CharacterList = ({filterCharacter,filterRadio }) => {

    const list = filterCharacter.map((item)=> <CharacterCard key={item.id} info={item}/>)
    


  return (
    <div>
        {list}
    </div>
  
  )
}

export default CharacterList