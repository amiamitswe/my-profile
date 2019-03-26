import React from 'react';
import {Link} from 'react-router-dom';

const pageNotFound = () => {
    return(
        <div>
            <h3>404-Page not found</h3>
        <Link to="/">Home</Link>
        </div>
    );
}

export default pageNotFound;