import React from "react";
const Card =(props)=>{
return(
<>
<div className="cards">
<div className="card">
<img src={props.imgsrc} alt="mypic" className="card_img"/>
<div className="card_info">
<div className="card_category">{props.title}</div>
<h3 className="card_title">{props.sname}</h3>
<a href={props.link}>
<button>PLAY NOW</button>
</a>
</div>
</div>
</div>
</>
)
}
export default Card;