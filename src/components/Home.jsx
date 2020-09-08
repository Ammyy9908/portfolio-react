import React from 'react'
import '../Home.css'

function Home() {

    
    return (
        <div>
            <div className="hero is-black is-fullheight is-home" id="home">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-title">I'm Sumit Kumar</h1>
                        <p className="subtitle">I'm a Self-taught Programmer based in Bangalore(India)</p>
                        <ul style={{"listStyle":"none"}}>
                            <li><a href="http://"><i className="fab fa-facebook"/></a></li>
                            <li><a href="http://"><i className="fab fa-linkedin"/></a></li>
                            <li><a href="http://"><i className="fab fa-instagram"/></a></li>
                            <li><a href="http://"><i className="fab fa-github"/></a></li>
                        </ul>
                        <br/>
                        <a href="#about" className="bottom-button is-white button is-rounded"><i className="fa fa-arrow-down"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
