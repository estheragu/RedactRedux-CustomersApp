import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ customer, editAction, delAction, urlPath, dni }) => {
    return (
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${urlPath}${dni}`}>{customer}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
                </div>
            </div>
    );
};

CustomerListItem.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
};

export default CustomerListItem;