import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
import { CUSTOMER_LIST } from '../constants/permissions';
import { accessControl } from '../helpers/accessControl';

const CustomerList = ({ customers, urlPath }) => {
    return (
            <div className="customers-list">
                {
                    customers.map( c => 
                        <CustomerListItem 
                            key={c.dni}
                            dni={c.dni}
                            customer={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}>
                        </CustomerListItem>
                        )
                }
            </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomerList);