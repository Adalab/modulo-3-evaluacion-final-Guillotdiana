import { Link, useParams } from "react-router-dom"


const Detail = ({getInfo}) => {
    const {id} = useParams()
    const idNumber= parseInt(id)
    const data= getInfo(idNumber)
    console.log(data)
    console.log(id)
  return (
    <div>
        <article className="detail" >
            <div className="detail-container">
              <img className="detail-img" src={data.img} alt={data.name} />
              <div className="detail-box" >
              <h5>{data.name}</h5>
              <p>Status:{data.status==="Alive"? "👽" : "☠️"}</p>
              <p>Specie:{data.specie}</p>
              <p>Origin:{data.origin}</p>
              <p>Episodes:{data.episode.length}</p>
              </div>
            </div>
            <Link className="detail-link" to="/">Volver</Link>
        </article>


    </div>
  )
}

export default Detail