// src/components/RedirectHomeButton.jsx

import React from "react";
import { Navigate } from "react-router-dom";

export class RedirectHomeButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shouldRedirect: false
        }
    }


    changeRedirectStatus = () => {
        this.setState({shouldRedirect: true})
    }

    render(){
        return(
            <div>
                <button onClick={this.changeRedirectStatus}>
                    Return Home
                </button>
                {this.state.shouldRedirect && <Navigate to="/" />}  {/*<---- Conditional rendering happening here! */}
            </div>
        )
    }
}