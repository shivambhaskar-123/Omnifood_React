import React from "react";

const TestimonialBox =(props)=>{
    const {quote,name,image}=props
    return (
        <figure className="testimonial">
                    <img className="testimonial-img" src={image} alt="Customer Bryan"/>
                    <blockquote className="testimonial-text">
                       {quote}
                    </blockquote>
                    <p className="testimonial-name">
                        &mdash; {name}
                    </p>
                </figure>
        )
}

export default TestimonialBox;