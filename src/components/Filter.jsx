

const Filter = ({handleChangeName,search,handleStatus,status}) => {
   const handleChange =(ev) =>{
     ev.preventDefault();
     handleChangeName (ev.target.value);
     
    };
    //const handleRadio=(ev)=>{
      //handleStatus (ev.target.value);
   // }

  return (
    <form className="form" action="">
     <input className="input-filter" placeholder="Rick" type="text" name="name" id="name" onChange={handleChange} value={search}  />
    {/*} <input type="radio" name="status" id="status1" value="alive" onChange={handleRadio} checked={status === "alive"} /> Vivo
     <input type="radio" name="status" id="status1" value="dead" onChange={handleRadio} checked={status === "dead"}/> Muerto*/}
    </form>
  )
}

export default Filter