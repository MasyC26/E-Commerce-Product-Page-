import { useState } from "react";
import icon_menu from "./images/icon_menu.svg";
import logo from "./images/logo.svg";
import icon_cart from "./images/icon_cart.svg";
import image_avatar from "./images/image_avatar.png";
import icone_close from "./images/icon_close.svg";
import icon_delete from "./images/icon_delete.svg"

function Head({ cartItems, totalCount, removeFromCart }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <header>
            <div className="logo-nav">
                <button className="hamburger" onClick={() => setIsOpen(true)} aria-label="Open menu">
                    <img src={icon_menu} />
                </button>
                <img src={logo} />

                <nav className={isOpen ? "menu-open" : "menu-close"}>
                    <button className="close" onClick={() => setIsOpen(false)} aria-label="Close menu">
                        <img src={icone_close} />
                    </button>
                    <ul>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>

            <div className="cart-avatar">
                <div className="cart-wrapper">
                    <button className="cart-button" onClick={() => setIsCartOpen(!isCartOpen)} aria-label="Open cart">
                        <img className="cart" src={icon_cart} />
                        {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
                    </button>
                    {/* displaying the cart */}
                    {isCartOpen && ( 
                        <div className="cart-dropdown">
                            <h4>Cart</h4>
                            {cartItems.length === 0 ? (
                                <p className="empty-cart">Your cart is empty.</p>
                            ) : (
                                <>
                                    {cartItems.map((item, index) => (
                                        <div className="cart-item" key={index}>
                                            <img src={item.image} alt="product" />
                                            <div className="cart-item-info">
                                                <p>Fall Limited Edition Sneakers</p>
                                                <p>
                                                    $125.00 x {item.count}
                                                    <span> ${(125 * item.count).toFixed(2)}</span>
                                                </p>
                                            </div>
                                            <button className="remove-btn" onClick={removeFromCart} aria-label="Remove item">
                                                <img src={icon_delete} />
                                            </button>
                                        </div>
                                    ))}
                                    <button className="checkout-btn">Checkout</button>
                                </>
                            )}
                        </div>
                    )}
                </div>

                <img className="avatar" src={image_avatar} />
            </div>
        </header>
    );
}

export default Head;