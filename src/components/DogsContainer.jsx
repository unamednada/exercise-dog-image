import React from 'react';
import './DogsContainer.css';
import PropTypes from 'prop-types';

class DogsContainer extends React.Component {

  componentDidMount() {
    const { dog } = this.props;
    const breed = dog.split('https://images.dog.ceo/breeds/')[1].split('/')[0];
    localStorage.setItem('urlDog', dog);
    alert(`A raça do doguinho é: ${breed}`);
  }

  render() {
    const { dog } = this.props;
    return (
      <div>
        <img src={ dog } alt="" />
      </div>
    );
  }
}

DogsContainer.propTypes = {
  dog: PropTypes.string.isRequired,
};

export default DogsContainer;
