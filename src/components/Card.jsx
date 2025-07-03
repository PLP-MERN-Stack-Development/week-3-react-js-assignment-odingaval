import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className = '', ...rest }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-500 ease-out transform ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card; 