import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const Planets = planets.map(({ name, image }) => (
      <PlanetCard key={ name } planetName={ name } planetImage={ image } />
    ));
    return (
      <div data-testid="solar-system" className="planets-container">
        <div className="planets-title">
          <Title headline="Planetas" />
        </div>
        <div className="planets-cards">{Planets}</div>
      </div>
    );
  }
}

export default SolarSystem;
