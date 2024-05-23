

const getAPiData = (search) => {
  
    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
      .then((response) => response.json())
      .then((data) => {
        const newArray = data.results.map((character) =>{
            return{
                name: character.name,
                img:character.image,
                specie:character.species,
                id:character.id,
                status:character.status,
                origin:character.origin.name,
                episode:character.episode,

            };
        });
      return newArray
    });
}   
export default getAPiData;




//'https://rickandmortyapi.com/api/character/?results=20'