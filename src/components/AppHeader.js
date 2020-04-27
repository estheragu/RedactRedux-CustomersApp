import React from 'react';

const AppHeader = props => {
    return (
        <div>
            <div className="app-header">
                <h1>{props.title}</h1>
            </div>
        </div>
    );
};

export default AppHeader;