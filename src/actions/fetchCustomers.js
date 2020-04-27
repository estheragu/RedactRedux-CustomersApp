import { FETCH_CUSTOMERS } from '../constants/index';
import { createAction } from 'redux-actions';
import { apiGet } from '../api';
import { urlCustomers } from '../api/urls';

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));