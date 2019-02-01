import React from "react";
function Shade(props)
{
    const {r, g, b} = props;
    let colorArr = [];
    let shade = 0.5
    for(let i = 0; i < 10; ++i)
    {
        let tempColor = `rgb(${r * shade},${g * shade}, ${b * shade})`
        colorArr.push(tempColor) ;
        shade += 0.2;
    }
    return <div style={{marginTop:100, marginBottom:50}}> 
            {colorArr.map(shade => <div style={{height: 90, width: 120, background: shade, display: "inline-block"}}/>)}</div>  
}
export default Shade;