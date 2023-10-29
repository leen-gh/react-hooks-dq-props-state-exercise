import React,  { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";
import data from "../data"

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {
  const [babyWeight, setWeight] = useState(1);
  const [babyImg, setImg] = useState(normalBaby);
  const idd = props.id
  //console.log(idd)
  const babyData = data[idd]
  //console.log(babyData.name)
  const colorEye = props.eyeColors
  //console.log(colorEye)
  let imgSrc = normalBaby;

  switch (colorEye) {
    case "sun":
      imgSrc = SunBaby
      break
    case "blue":
      imgSrc = BlueBaby
      break
    case "glowing":
      imgSrc = BlueBaby;
  }


  

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    
   (e.target.name === "+") ?
      setWeight(babyWeight+1)
    :
      (babyWeight > 0) && setWeight(babyWeight-1)

  }
  function handleChange(event) {
   
    
  }

  return (
    <li className="hogbabies">
      <h1>Name: {babyData.name}</h1>
      <h3>Weight:{babyWeight}</h3>
      <h3>Hobby:{babyData.hobby}</h3>
      <h4>Eye Color:{colorEye}</h4>

      <button onClick={handleChangeWeight} id ="increase" name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={imgSrc}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
