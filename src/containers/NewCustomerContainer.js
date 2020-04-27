import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import { getCustomersByDni } from '../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit';
import { fetchCustomers } from '../actions/fetchCustomers';
import { SubmissionError } from 'redux-form';
import { newCustomer } from '../actions/newCustomer';
import { PropTypes } from 'prop-types';

class NewCustomerContainer extends Component {

    handleSubmit = values => {
        return this.props.newCustomer(values)
            .then(v => v).catch(err => {
                if(err.error) {
                    throw new SubmissionError(err.payload);
                }
            });
      }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    renderBody = () => ( 
        <Route path="/customers/new" children={
            () => <CustomerEdit 
            onSubmit={this.handleSubmit} 
            onBack={this.handleOnBack} 
            onSubmitSuccess={this.handleOnSubmitSuccess}></CustomerEdit>
        }/>
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Creación de nuevo cliente`}
                    body={this.renderBody()}
                />
            </div>
        );
    }
}

NewCustomerContainer.propTypes ={
    newCustomer: PropTypes.func.isRequired,
} 

const mapStateToProps = (state, props) => ({
    customer: getCustomersByDni(state, props)
});

export default withRouter(connect(mapStateToProps, { fetchCustomers, newCustomer })(NewCustomerContainer));