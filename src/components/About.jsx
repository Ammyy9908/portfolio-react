import React from 'react'
import '../About.css'

function About() {
const dev_img_url = 'https://scontent.fblr16-1.fna.fbcdn.net/v/t1.0-9/82167545_1031919747253516_9004454775435527450_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=sA6mCJRZgJgAX_XHXa8&_nc_oc=AQlDq6W8wK5XmX7Gyynf4zy5QJS1Fcnsl4lt3Fo9SdGRpK8Rnd0AlOFWBSwppqWxj3E&_nc_ht=scontent.fblr16-1.fna&oh=e2a1e3935b36def7ea0e20935aa774fd&oe=5F7C1209'
    
    return (
        <div>
            <div className="hero is-dark is-fullheight is-About" id="about">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6">
                            <figure class="image">
                            <img src={dev_img_url} className="is-rounded dev" alt="dev"/>
                            </figure>
                            </div>
                            <div className="column is-6">
                                <h2 className="title">About Me</h2>
                                <p className="subtitle">I'm a Self-taught Programmer based in Bangalore(India)</p>
                                <br/>
                                <h2 className="title">Contact Details</h2>
                                <address className="address">
                                    <i className="fa fa-map-pin"/> 1st Main 7th Cross,Vinaykanagar,
                                    yelehnakan,Bangalore(560063)<br/>
                                    <i className="fa fa-envelope"/> sb78639@gmail.com
                                </address>
                                <br/>
                                <button className="button is-danger" onClick={event=>alert("Resume not Found!")}>Download Resume</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About
