import React from 'react'

function Footer() {
    return (
        <div>
            <div className="hero is-medium is-black">
                <div className="hero-body">
                    <div className="container">
                        <h2 className="title">Sumit Kumar</h2>
                        <ul style={{"listStyle":"none"}}>
                            <li><a href="http://"><i className="fab fa-facebook"/></a></li>
                            <li><a href="http://"><i className="fab fa-linkedin"/></a></li>
                            <li><a href="http://"><i className="fab fa-instagram"/></a></li>
                            <li><a href="http://"><i className="fab fa-github"/></a></li>
                        </ul>
                        <p style={{"marginTop":"15px"}}>Made with {"L<3ve"} using ReactJS & Bulma CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
