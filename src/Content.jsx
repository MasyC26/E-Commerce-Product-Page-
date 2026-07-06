import { useState } from "react";

import image_product_1 from "./images/image_product_1.jpg";
import image_product_2 from "./images/image_product_2.jpg";
import image_product_3 from "./images/image_product_3.jpg";
import image_product_4 from "./images/image_product_4.jpg";
import icon_next from "./images/icon_next.svg";
import icon_previous from "./images/icon_previous.svg";
import icon_cart from "./images/icon_cart.svg";

function PageContent({ addToCart }) {
    const images = [image_product_1, image_product_2, image_product_3, image_product_4];

    const [activeIndex, setActiveIndex] = useState(0);
    const [count, setCount] = useState(0);

    const nextImage = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleAddToCart = () => {
        console.log("Clic Add to cart — count =", count);
        if (count > 0) {
            console.log("On envoie au panier:", { image: image_product_1, count: count });
            addToCart({ image: image_product_1, count: count });
            setCount(0);
        } else {
            console.log("Rien envoyé, count = 0");
        }
    };

    return (
        <main>
            <div className="gallery-container">
                <div className="main-image-wrapper">
                    <button className="nav-arrow left" onClick={prevImage} aria-label="Previous image">
                        <img src={icon_previous} className="previous-button" />
                    </button>

                    <img
                        src={images[activeIndex]}
                        alt="Produit vue principale"
                        className="main-image"
                    />

                    <button className="nav-arrow right" onClick={nextImage} aria-label="Next-image">
                        <img src={icon_next} className="next-button" />
                    </button>
                </div>

                <div className="thumbnails-grid">
                    {images.map((imgUrl, index) => (
                        <button
                            key={index}
                            className={`thumbnail-btn ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img src={imgUrl} alt={`Miniature ${index + 1}`} className="thumbnail-img" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-container">
                <div className="description-price">
                    <h4>SNEAKER COMPANY</h4>
                    <h3>Fall Limited Edition Sneakers</h3>
                    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable outer sole, they'll withstand everything the weather can offer.</p>

                    <div className="price-container">
                        <h3 className="price">$125.00 <span>50%</span></h3>
                        <p className="old-price">$250.00</p>
                    </div>
                </div>

                <div className="btn-container">
                    <div className="count-btn-container">
                        <button className="minus-btn" onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
                        <p className="count">{count}</p>
                        <button className="plus-btn" onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <button className="cart" onClick={handleAddToCart}>
                        <img src={icon_cart} /> Add to cart
                    </button>
                </div>
            </div>
        </main>
    );
}

export default PageContent;