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
        let isUsersPath = new RegExp('/users/', 'i')
        let bothUsersPaths = isUsersPath.test(this.props.location.pathname) && isUsersPath.test(prevProps.location.pathname)
        let currentPathWildcard = this.props.location.pathname.slice(7).split('/')[0]
        let prevPathWildcard = prevProps.location.pathname.slice(7).split('/')[0]
        let navToDiffUser = bothUsersPaths && (currentPathWildcard !== prevPathWildcard)
        if ((prevProps.location.pathname === "/" && this.props.location.pathname !== "/") || navToDiffUser){
            this.setState({render: false})
            setTimeout(() => this.setState({render: true}), 250)
        }
    }
    render(){ 
        return this.RenderWhenCalled()
    }
}

export default withRouter(Footer)