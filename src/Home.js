import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./style.css";
const Home = ()=>{
return(
<>
<h1 className="heading_style">NEW SONGS LIST IN 2023</h1>
{Sdata.map((val) =>{
return(
<Card
imgsrc={val.imgsrc}
title={val.title}
sname={val.sname}
link={val.link}
/>
)
}
)
}
</>
)
}
export default Home;