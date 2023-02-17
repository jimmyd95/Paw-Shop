// import phone from '../images/phone.png'
// import email from '../images/email.png'

export default function Card(props) {

    let badge
    if(props.openSpots === 0){
        badge = "RAN AWAY"
    }else if(props.location === "Online"){
        badge = "Online"
    }

  return (
    <div className='card'>
        {badge && <div className="badge">{badge}</div>}
        <img src={props.img} alt='domestic cat' className='card--image'/>
        <h3>{props.title}</h3>
        <div className="stats">
            <strong>Stars</strong>
            <p>({props.stats.rating})</p>
            <p>Reviews: {props.stats.reviewCount}</p>
        </div>
        <div className="info">
            <img src='/images/phone.png' alt="phone" className="card--phone"/>
            <p>{props.phone}</p>
        </div>
        <div className="info">
            <img src='/images/email.png' alt="email" className="card--email"/>
            <p>{props.email}</p>
        </div>
    </div>
  )
}