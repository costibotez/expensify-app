// Higher Order Component (HOC) - A component (HOC) that renders another component

// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);  

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>Info</h1>
           <WrappedComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to view this info!</p>
            )}
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true}/>, document.getElementById('app'));