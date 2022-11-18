import React from 'react';
import './App.css';
import CreditCardForm from "./CreditCard/CreditCardForm";
import Persons from "./Person/Persons";

export default function App() {
    return(
        <div className='app-container'>
            <CreditCardForm />
            <Persons />
        </div>
    )
}
