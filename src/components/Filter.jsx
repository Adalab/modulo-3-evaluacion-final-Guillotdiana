

const Filter = ({handleChangeName,search}) => {
   const handleChange =(ev) =>{
     ev.preventDefault();
     handleChangeName (ev.target.value);
     
    };

  return (
    <form action="">
     <input placeholder="Rick" type="text" name="name" id="name" onChange={handleChange} value={search}  />
    </form>
  )
}

export default Filter