import React from "react";

const PricingCard=({name,price,text,features})=>{
    return (
        <div className={`pricing-plan pricing-plan--${name.toLowerCase()}`}>
                <header className="plan-header">
                    <p className="plan-name">{name}</p>
                    <p className="plan-price"><span>$</span>{price}</p>
                    <p className="plan-text">per month. {text}</p>
                </header>

                 <ul className="list">
                    {features.map(feature=>{
                    return (
                      <li className="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>{feature}</span>
                    </li>  
                    )
                })}
                {name==='Starter' ? (<li className="list-item">
                        <ion-icon class="list-icon" name="close-outline"></ion-icon>
                    </li>):null}
                 </ul>
                <div className="plan-sign-up">
                    <a className="btn btn--full" href="#ctabtn">Start Eating Well</a>
                </div>
            </div>
    )
}

export default PricingCard;