import { Routes, Route } from 'react-router-dom'
import Header from './src/Components/Header'
import Footer from './src/Components/Footer'
import AboutProject from './src/Components/AboutProject'
import Articles from './src/Components/Articles'
import Contacts from './src/Components/Contacts'


import './css/Header.css'
import './css/Items.css'
import './css/Footer.css'
import './css/AboutProject.css'
import './css/Articles.css'

function Home(){
    return(
        <>
        <Header/>
        </>
    )
}

export default function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutProject" element={<AboutProject />} />
            <Route path='/Articles' element={<Articles/>}/>
            <Route path='/Contacts' element={<Contacts/>}/>
        </Routes>
        </>
    )
}