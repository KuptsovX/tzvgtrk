import {useState} from "react";
import CreditCard from "./CreditCard";
import './CreditCardForm.sass'

export default function CreditCardForm() {
    const [cardNumberData, setCardNumberData] = useState<string>('')
    const [cardNameData, setCardNameData] = useState<string>('')
    const [cardExpireData, setCardExpireData] = useState<string>('')
    const [cardCvvData, setCardCvvData] = useState<string>('')
    const [submittedData, setSubmittedData] = useState<object>({})
    const [cvvToggle, setCvvToggle] = useState<boolean>(false) // Триггер для анимации карты


    const handleSubmitData = (e: { preventDefault: () => void; }) => {
        setSubmittedData({cardNumberData, cardNameData, cardExpireData, cardCvvData})
        setTimeout(() => {
        setCardNumberData('')
        setCardExpireData('')
        setCardNameData('')
        setCardCvvData('')}, 2000) // очищает форму при отправке, эмулируя, что данные отправились
    }

    return (
        <div className='credit-card-form-container'>
            <form className='credit-card-form-container-form'>
                <input className='credit-card-form-container-form-input' placeholder='Номер карты'
                       value={cardNumberData}
                       onChange={(e) => setCardNumberData(e.target.value)} onFocus={() => setCvvToggle(false)}/>
                <input className='credit-card-form-container-form-input' placeholder='Имя Фамилия' value={cardNameData}
                       onChange={(e) => setCardNameData(e.target.value)} onFocus={() => setCvvToggle(false)}/>
                <input className='credit-card-form-container-form-input' placeholder='MM/YY' value={cardExpireData}
                       onChange={(e) => setCardExpireData(e.target.value)} onFocus={() => setCvvToggle(false)}/>
                <input className='credit-card-form-container-form-input' placeholder='CVV' value={cardCvvData}
                       onChange={(e) => setCardCvvData(e.target.value)} onFocus={() => setCvvToggle(true)}/>
                    <div className='credit-card-form-container-form-tooltip'>
                        <p>?</p>
                        <span className='credit-card-form-container-form-tooltip-text'>
                            3 цифры на задней стороне карточки
                        </span>
                    </div>
                <button className='credit-card-form-container-form-button' type='submit'
                        onClick={handleSubmitData}>Отправить
                </button>
            </form>
            <CreditCard toggle={cvvToggle} setToggle={setCvvToggle} cardNumber={cardNumberData}
                        cardName={cardNameData} cardExpire={cardExpireData} cardCvv={cardCvvData}/>
            {JSON.stringify(submittedData)}
            {/*Данные в формате JSON, здесь, чтобы как-то использовать submittedData*/}
        </div>
    )
}