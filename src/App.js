import React from 'react';
import './App.css';
import DogsContainer from './components/DogsContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: '',
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  handleClick(event) {
    event.preventDefault();
    this.fetchDog();
  }

  fetchDog() {
    this.setState(
      { loading: true },
      async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const jsonResponse = await response.json();
        const dog = (await jsonResponse).message;
        this.setState({
          loading: false,
          dog,
        });
      },
    );
  }

  render() {
    const { dog, loading } = this.state;
    return (
      <div className="App">
        <h1>DOGS!</h1>
        {
          loading ? <div className="doguinho-container">Click OK to see DA DOG!</div>
            : <DogsContainer dog={ dog } />
        }
        <button type="button" onClick={ this.handleClick }>MOOOOORE DOOOOOGS!</button>
      </div>
    );
  }
}

export default App;
