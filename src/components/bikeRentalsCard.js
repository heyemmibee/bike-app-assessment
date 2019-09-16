import React from 'react';

function bikeRentalsCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Price:</strong> {props.price}
                    </li>
                    <li>
                        <strong>Product Type:</strong> {props.product_type}
                    </li>
                </ul>
            </div>
            <span
                onClick={() => props.removeBike(props.id)}
                className="remove bg-danger"
            >
                𝘅
            </span>
        </div>
    );
}

export default bikeRentalsCard;
