import React, { Component } from 'react';
import CustomerActions from '../components/CustomerActions';
import AppFrame from './../components/AppFrame';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("Handle on click");
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomerActions>
                        </div>
                    }></AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);