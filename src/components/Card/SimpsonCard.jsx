import "./SimpsonStyles.css";

function SimpsonCard() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Security Specialist",
    avatarURL:
      "https://th.bing.com/th?q=Die+Simpsons+Homer+Simpson&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=de-DE&cc=DE&setlang=de&adlt=moderate&t=1&mw=247",
    hobby: "Bear, TV, Fastfood",
  };

  return (
    <div className="card">
      <img className = "avatar" src={homerSimpson.avatarURL} alt="User Avatar" />
      <p className="card_info">
         <span className="info_title">Fullname:</span> 
        {`${homerSimpson.firstName} ${homerSimpson.lastName}`} </p>
      <p className="card_info"> 
        <span className="info_title">Job:</span>
         {homerSimpson.job}</p>
      <p className="card_info"> 
        <span className="info_title">Hobby:</span> 
        {homerSimpson.hobby}</p>
    </div>
  );
}

export default SimpsonCard;
