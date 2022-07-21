import React from 'react';
import propTypes from 'prop-types';
import '../styles/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ planetName }
        />
        <p data-testid="planet-name" className="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;
