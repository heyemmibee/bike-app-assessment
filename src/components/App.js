import React, { Component } from 'react';
import '../assets/css/App.css';

import bikeRentals from '../assets/data/bikerentals.json';

import BikeRentalCard from './bikeRentalsCard';

export default class App extends Component {
    state = {
        bikeRentals: bikeRentals.products
    };

    removeBike = id => {
        const bikeRentals = this.state.bikeRentals.filter(
            equipment => equipment.id !== id
        );

        this.setState({ bikeRentals });
    };

    render() {
        return (
            <div>
                {this.state.bikeRentals.map(eachItem => {
                    return (
                        <BikeRentalCard
                            removeBike={this.removeBike}
                            id={eachItem.id}
                            key={eachItem.id}
                            name={eachItem.name}
                            image={eachItem.image}
                            price={eachItem.price}
                            product_type={eachItem.product_type}
                        />
                    );
                })}
            </div>
        );
    }
}
