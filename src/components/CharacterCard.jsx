
const CharacterCard = ({info}) => {
    return (
      <article>
          <img src={info.img} alt="" />
          <h4>{info.name}</h4>
          <p>{info.specie}</p>
      </article>
    )
  }
  
  export default CharacterCard