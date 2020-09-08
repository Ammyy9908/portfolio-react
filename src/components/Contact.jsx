import React from 'react'

function Contact() {
    return (
        <div>
             
            <div className="hero" id="contact">
                <div className="hero-body">
                <div className="columns">
                <div className="column">
                <h2 className="title is-size-1">Contact Me</h2>
                <div className="card" style={{"margin":"45px auto","maxWidth":"400px"}}>
                <div className="card-content">
                   
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="email" className="input"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <input type="text" className="input"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea type="text" className="textarea"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input type="submit" value="Post" className="button is-danger"/>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
