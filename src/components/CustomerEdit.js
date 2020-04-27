import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitials } from '../helpers/setPropsAsInitials';
import CustomerActions from './CustomerActions';
import { Prompt } from 'react-router-dom';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_EDIT } from '../constants/permissions';

//Validaciones del form de manera automática
const validate = values => {
    const error = {};

    if(!values.name){
        error.name = "El campo nombre es requerido";
    }

    if(!values.dni){
        error.dni = "El dni es un campo requerido";
    }else if(isNaN(Number(values.dni))){
        error.dni = "El campo debe ser de tipo numérico";
    }

    if(!values.age){
        error.age = "La edad es un campo requerido";
    }

    return error;
}

const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();

class CustomerEdit extends Component{
    componentDidMount(){
        if(this.txt){
            this.txt.focus();
        }
    }

    renderField = ({input, meta, type, label, name, withFocus}) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} 
            value={input.value || ''} 
            type={type ? type : "text"}
            ref={withFocus && (txt => this.txt = txt)}/>
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    );

    render(){
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div>
                <h2>Edición del cliente</h2>
                <form onSubmit={handleSubmit}>
                        <Field withFocus name="name" component={this.renderField} type="text" label="Nombre:" parse={toUpper} format={toLower}></Field>
                        <Field name="dni" component={this.renderField} type="text" label="Dni:"></Field>
                        <Field name="age" component={this.renderField} type="number" label="Edad:" parse={toNumber}></Field>
                        <CustomerActions>
                            <button type="submit" disabled={pristine || submitting}>Guardar</button>
                            <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                        </CustomerActions>
                        <Prompt
                        /* pristine nos indica si hubo alguna modificación en el formulario*/
                            when={!pristine && !submitSucceeded}
                            message= "Se perderán los datos si continúa"
                        ></Prompt>
                </form>
            </div>
        );
    }
    
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const customerEditForm = reduxForm({ 
    form: 'customerEdit',
    validate
})(CustomerEdit);

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitials(customerEditForm));