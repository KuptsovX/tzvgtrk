import React, {Dispatch, SetStateAction, useState} from "react";
import './Carousel.sass'
import CarouselItem from "./CarouselItem";
import ArrowIcon from "../CreditCard/Icons/Arrow";
import ArrowReverseIcon from "../CreditCard/Icons/ArrowReverse";

interface CarouselProps{
    data: any
    setClick: Dispatch<SetStateAction<boolean>>
    click: boolean
    setName: Dispatch<SetStateAction<string>>
    setSurname: Dispatch<SetStateAction<string>>
    setId: Dispatch<SetStateAction<string>>
}

export default function Carousel({data, setId, click, setClick, setName, setSurname}: CarouselProps) {
    const [currIndex, setCurrIndex] = useState(0)

    const handleScroll = () => {
        currIndex === 3 ? setCurrIndex(0) : setCurrIndex(currIndex + 1)
    }
    const handleReverseScroll = () => {
        currIndex === data.length ? setCurrIndex(data.length) : setCurrIndex(currIndex - 1)
    }

    return (
        <div className='carousel-container'>

            <div className='carousel-container-carousel'> {data.map((el: any) => <CarouselItem key={el.id}
                setClick={setClick}
                                                                                               setName={setName}
                                                                                               setId={setId}
                                                                                               setSurname={setSurname}
                                                                                               click={click}
                                                                                               name={el.name}
                                                                                               surname={el.surname}
                                                                                               picture={el.picId}
                                                                                               style={{transform: `translate(-${currIndex * 100}%)`}}/>)}</div>
            <button className='carousel-container-button' onClick={handleScroll}><ArrowIcon/></button>
            {currIndex !== 0 ?
                <button className='carousel-container-button-reverse' onClick={handleReverseScroll}><ArrowReverseIcon/>
                </button> : ''}
        </div>

    );
};