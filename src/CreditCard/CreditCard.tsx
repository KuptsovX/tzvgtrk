import './CreditCard.sass'
import {Dispatch, SetStateAction} from "react";
import VisaIcon from "./Icons/VisaIcon";
import MasterCardIcon from "./Icons/MasterCardIcon";
import MirIcon from "./Icons/MirIcon";

interface CreditCardProps {
    cardNumber: string;
    cardName: string;
    cardExpire: string;
    cardCvv: string;
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
}

export default function CreditCard({cardName, cardNumber, cardCvv, cardExpire, toggle}: CreditCardProps) {
    return (
        <div  className={toggle ? 'credit-card-container-reverse' : 'credit-card-container'}>
            {!toggle ? <>
                    <div className='credit-card-container-logo'>
                        {cardNumber[0] === '3' ? <MirIcon /> : cardNumber[0] === '4' ? <VisaIcon /> : cardNumber[0] === '5' ? <MasterCardIcon /> : ''}
                        {/*Логика отрисовки фирмы карты, т.к. за каждой из фирм зарегистрирован свой стартовый номер(номер недостоверный, взял от себя)*/}
                    </div>
                    <div className='credit-card-container-number'>{cardNumber}</div>
                    <div className='credit-card-container-name'>{cardName}</div>
                    <div className='credit-card-container-expire'>{cardExpire}</div>
                </>
            : <>
                    <div className='credit-card-container-black-line'/>
                    <div className='credit-card-container-cvv'>CVV: {cardCvv}</div>
                    <div className='credit-card-container-logo'>
                        {cardNumber[0] === '3' ? <MirIcon /> : cardNumber[0] === '4' ? <VisaIcon /> : cardNumber[0] === '5' ? <MasterCardIcon /> : ''} </div>
                </>}
        </div>
    )
}