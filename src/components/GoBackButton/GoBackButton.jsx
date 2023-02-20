import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './go-back-button.css';

export const GoBackButton = () => {
  const location = useLocation();
  return (
    <Link className={css.button} to={location.state?.from || '/'}>
      Go Back
    </Link>
  );
};