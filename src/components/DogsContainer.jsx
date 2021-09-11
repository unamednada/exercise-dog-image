import React from 'react';
import PropTypes from 'prop-types';

class DogsContainer extends React.Component {
  render() {
    const { dog, handleClick } = this.props;
    return (
      <div>
        <img src={ dog } alt="" />
        <button type="button" onClick={ handleClick }>MOOOOORE DOOOOOGS!</button>
      </div>
    );
  }
}

DogsContainer.propTypes = {
  dog: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DogsContainer;
