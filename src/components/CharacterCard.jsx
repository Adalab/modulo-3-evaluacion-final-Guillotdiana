import { Link } from "react-router-dom"

const CharacterCard = ({info}) => {
    return (
      <li className="card_li">
        <article >
          <Link className="link-card" to={`/detail/${info.id}`} >
          <div className="card-info">
            <img className="card-img" src={info.img} alt="" />
              <div className="card-box" >
                <h4 className="card-title">{info.name}</h4>
                <p className="card-title">{info.specie}</p>
              </div>
          </div>
          </Link>
        </article>
      </li>
    )
  }
  
  export default CharacterCard