import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ consultant }) => {
  return (
  <div className="card mt-3">
    <div className="card-block">
      <h4 className="card-title">{consultant.given_name} {consultant.family_name}</h4>
      <h5 className="card-subtitle mb-2 text-muted">{consultant.locality}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        { consultant.products.map(item => {
          return (
            <span> {item.name}, </span>
          );
        })}
      </h6>
     <a href={consultant.linkedin_uri} className="card-link">LinkedIn</a> 
    </div>
  </div>
  );
}

Card.propTypes = {
  consultant: PropTypes.object
}

export default Card;