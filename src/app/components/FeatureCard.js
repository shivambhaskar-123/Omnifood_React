import React from "react";

const FeatureCard=({icon,title,text})=>{
    return (
       <div className="feature">
                <ion-icon class="feature-icon" name={icon}></ion-icon>
                <p className="feature-title">
                    {title}
                </p>
                <p className="feature-text">
                    {text}
                </p>
            </div> 
    )
}

export default FeatureCard;