import React from "react";
import { galleryImages } from "../utils/constant/constant";

const TestimonialGalleryImage=()=>{
    return (
        galleryImages.map(image=>{return (
            <figure className="gallery-item">
                <img src={image} alt="Beautifully arranged food" />
            </figure>
        )})
    )
}

export default TestimonialGalleryImage;