import { NEW_CUSTOMERS } from '../constants/index';
import { createAction } from 'redux-actions';
import { apiPost } from '../api';
import { urlCustomers } from '../api/urls';

export const newCustomer = createAction(NEW_CUSTOMERS, 
    (customer) => apiPost(urlCustomers, customer)());