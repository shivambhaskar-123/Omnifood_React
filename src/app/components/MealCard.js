import React from "react";
import image from '../utils/image';
import images from "../utils/image";

const MealCard = () => {
    return (
        <>
            <div className="meal">

                <img className="meal-img" src={image.meal_1} alt="Japanese Gyozas" />
                {/* <!-- wrapping tag into another div so that we can give margin so that background color remain persistant --> */}
                <div className="meal-content">
                    <div className="meal-tags">
                        <span className="tag tag--vegeterian">Vegeterian</span>
                    </div>
                    <p className="meal-title">Japanese Gyozas</p>
                    <ul className="meal-attributes">
                        <li className="meal-attribute">
                            <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                            <span><strong>650</strong> calories</span>
                        </li>
                        <li className="meal-attribute">
                            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
                            <span>Nutriscore &reg; <strong>74</strong></span>
                        </li>
                        <li className="meal-attribute">
                            <ion-icon class="meal-icon" name="star-half-outline"></ion-icon> <span>
                                <strong>4.9</strong> rating (500)
                            </span>

                        </li>
                    </ul>
                </div>
            </div>
            <div class="meal">

                <img class="meal-img" src={images.meal_2} alt="Avocado Salad" />
                {/* <!-- wrapping tag into another div so that we can give margin so that background color remain persistant --> */}
                <div class="meal-content">
                    <div class="meal-tags">
                        <span class="tag tag--vegan">Vegan</span>
                        <span class="tag tag--paleo">Paleo</span>
                    </div>
                    <p class="meal-title">Avocado Salad</p>
                    <ul class="meal-attributes">
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                            <span><strong>400</strong> calories</span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
                            <span>Nutriscore &reg; <strong>92</strong></span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="star-half-outline"></ion-icon> <span>
                                <strong>4.8</strong> rating (548)
                            </span>

                        </li>
                    </ul>
                </div>
            </div>
        </>


    )
}

export default MealCard;