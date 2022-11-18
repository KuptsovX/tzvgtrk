import './CarouselItem.sass'
import {Dispatch, SetStateAction} from "react";


interface CarouselItemProps {
    name: string;
    surname: string;
    picture: string;
    style: { transform: string; }
    setClick: Dispatch<SetStateAction<boolean>>
    click: boolean
    setName: Dispatch<SetStateAction<string>>
    setSurname: Dispatch<SetStateAction<string>>
    setId: Dispatch<SetStateAction<string>>
}

export default function CarouselItem({
                                         name,
                                         picture,
                                         surname,
                                         style,
                                         setClick,
                                         click,
                                         setName,
                                         setSurname,
                                         setId
                                     }: CarouselItemProps) {

    return (
        <>
            <div className='carousel-item-container' onClick={() => {
                setClick(!click)
                setName(name)
                setSurname(surname)
                setId(picture)
            }} style={style}>
                <div className='carousel-item-container-picture'><img
                    src={`https://api.smotrim.ru/api/v1/pictures/${picture}/bq/redirect`} alt={'img'}/></div>
                <span className='carousel-item-container-text'>{name}</span>
                <span className='carousel-item-container-text'>{surname}</span>

            </div>
        </>
    )
}