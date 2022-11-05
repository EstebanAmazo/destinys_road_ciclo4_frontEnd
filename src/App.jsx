import {useState} from 'react'

import './styles/Normalize.css'
import './styles/App.css'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Main from "./components/Main.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cotizar from "./pages/Cotizar.jsx";

function App() {
    const [count, setCount] = useState(0)




    return (
        <div className="">
            <Header/>

            <div className="contenedor">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cotizar" element={<Cotizar/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
