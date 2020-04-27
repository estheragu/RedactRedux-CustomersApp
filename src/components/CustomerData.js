import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './CustomerActions';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_VIEW } from '../constants/permissions';

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllow, onDelete }) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                    <div><strong>Nombre: 
                        <i>{name}</i></strong>
                    </div>
                    <div><strong>DNI: 
                        <i>{dni}</i></strong>
                    </div>
                    <div><strong>Edad: 
                        <i>{age}</i></strong>
                    </div>
                    <CustomerActions>
                    <button onClick={onBack}>Volver</button>
                    {isDeleteAllow && <button onClick={() => onDelete(id)}>Eliminar</button>}
                    </CustomerActions>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool.isRequired,
    onDelete: PropTypes.func,

};

export default accessControl([CUSTOMER_VIEW])(CustomerData);