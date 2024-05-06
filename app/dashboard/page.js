"use client"

// pages/index.js
import { useState } from 'react';
import './styles.css';

const menuData = [
    { id: 1, name: 'Physics JEE And NEET', category: 'Roll Food', price: 100, popularity: 4, totalQuantity: 1 },
    { id: 2, name: 'Chemistry JEE And NEET', category: 'Break Fast', price: 200, popularity: 5, totalQuantity: 1 },
    { id: 3, name: 'Biology NEET', category: 'Dessert', price: 150, popularity: 3, totalQuantity: 1 },
    { id: 4, name: 'Mathematics JEE', category: 'Meal', price: 300, popularity: 2, totalQuantity: 1 },
    // Add more menu items as needed
];

const Index = () => {
    const [orderList, setOrderList] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('price');

    const getImageUrl = (itemId) => {
        if (itemId === 1) {
            return 'https://us.123rf.com/450wm/tohey/tohey2403/tohey240300006/226544508-laboratory-abstract-flask-with-neon-colorful-liquid-digital-lab-background-science-and-chemistry.jpg?ver=6';
        } else if (itemId === 2) {
            return 'https://us.123rf.com/450wm/tohey/tohey2403/tohey240300006/226544508-laboratory-abstract-flask-with-neon-colorful-liquid-digital-lab-background-science-and-chemistry.jpg?ver=6';
        } else if (itemId === 3) {
            return 'https://us.123rf.com/450wm/tohey/tohey2403/tohey240300006/226544508-laboratory-abstract-flask-with-neon-colorful-liquid-digital-lab-background-science-and-chemistry.jpg?ver=6';
        }
        return 'https://us.123rf.com/450wm/tohey/tohey2403/tohey240300006/226544508-laboratory-abstract-flask-with-neon-colorful-liquid-digital-lab-background-science-and-chemistry.jpg?ver=6';
    };

    const renderMenuItems = (items) => {
        return items.map((item) => (
            <tr key={item.id} className="menu-item">
                <td>
                    <img src={getImageUrl(item.id)} />
                </td>
                <td>
                    <h3>{item.name}</h3>
                    <p>Category: {item.category}</p>
                    <p>Price: Rs {item.price}</p>
                </td>
                <td>
                    <div>
                        <button onClick={() => addToOrder(item.id)}>Add to Cart</button>
                    </div>
                </td>
            </tr>
        ));
    };

    const addToOrder = (itemId) => {
        const menuItem = menuData.find((item) => item.id === itemId);
        const updatedOrderList = [...orderList];
        const existingItemIndex = updatedOrderList.findIndex((item) => item.id === itemId);

        if (existingItemIndex !== -1) {
            updatedOrderList[existingItemIndex].totalQuantity += 1;
        } else {
            updatedOrderList.push({ ...menuItem });
        }

        setOrderList(updatedOrderList);
        setTotalAmount(totalAmount + menuItem.price);
    };

    const removeFromOrder = (itemId) => {
        const menuItem = menuData.find((item) => item.id === itemId);
        const updatedOrderList = [...orderList];
        const existingItemIndex = updatedOrderList.findIndex((item) => item.id === itemId);

        if (existingItemIndex !== -1) {
            if (updatedOrderList[existingItemIndex].totalQuantity > 1) {
                updatedOrderList[existingItemIndex].totalQuantity -= 1;
            } else {
                updatedOrderList.splice(existingItemIndex, 1);
            }
            setOrderList(updatedOrderList);
            setTotalAmount(totalAmount - menuItem.price);
        }
    };

    const placeOrder = () => {
        alert('Order placed successfully!');
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = (e) => {
        setSortBy(e.target.value);
    };

    const filteredItems = menuData.filter(
        (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedItems = [...filteredItems].sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'popularity') {
            return b.popularity - a.popularity;
        }
    });

    return (
        <div>
            {/* <h1>Student Dashboard</h1> */}
            <div className="content">
                <div>
                    <div>
                        <label htmlFor="search">Search:</label>
                        <input type="text" id="search" placeholder="Search for Subject" onChange={handleSearch} />
                    </div>

                    <div>
                        <label htmlFor="sort">Sort by:</label>
                        <select id="sort" onChange={handleSort}>
                            <option value="price">Price</option>
                            <option value="popularity">Popularity</option>
                        </select>
                    </div>

                    <div className="menu-container" id="menu-container">
                        <table id="menu_container">{renderMenuItems(sortedItems)}</table>
                    </div>
                </div>

                <div>
                    <div className="order-container" id="order_details">
                        <h2>Your Order Summary</h2>
                        <p>
                            <i>Embark on a journey of knowledge and growth with our <br/>curated collection of transformative courses, tailored <br/>to fuel your passion and empower your future success!</i>
                        </p>
                        <table id="order-list">
                            {orderList.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <strong>{item.name}</strong>
                                    </td>
                                    <td>
                                        <span className="quantity">{item.totalQuantity}</span> x Rs {item.price}
                                    </td>
                                    <td>
                                        <button onClick={() => removeFromOrder(item.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                        <div id="total-amount">
                            <h4>Total Amount: Rs {totalAmount.toFixed(2)}</h4>
                        </div>
                        <button onClick={placeOrder}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
