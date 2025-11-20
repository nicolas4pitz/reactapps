
import user from "../assets/cao2.jpg"


const ContactCard = (props) => {
  
  const {id, name, email} = props.contact
  
  return(
    <div className="item">
      <img src={user} className="ui avatar image" alt="User" />
        <div className="content">
          <div className="header">
            {name}
          </div>
          <div>
            {email}
          </div>
          <i style={{color:"red"}} className="trash alternate outline icon" onClick={() => props.clickHandler(id)}></i>
        </div>
      </div>
  )
}

export default ContactCard