import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {

    const [marginTop, setMarginTop] = useState(0)

    useEffect(() => {
        const box = document.querySelector('.navbar')
        setMarginTop(box.offsetHeight + parseInt(getComputedStyle(box).marginTop))
    })
    return (
        <div className="App" style={{marginTop: marginTop}}>
            <Header />
            <Hero />
            <Bio />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;
