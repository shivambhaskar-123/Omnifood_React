import React, { useEffect } from "react";
import MealCard from "./MealCard";
import DietCard from "./DietCard";
import TestimonialBox from "./TestimonialBox";
import TestimonialGalleryImage from "./TestimonialGalleryImage";
import PricingCard from "./PricingCard";
import FeatureCard from "./FeatureCard";
import Footer from "./Footer";
import images from '../utils/image';
import { testimonials, pricingCards, featureCard } from "../utils/constant/constant";

const Homepage = () => {

    useEffect(() => {
        const headerClickByNavButtonEl = document.querySelector('.header');

        const handleClickEvent = (event) => {
            if (event.target.tagName === 'ION-ICON') {
                document.querySelector('.header').classList.toggle('nav--open');
            }
        }
        headerClickByNavButtonEl.addEventListener('click', handleClickEvent);

        ////////////////////
        

    }, []);


    return (
        <>
            <section className="section-hero">
                <div className="hero">
                    <div className="hero-text-box">
                        <h1 className="heading-primary">A healthy meal delivered to your door, every single day</h1>
                        <p className="hero-description">
                            The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your
                            personal tastes and nutritional needs.
                        </p>
                        <a className="btn btn--full margin-right-sm" href="#cta">Start Eating Well</a>
                        <a className="btn btn--outline" href="#how">Learn more &darr;</a>
                        <div className="delivered-meals">
                            <div className="delivered-imgs">
                                {/* {console.log(images)} */}
                                <img src={images.customer_1} alt="Customer " />
                                <img src={images.customer_2} alt="Customer " />
                                <img src={images.customer_3} alt="Customer " />
                                <img src={images.customer_4} alt="Customer " />
                                <img src={images.customer_5} alt="Customer " />
                                <img src={images.customer_6} alt="Customer " />
                            </div>
                            <p className="delivered-text"> <span>250,000+</span> meals delivered last year!</p>
                        </div>
                    </div>
                    <div className="hero-img-box">
                        <picture>
                            <source srcset={images.heroWebp} type="image/webp" />
                            <source srcset={images.heroPng} type="image/png" />
                            {/* the above are the source of image which will replace the source tag of img according to browser which of them it supports and in image tag we will have the fallback inmage incase something goes wrong */}
                            <img className="hero-img" src={images.heroPng} alt="Womenn enjoying food,meals in storage container" />
                        </picture>
                    </div>
                </div>

            </section>

            <section className="section-featured">
                <div className="container">
                    <h2 className="heading-featured-in">
                        As featured In
                    </h2>
                    <div className="logos">
                        <img src={images.techLogo} alt="Techcrunch logo" />
                        <img src={images.businessLogo} alt="Business insider logo" />
                        <img src={images.newYorkLogo} alt="The new york times logo" />
                        <img src={images.forbesLogo} alt="Forbes logo" />
                        <img src={images.usaLogo} alt="USA today logo" />
                    </div>
                </div>
            </section>

            <section className="section-how" id="how">
                {/* there is background color on section-how therefore we will wrap the content in another div otherwise margin on .container class remove the backgrounde */}
                <div className="container">
                    <span className="sub-heading">
                        How it works?
                    </span>
                    <h2 className="heading-secondary">
                        Your daily dose of health in 3 simple steps
                    </h2>
                </div>

                <div className="container grid grid--2--cols grid--center--vtl">
                    {/* Step 1  */}
                    <div className="step-text-box">
                        <p className="step-number">01</p>
                        <h3 className="heading-tertiary">
                            Tell us what you like (and what not)
                        </h3>
                        <p className="step-description">
                            Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized
                            weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no
                            matter what diet you follow!
                        </p>

                    </div>
                    <div className="step-img-box">
                        <img className="step-img" src={images.app_1} alt="iphone app prefrence selection screen" />
                    </div>

                    {/* <!-- Step 2 --> */}
                    <div className="step-img-box">
                        <img className="step-img" src={images.app_2} alt="iphone app prefrence day selection screen" />
                    </div>

                    <div className="step-text-box">
                        <p className="step-number">02</p>
                        <h3 className="heading-tertiary">
                            Approve your weekly meal plan:
                        </h3>
                        <p className="step-description">
                            Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients,
                            swap entire meals, or even add your own recipes.
                        </p>

                    </div>
                    {/* <!-- Step 3 --> */}

                    <div className="step-text-box">
                        <p className="step-number">03</p>
                        <h3 className="heading-tertiary">
                            Receive meals at convenient time
                        </h3>
                        <p className="step-description">
                            Best chefs in town will cook your selected meal every day, and we will deliver it to your door
                            whenever works best for you. You can change delivery schedule and address daily!
                        </p>

                    </div>
                    <div className="step-img-box">
                        <img className="step-img" src={images.app_3}
                            alt="iphone app location and time selection screen" />
                    </div>
                </div>
            </section>

            <section className="section-meals" id="meals">

                <div className="container center-text">
                    <span className="sub-heading">
                        Meals
                    </span>
                    <h2 className="meal-title">
                        Omnifood AI chooses from 5,000+ recipes
                    </h2>
                </div>

                <div className="container grid grid--3--cols margin-bottom-md">
                    <MealCard />
                    <DietCard />
                </div>
                <div className="container all-recepies">
                    <a className="link" href="#recipe">See all recipes &rarr;</a>
                </div>
            </section>

            <section className="section-testimonials" id="testimonial">
                <div className="testimonial-container">
                    <span className="sub-heading">
                        Testimonials
                    </span>
                    <h2 className="heading-secondary">
                        Once you try it,you can't go back
                    </h2>
                    <div className="testimonials">
                        {testimonials.map(testimonial => <TestimonialBox {...testimonial} />)}
                    </div>
                </div>

                <div className="gallery">
                    <TestimonialGalleryImage />
                </div>
            </section>

            <section className="section-pricing" id="pricing">
                <div className="container">
                    <span className="sub-heading">
                        Pricing
                    </span>
                    <h2 className="heading-secondary">
                        Eating well without breaking the bank
                    </h2>
                </div>

                <div className="container grid grid--2--cols margin-bottom-md">
                    {pricingCards.map(card => <PricingCard {...card} />)}
                </div>

                <div className="container grid">
                    {/* aside meaning is when it contain some additional but not crucial information */}
                    <aside className="plan-details">
                        Prices include all applicable taxes. Users can cancel at any time.
                    </aside>
                </div >

                <div className="container grid grid--4--cols">
                    {featureCard.map(card => <FeatureCard {...card} />)}
                </div>
            </section>

            <section className="section-cta" id="cta">
                <div className="container">
                    {/* <div className="container cta"> 
                changed to <div className="cta"> because container class has padding which was causing an issue giving the padding to cta box */}
                    <div className="cta">
                        <div className="cta-text-box">
                            <h2 className="heading-secondary">
                                Get your frist meal for free!
                            </h2>

                            <p className="cta-text">
                                Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can
                                cancel or pause anytime. And the first meal is on us!
                            </p>

                            <form className="cta-form" action="#">
                                <div>
                                    <label for="full-name">
                                        Full Name
                                    </label>
                                    <input id="full-name" type="text" placeholder="John Smith" required />
                                </div>

                                <div>
                                    <label for="email">
                                        Email address
                                    </label>
                                    <input id="email" type="email" placeholder="me@example.com" required />
                                </div>

                                <div>
                                    <label>Whre did you hear from us?</label>
                                    <select id="select-where" required>
                                        <option value="">Please choose one option</option>
                                        <option value="friends">Friends and Family</option>
                                        <option value="youtube">Youtube video</option>
                                        <option value="podcast">Podcast</option>
                                    </select>
                                </div>

                                <button className="btn btn--form">Sign up now </button>
                            </form>
                        </div>
                        <div className="cta-img-box" role="img" aria-label="Women enjoying Food">
                            {/* because it will be a empty div */}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Homepage;