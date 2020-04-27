import { UPDATE_CUSTOMERS } from '../constants/index';
import { createAction } from 'redux-actions';
import { apiPut } from '../api';
import { urlCustomers } from '../api/urls';

export const updateCustomer = createAction(UPDATE_CUSTOMERS, 
    (id, customer) => apiPut(urlCustomers, id, customer)());