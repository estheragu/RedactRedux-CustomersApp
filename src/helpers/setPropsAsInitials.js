import React, { Component } from "react";

export const setPropsAsInitials = WrappedComponent => (
    class extends Component{
        render(){
            return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize/>
        }
    }
)