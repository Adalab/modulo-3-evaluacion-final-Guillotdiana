

const Filter = ({handleChangeName,search,handleStatus,status}) => {
   const handleChange =(ev) =>{
     ev.preventDefault();
     handleChangeName (ev.target.value);
     
    };
    const handleRadio=(ev)=>{
      handleStatus (ev.target.value);
   }

  return (
    <form className="form" action="">
      <label htmlFor="name">
     <input className="input-filter" placeholder="Busca tu personaje " type="text" name="name" id="name" onChange={handleChange} value={search}  />
     </label>
     <label className="radio" htmlFor="status1">
    <input   type="radio" name="status" id="status1" value="Alive" onChange={handleRadio} checked={status === "Alive"} /> Vivo
    </label>
    <label className="radio" htmlFor="status2">
     <input  type="radio" name="status" id="status2" value="Dead" onChange={handleRadio} checked={status === "Dead"}/> Muerto
     </label>
     <label className="radio" htmlFor="status3">
     <input  type="radio" name="status" id="status3" value="All" onChange={handleRadio} checked={status === "All"}/> Todos
     </label>
    </form>
  )
}

export default Filter