import React from 'react'
import {withRouter} from 'react-router-dom'
class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state = {render: false}
    }
    RenderWhenCalled(){
        return this.state.render ?
            ( <div className="footer">
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
           ) :
            null
           
    }
    componentDidMount(){
        this.setState({render: true})
    }
    componentDidUpdate(prevProps){
        if (prevProps.location.pathname === "/" && this.props.location.pathname !== "/"){
            this.setState({render: false})
            setTimeout(() => this.setState({render: true}), 250)
        }
    }
    render(){ 
        console.log(this.props.location)
        return this.RenderWhenCalled()
    }
}

export default withRouter(Footer)