import { useRef } from "react";
import Footer from "./Footer";
import Items from "./Items";


export default function Header (){
    const itemsRef = useRef(null)

    const scrollItems = () =>{
        if(itemsRef.current){
            itemsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
    return(
    <>
    <div className="container">
        <div className="container__header">
            <h1 className="container__header--logo">ТаксиОнлайн</h1>
        </div>
        <div className="container__header--info" >
            <div className="container__header--text">
            <h2>Такси за 5 минут</h2>
            <p>Фиксированная цена Бесплатная подача. Работаем 24/7</p>
            <hr className="container__header--line"/>
            <button className="container__header--btn" onClick={scrollItems}>Забронировать</button>
            </div>
            <img src="./images/logo.png" alt="#" className="container__header--img" />
        </div>
        <Items/>
        <Footer/>
    </div>
    </>
    )
}