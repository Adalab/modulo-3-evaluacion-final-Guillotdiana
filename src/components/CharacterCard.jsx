import { Link } from "react-router-dom"

const CharacterCard = ({info}) => {
    return (
      <article className="card">
        <Link className="link-card" to={`/detail/${info.id}`} >
        <div className="card-info">
          <img className="card-img" src={info.img} alt="" />
            <div >
              <h4 className="card-title">{info.name}</h4>
              <p className="card-title">{info.specie}</p>
            </div>
        </div>
        </Link>
      </article>
    )
  }
  
  export default CharacterCard