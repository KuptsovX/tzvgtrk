import './PersonCard.sass'
import Visual from "../CreditCard/Icons/Visual";

interface PersonCardProps {
    name: string;
    surname: string;
    picture: string
}

export default function PersonCard({name, surname, picture}: PersonCardProps) {
    return (
        <div className='person-card-container'>
            <div className='person-card-container-inner'>
                <Visual/>
                <img src={`https://api.smotrim.ru/api/v1/pictures/${picture}/bq/redirect`} alt='card-pic'/>
                <span className='person-card-container-inner-role'>Ведущий</span>
                <span className='person-card-container-inner-name'>{name}</span>
                <span className='person-card-container-inner-surname'>{surname}</span>
                <span className='person-card-container-inner-description'>Таким образом реализация намеченных плановых заданий играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же сложившаяся структура организации способствует подготовки и реализации соответствующий условий активизации.</span>
                <div className='person-card-container-info'></div>
            </div>
        </div>
    )
}