import React from 'react';
import './App.css';

import Header from './component/Header.js';
import Main from './component/Main.js';
import Footer from './component/Foteer.js';

import SelectedBeast from './component/SelectedBeast.js';

import data from './component/data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      lilBeastieData: data,
      selectedBeast: {}
    };
  }

  showModal = (name) => {

    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({selectedBeast, displayModal:true});
  }

  hideModal = () => {this.setState({displayModal: false});
  }

  render() {
    return (
      <div>
        <Header />
        
        <Main 
          showModal={this.showModal}
          beasts={this.state.lilBeastieData} 
        />
        <SelectedBeast 
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div> 
    );
  }
}

export default App;
