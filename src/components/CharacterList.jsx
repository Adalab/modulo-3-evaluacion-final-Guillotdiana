
import CharacterCard from "./CharacterCard"


const CharacterList = ({character}) => {

    const list = character.map((item,i)=> <CharacterCard key={i} info={item}/>)

  return (
    <div>
        {list}
    </div>
  
  )
}

export default CharacterList