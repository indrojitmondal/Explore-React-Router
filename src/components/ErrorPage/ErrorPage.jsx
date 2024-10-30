import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops!!</h2>
            <p>{error.status || error.statusText}</p>
            {
                error.status === 404 && <div> 
                     <h1>Page not found</h1>
                     <p>Go back where you from</p>
                     <Link to='/'><button  className='btn'>Home</button></Link>
                     
                    </div>

            }

                
            
        </div>
    );
};

export default ErrorPage;