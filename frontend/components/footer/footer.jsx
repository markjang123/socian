import React from 'react'
class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="footer-link-wrapper">
                    <p>Developed by Mark Jang</p>
                    <a className="footer-links" target="_blank" href="https://www.linkedin.com/in/mark-jang-b89b5a1b5/">LinkedIn</a>
                    <br/>
                    <a className="footer-links" target="_blank" href="https://github.com/markjang123">Github</a>
                    <br />
                    <a className="footer-links" target="_blank" href="https://angel.co/u/mark-jang">AngelList</a>
                    <br />
                    <br />
                    <a className="footer-links" target="_blank" href="https://bandcamp.com/">Based on Bandcamp.com</a>
                </div>
            </div>
        )
    }
}

export default Footer