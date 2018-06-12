import React, { Component } from 'react'

import Header from './Header';
import Footer from './Footer';
import Title from './Title'

class Main extends Component {
    render() {
      return (
        <div className="App">
        <Header />
      <Title />
        <Footer />
        </div>
      )
    }
}
export default Main