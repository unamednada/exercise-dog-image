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
          loading ? <p>Loading...</p>
            : <DogsContainer dog={ dog } handleClick={ this.handleClick } />
        }
      </div>
    );
  }
}

export default App;
