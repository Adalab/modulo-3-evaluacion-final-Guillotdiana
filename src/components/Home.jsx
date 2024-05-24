
import CharacterList from "./CharacterList";
import Filter from "./Filter";

const Home = ({handleChangeName,search,filterCharacter,handleStatus,status, }) => {
  return (
    <>
     <main className="main">
         <Filter status={status} handleChangeName={handleChangeName} search={search}  handleStatus={handleStatus}  />
         <section>
          {filterCharacter.length>0?(<CharacterList filterCharacter={filterCharacter} />):(<p className="paragraph">`No hay ningún personaje que coincida con la palabra {search} `</p>) }
             </section>
     </main>
    </>

  )
}

export default Home