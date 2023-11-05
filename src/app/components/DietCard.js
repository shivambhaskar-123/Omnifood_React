import React from "react";

const DietCard=()=>{
    return (
        <div className="diets">
                <h3 className="heading-tertiary">Works with any diet:</h3>
                <ul className="list">
                    <li className="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Pescatarian</span>
                    </li>
                    <li className="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Vegan</span>
                    </li>
                    <li className="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Gluten-free</span>
                    </li>
                    <li className="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Lactose-free</span>
                    </li>
                    <li className="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Keto</span>
                    </li>
                    <li className="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Paleo</span>
                    </li>
                    <li className="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Low FODMAP</span>
                    </li>
                    <li className="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Kid-friendly</span>
                    </li>
                </ul>
            </div>
            )
}

export default DietCard;