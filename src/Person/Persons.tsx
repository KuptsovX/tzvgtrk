import React, {useEffect, useState} from "react";
import axios from "axios";
import Carousel from "./Carousel";
import PersonCard from "./PersonCard";

export default function Persons() {
    const [data, setData] = useState([])
    const url = 'https://cdnapi.smotrim.ru/api/v1/boxes/vesti2'
    const [handleClick, setHandleClick] = useState(false)
    const [cardName, setCardName] = useState('')
    const [cardSurname, setCardSurname] = useState('')
    const [cardId, setCardId] = useState('')

    useEffect(() => {
        axios.get(url)
            .then((res: any) => {
                const person = res.data.data.content.filter((e: any) => {return e.title === 'Персоны'})
                setData(person[0].content)
                console.log(person[0].content)
            })
        //eslint-disable-next-line
    },[])

    return (
        <div className='person-container' >
        {handleClick && <PersonCard name={cardName} surname={cardSurname} picture={cardId} />}
        <Carousel data={data} click={handleClick} setSurname={setCardSurname} setId={setCardId} setClick={setHandleClick} setName={setCardName}/></div>
    )
}