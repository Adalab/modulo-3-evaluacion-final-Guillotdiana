import { Link, useParams } from "react-router-dom"


const Detail = ({getInfo}) => {
    const {id} = useParams()
    const idNumber= parseInt(id)
    const data= getInfo(id)
 
  return (
    <div>
        <article >
            <img src={data.img} alt={data.name} />
            <h5>{data.name}</h5>
            <p>Status:{data.status==="Alive"? "👽" : "☠️"}</p>
            <p>Specie:{data.specie}</p>
            <p>Origin:{data.origin}</p>
            <p>Episodes:{data.episode.length}</p>
            <Link to="/">Volver</Link>
        </article>


    </div>
  )
}

export default Detail