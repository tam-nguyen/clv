import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  border: 5px solid black;
  background-color:  ${props => props.bgcolor ? props.bgcolor : '#FFF'};
  border-radius: ${props => props.bdradius ? props.bdradius : 0}px;
  ${props => props.bdradius ? `box-shadow: 5px 10px #888;` : null}
`
const checkPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0)
      return false;
  }
  return num !== 1 && num !== 0;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      bgcolor: null,
      borderradius: null
    }
  }



  handleClick = (e) => {
    e.preventDefault();
    let newNumber = this.state.number;
    const limitNumber = 100;

    newNumber++;

    let newbgcolor;
    let newborderradius;
    if (newNumber > limitNumber) {
      newNumber = 0;
      this.setState({
        number: newNumber
      })
    } else if (newNumber % 5 === 3) {
      newbgcolor = 'green'
      this.setState({
        bgcolor: newbgcolor
      })
    } else if (checkPrime(newNumber)) {
      newbgcolor = 'blue'
      this.setState({
        bgcolor: newbgcolor
      })
    } else if (newNumber % 10 === 0 && newNumber > 0) {
      newborderradius = 30;
      this.setState({
        borderradius: newborderradius
      })
    }
    this.setState({
      number: newNumber
    })


  }
  render() {
    return (
      <div className="App">
        <Container bgcolor={this.state.bgcolor} bdradius={this.state.borderradius}>
          <input type="number" name="number" placeholder={this.state.number} readOnly /><br />
          <button onClick={this.handleClick.bind(this)}>Click me</button>
        </Container>
      </div>
    );
  }
}

export default App;
