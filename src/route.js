import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './home.js';
import Joblisting from './joblisting.js';
import News from './News.js';
import Login from './Login.js';
import Reg from './Reg.js';
import Explore from './Explore.js';
import Impacts from './impacts.js';
import Research from './rs.js';
import ClimateChangeVisualizer from './Chart.js';
import ClimateDosDonts from './DosDonts.js'


export default function Routing() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/components/home" element={<Home/>} />
                <Route path="/components/joblisting" element={<Joblisting/>} />
                <Route path="/components/news" element={<News/>} />
                <Route path="/components/login" element={<Login/>} />
                <Route path="/components/reg" element={<Reg/>} />
                <Route path="/components/explore" element={<Explore/>} />
                <Route path="/components/Future_Impacts" element={<Impacts/>}/> 
                <Route path="/components/research_papers" element={<Research/>}/>
                <Route path="/components/graph" element={<ClimateChangeVisualizer/>}/> 
                <Route path="/components/DosDonts" element={<ClimateDosDonts/>}/>
            </Routes>
        </Router>
    )
}

