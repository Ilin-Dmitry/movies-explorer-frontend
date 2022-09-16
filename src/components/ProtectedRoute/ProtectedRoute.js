import { useContext, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import { Consumer } from 'react';

const ProtectedRoute = ({children, ...props}) => {
  const isLogged = useContext(IsLoggedContext);

  return (

    <Route {...props}>
      { isLogged ? children : <Redirect to='/signin'/>}
    </Route>
  )
}

export default ProtectedRoute;