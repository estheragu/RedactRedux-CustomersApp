import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, 
    NEW_CUSTOMERS, 
    UPDATE_CUSTOMERS, 
    DELETE_CUSTOMER } from './../constants/index';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload],
    [NEW_CUSTOMERS]: (state, action) => [ ...state, action.payload ],
    [UPDATE_CUSTOMERS]: (state, action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload;
        const customers = state;
        const initialValue = [];
        const newCustomers = customers.reduce( (acc, customer) => {
            if (customer.id === id) {
                return [ ...acc, customerPayload];
            } else {
                return [ ...acc, customer ];
            }
        }, initialValue);

        return newCustomers;
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);