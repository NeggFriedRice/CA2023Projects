import { Link } from 'react-router-dom'

const ShowUpdate = ({ updates }) => {
  return (
    <>
    <div className="log-container">
      <ul>
        {updates.map((update, index) => 
          <li key={index}>
            <Link to={`updates/${index}`} className="update-link">
              <h3>{index + 1}. {update.activity} ${update.cost}</h3>
            </Link>
            <p className="update-display">{update.date}</p>
          </li>)}
      </ul>
    </div>
    </>
    
  )
}

export default ShowUpdate