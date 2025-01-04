"use client";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import "./styles.css";

export default function Home() {
    const [imgId, setImgId] = useState(1);

    useEffect(() => {
        const slideImage = () => {
            const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
            document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
        };

        slideImage();
        window.addEventListener('resize', slideImage);

        return () => window.removeEventListener('resize', slideImage);
    }, [imgId]);

    const handleImageClick = (event, id) => {
        event.preventDefault();
        setImgId(id);
    };

    return (
        <>
            <Head>
                <title>Nike Shoes</title>
                <link rel="stylesheet" href="/styles.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            </Head>

            <div className="card-wrapper">
                <div className="card_course">
                    {/* Card Left */}
                    <div className="product-imgs">
                        <div className="img-display">
                            <div className="img-showcase">
                                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
                            </div>
                        </div>
                    </div>

                    {/* Card Right */}
                    <div className="product-content">
                        <h2 className="product-title">nike shoes</h2>
                        <a href="#" className="product-link">visit nike store</a>
                        <div className="product-rating">
                            {[...Array(4)].map((_, i) => (
                                <i key={i} className="fas fa-star"></i>
                            ))}
                            <i className="fas fa-star-half-alt"></i>
                            <span>4.7 (21)</span>
                        </div>

                        <div className="product-price">
                            <p className="last-price">Old Price: <span>$257.00</span></p>
                            <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
                        </div>

                        <div className="product-detail">
                            <h2>about this item:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <ul>
                                <li>Color: <span>Black</span></li>
                                <li>Available: <span>in stock</span></li>
                                <li>Category: <span>Shoes</span></li>
                                <li>Shipping Area: <span>All over the world</span></li>
                                <li>Shipping Fee: <span>Free</span></li>
                            </ul>
                        </div>

                        <div className="purchase-info">
                            <input type="number" min="0" defaultValue="1" />
                            <button type="button" className="btn">
                                Add to Cart <i className="fas fa-shopping-cart"></i>
                            </button>
                            <button type="button" className="btn">Compare</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
