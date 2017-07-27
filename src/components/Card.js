import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ consultant }) => {
  return (
  <div className="card mt-3">
    <div className="card-block">
      <h4 className="card-title">{consultant.given_name} {consultant.family_name}</h4>
      <h6 className="card-subtitle mb-2 text-muted">{consultant.locality}</h6>
     <a href={consultant.linkedin_uri} className="card-link">LinkedIn</a> 
    </div>
  </div>
  );
}

Card.propTypes = {
  consultant: PropTypes.object
}

export default Card;