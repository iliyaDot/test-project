import React, { Component } from 'react'

export default class Login extends Component {




constructor(props){
    super(props);
 
    this.userNameInput = React.createRef();
}

componentDidMount(){
    this.userNameInput.current.focus();
}


// componentDidMount() {

// document.querySelector("[type='text']").focus();
// }

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <form method="post">
                    <input ref={this.userNameInput} type="text" name="u" placeholder="Username" required="required" />
                    <input type="password" name="p" placeholder="Password" required="required" />
                    <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
            </div>
        )
    }
}
